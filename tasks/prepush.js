module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );
  var checkFiles = require( '../utils/check-files' );

  gruntTaskUtils.registerTasks( {
    'prepush': function ( jsTasks ) {

      var buildWorkflowConfig = grunt.config( 'build-workflow' );
      if ( !buildWorkflowConfig ) {
        return grunt.fail( 'missing build-workflow config. Did you provide a build-workflow.js config inside grunt-deps/configs?' );
      }

      var opts = this.options( {
        useNewer: false,
        tasksToRun: jsTasks || 'esformatter,jscs,',
        filesToValidate: buildWorkflowConfig.filesToValidate,
        forceBeautify: false,
        prepushTasks: buildWorkflowConfig.prepushTasks || []
      } );

      var tasksToRun = checkFiles.doCheck( grunt, opts );

      tasksToRun = tasksToRun || [];

      if ( opts.prepushTasks ) {
        tasksToRun = tasksToRun.concat( opts.prepushTasks );
      }

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'prepush: tasks to run', tasksToRun );
    }
  } );
};
