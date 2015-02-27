module.exports = function ( grunt ) {
  var Promise = require( 'es6-promise' ).Promise;
  var exec = require( 'child_process' ).exec;
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  return {
    getTags: function () {
      return new Promise( function ( resolve, reject ) {
        exec( 'git for-each-ref --sort=\'-*authordate\' --format=\'%(tag)\' refs/tags', function ( err, stdout /*, stderr */ ) {
          if ( !err ) {
            var tags = stdout.split( '\n' ).filter( function ( entry ) {
              return !!entry;
            } );
            resolve( {
              tags: tags
            } );
            return;
          }
          reject( {
            error: err
          } );
        } );
      } );
    },
    getCommits: function ( options ) {
      var opts = {
        from: '',
        to: '',
        name: '',
        args: '--pretty=format:\'%h$|$%s$|$%b$|$%ct$|$%an$-$-$\' --no-merges'
      };

      lib.extend( opts, options );

      var range = opts.from ? opts.from + '..' : '';
      range = range + opts.to;

      var gitCmd = 'git log ' + opts.args + ' ' + range;

      grunt.verbose.write( 'command to execute on git', gitCmd );

      var me = this;

      return new Promise( function ( resolve, reject ) {
        exec( gitCmd, function ( err, stdout ) {
          if ( !err ) {
            var commits = me.parseLog( stdout );
            resolve( {
              commits: commits
            } );
            return;
          }
          reject( {
            error: err
          } );
        } );
      } );
    },
    getCommitGroups: function ( tags ) {
      var groups = [];
      for (var i = 0; i < tags.length; i++) {
        var tagNext = tags[ i + 1 ];
        var currentTag = tags[ i ];
        var group = {
          name: currentTag,
          from: tagNext,
          to: currentTag
        };
        (typeof tagNext !== 'undefined') && groups.push( group );
      }
      return groups;
    }
  };
};
