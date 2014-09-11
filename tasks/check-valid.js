module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var opts = this.options( {
        useNewer: true,
        tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate'
      } );

      var key = 'js-check';

      jsTasks = jsTasks || opts.tasksToRun;

      jsTasks = jsTasks.split( ',' );

      var tasksToRun = [];

      var prepush = options.commonConfig.filesToValidate || {};

      jsTasks.forEach(function ( task ) {
        var files = prepush[ task ] || [];

        if ( files.length > 0 ) {
          var tConfig = {
            src: files
          };

          grunt.config.set( [ task, key ], tConfig );
          tasksToRun.push( task );
        }
      } );

      var useNewer = opts.useNewer;
      if ( grunt.option( 'check-valid-use-newer' ) === false ) {
        useNewer = false;
      }

      tasksToRun = tasksToRun.map(function ( task ) {

        return ( useNewer ? 'newer:' : '' ) + task + ':' + key;
      } );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'tasks to run', tasksToRun );
    }
  } );
};
