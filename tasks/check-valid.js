module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var checkFiles = require( '../utils/check-files' );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var buildWorkflowConfig = grunt.config( 'build-workflow' );

      if ( !buildWorkflowConfig ) {
        return grunt.fail.warn( 'missing build-workflow config. Did you provide a build-workflow.js config inside grunt-deps/configs?' );
      }

      var tasksToRun;

      if (buildWorkflowConfig.validationTasks) {
        tasksToRun = require('../utils/create-validation-tasks')(grunt, buildWorkflowConfig.validationTasks);
      }
      else {
        var opts = this.options( {
          useNewer: true,
          tasksToRun: jsTasks || 'jsbeautifier,jscs,jshint,jsvalidate',
          filesToValidate: buildWorkflowConfig.filesToValidate,
          forceBeautify: true
        } );

        tasksToRun = checkFiles.doCheck( grunt, opts );
      }

      tasksToRun = tasksToRun || [];

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'check-valid: tasks to run', tasksToRun );
    }
  } );
};
