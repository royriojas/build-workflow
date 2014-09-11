module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );
  var checkFiles = require( '../utils/check-files' );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var opts = this.options( {
        useNewer: true,
        tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate',
        filesToValidate: options.commonConfig.filesToValidate,
        forceBeautify: true
      } );

      var tasksToRun = checkFiles.doCheck( grunt, jsTasks, opts );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'check-valid: tasks to run', tasksToRun );
    }
  } );
};
