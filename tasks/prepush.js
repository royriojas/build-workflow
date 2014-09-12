module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );
  var checkFiles = require( '../utils/check-files' );

  gruntTaskUtils.registerTasks( {
    'prepush': function ( jsTasks ) {

      var opts = this.options( {
        useNewer: false,
        tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate',
        filesToValidate: options.commonConfig.filesToValidate,
        forceBeautify: false,
        prepushTasks: options.commonConfig.prepushTasks || []
      } );

      var tasksToRun = checkFiles.doCheck( grunt, jsTasks, opts );

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
