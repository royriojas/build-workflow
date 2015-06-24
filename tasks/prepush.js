module.exports = function ( grunt /*, pkg, opts */ ) {
  'use strict';

  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );
  var createValidationTasks = require( '../utils/create-validation-tasks' );

  gruntTaskUtils.registerTasks( {
    prepush: function ( jsTasks ) {

      var buildWorkflowConfig = grunt.config( 'build-workflow' );
      if ( !buildWorkflowConfig ) {
        return grunt.fail( 'missing build-workflow config. Did you provide a build-workflow.js config inside grunt-deps/configs?' );
      }
      var tasksToRun;
      var filter = jsTasks ? jsTasks.split( ',' ) : null;

      if ( buildWorkflowConfig.validationTasks ) {
        tasksToRun = createValidationTasks( {
          validationTasks: buildWorkflowConfig.validationTasks,
          filter: filter,
          beforeSetConfiguration: function ( name, tConfig ) {

            if ( name === 'esformatter' ) {
              tConfig.options = tConfig.options || { };
              tConfig.options.reportOnly = true;
            }
          }
        }, grunt );
      }

      tasksToRun = tasksToRun || [ ];

      if ( !filter && buildWorkflowConfig.prepushTasks ) {
        tasksToRun = tasksToRun.concat( buildWorkflowConfig.prepushTasks );
      }

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'prepush: tasks to run', tasksToRun );
    }
  } );
};
