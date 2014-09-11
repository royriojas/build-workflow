module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'check-valid': function ( jsTasks ) {

      var opts = this.options({
        useNewer: true,
        tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate'
      });

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

      tasksToRun = tasksToRun.map(function ( task ) {
        return (opts.useNewer ? 'newer:' : '') +  task + ':' + key;
      } );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      console.log( 'tasks to run', tasksToRun );

      grunt.log.ok( 'all validated!' );
    }
  } );
};
