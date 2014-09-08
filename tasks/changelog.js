module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var parseLog = require( '../resources/changelog/log-parser' );

  var Promise = require( 'es6-promise' ).Promise;

  var exec = require( 'child_process' ).exec;
  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  var gitHelper = {
    getTags: function () {
      return new Promise(function ( resolve, reject ) {
        exec( 'git for-each-ref --sort=\'-*authordate\' --format=\'%(tag)\' refs/tags', function ( err, stdout, stderr ) {
          if ( !err ) {
            var tags = stdout.split( '\n' ).filter(function ( entry ) {
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

      return new Promise(function ( resolve, reject ) {
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
      for ( var i = 0; i < tags.length; i++ ) {
        var tagNext = tags[ i + 1 ];
        var currentTag = tags[ i ];
        var group = {
          name: currentTag,
          from: tagNext,
          to: currentTag
        };
        ( typeof tagNext !== 'undefined' ) && groups.push( group );
      }
      return groups;
    }
  };

  gruntTaskUtils.registerTasks( {
    'changelog': {
      description: 'automate the generation of a changelog using git',
      multiTask: function () {
        var me = this,
          done = me.async();

        var opts = this.options( {
          renderer: function ( data ) {
            return JSON.stringify( data, null, 2 );
          },
          filterTags: function ( tags ) {
            return tags;
          },
          validateTags: function ( tags ) {
            return tags;
          },
          parseLog: parseLog
        } );

        gitHelper.parseLog = opts.parseLog;

        gitHelper.getTags().then(function ( response ) {
          var tags = response.tags;

          grunt.verbose.write( 'all tags', tags );

          tags = opts.filterTags( tags );

          tags.push( '' );
          tags.unshift( 'HEAD' );

          tags = opts.validateTags( tags );

          grunt.verbose.write( 'filtered tags with the first commit and last commit (HEAD)', tags );

          var groups = gitHelper.getCommitGroups( tags );

          grunt.verbose.write( 'groups', groups );

          var promise = groups.reduce(function ( seq, group ) {

            return seq.then(function () {
              return gitHelper.getCommits( group );
            } ).then(function ( response ) {
              group.commits = response.commits;
            } );

          }, Promise.resolve());

          promise.then(function () {
            grunt.verbose.write( 'groups with commits', groups );

            var str = opts.renderer( groups );

            grunt.file.write( me.data.dest, str );
            grunt.log.ok( 'file created', me.data.dest );
            done();
          } ).
          catch (function ( failResponse ) {
            console.error( failResponse );
          } );
        } );
      }
    }
  } );
};
