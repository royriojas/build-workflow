module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var parseLog = require( '../resources/changelog/log-parser' );

  gruntTaskUtils.registerTasks( {
    changelog: {
      description: 'automate the generation of a changelog using git',
      multiTask: function () {

        var me = this,
          done = me.async();
        var Promise = require( 'es6-promise' ).Promise;

        var gitHelper = require( '../utils/git-helper' )( grunt );

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

        gitHelper.getTags().then( function ( response ) {
          var tags = response.tags;

          grunt.verbose.write( 'all tags', tags );

          tags = opts.filterTags( tags );

          tags.push( '' );
          tags.unshift( 'HEAD' );

          tags = opts.validateTags( tags );

          grunt.verbose.write( 'filtered tags with the first commit and last commit (HEAD)', tags );

          var groups = gitHelper.getCommitGroups( tags );

          grunt.verbose.write( 'groups', groups );

          var groupsPromise = groups.reduce( function ( seq, group ) {

            return seq.then( function () {
              return gitHelper.getCommits( group );
            } ).then( function ( res ) {
              group.commits = res.commits;
            } );
          }, Promise.resolve() );

          groupsPromise.then( function groupCallback() {
            grunt.verbose.write( 'groups with commits', groups );

            var str = opts.renderer( groups );

            grunt.file.write( me.data.dest, str );
            grunt.log.ok( 'file created', me.data.dest );
            done();
          } ).catch ( function ( failResponse ) {
            console.error( failResponse );
          } );

        } );
      }
    }
  } );
};
