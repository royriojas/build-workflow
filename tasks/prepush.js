module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'prepush': function ( jsTasks ) {

      var key = 'js-check';

      jsTasks = jsTasks || 'jsbeautifier,jscs,jshint,jsvalidate';

      jsTasks = jsTasks.split( ',' );

      var tasksToRun = [];

      var prepush = options.commonConfig.filesToValidate || {};

      jsTasks.forEach(function ( task ) {
        var files = prepush[ task ] || [];

        if ( files.length > 0 ) {
          var tConfig = {
            src: files
          };

          if ( task === 'jsbeautifier' && !grunt.option( 'pp-force-beautify' )) {
            tConfig.options = {
              mode: 'VERIFY_ONLY',
              onVerificationFailed: function ( result, opts ) {
                grunt.fail.fatal( 'File needed beautification: ' + opts.file );
              }
            };
          }

          grunt.config.set( [ task, key ], tConfig );
          tasksToRun.push( task );
        }
      } );

      tasksToRun = tasksToRun.map(function ( task ) {
        return task + ':' + key;
      } );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      console.log( 'tasks to run', tasksToRun );
    }
  } );
};
