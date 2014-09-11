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
        forceBeautify: false
      } );

      var tasksToRun = checkFiles.doCheck( grunt, jsTasks, opts );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      grunt.log.ok( 'prepush: tasks to run', tasksToRun );
    }
  } );
};
