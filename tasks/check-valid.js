module.exports = function ( grunt /*, pkg, options */ ) {
  'use strict';

  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var buildWorkflowConfig = grunt.config( 'build-workflow' );

      if ( !buildWorkflowConfig ) {
        return grunt.fail.warn( 'missing build-workflow config. Did you provide a build-workflow.js config inside grunt-deps/configs?' );
      }

      var tasksToRun;

      if ( buildWorkflowConfig.validationTasks ) {
        tasksToRun = require( '../utils/create-validation-tasks' )( {
          validationTasks: buildWorkflowConfig.validationTasks,
          filter: jsTasks ? jsTasks.split( ',' ) : null
        }, grunt );
      }

      tasksToRun = tasksToRun || [];

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }
    }
  } );
};
