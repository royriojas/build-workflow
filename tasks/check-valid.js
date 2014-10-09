module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );
  var checkFiles = require( '../utils/check-files' );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var commonConfig = options.commonConfig || {};
      var filesToValidate = commonConfig.filesToValidate || {};

      var opts = this.options( {
        useNewer: true,
        tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate',
        filesToValidate: filesToValidate,
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
