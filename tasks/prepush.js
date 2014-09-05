module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'prepush': function (jsTasks ) {

      var key = 'js-check';

      jsTasks = jsTasks || 'jsbeautifier,jscs,jshint,jsvalidate';

      jsTasks = jsTasks.split(',');

      var tasksToRun = [];

      var prepush = options.commonConfig.prepush || {};

      jsTasks.forEach(function ( task ) {
        var files = prepush[task] || [];

        if (files.length > 0) {
          var tConfig = {
            src: files
          };

          if (task === 'jsbeautifier') {
            tConfig.options = {
              mode: 'VERIFY_ONLY',
              onVerificationFailed: function (result, opts) {
                grunt.fail.fatal('File needed beautification: ' + opts.file);
              }
            };
          }

          grunt.config.set( [task, key], tConfig);
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

      grunt.log.ok( 'all validated!' );


//      var jsFiles = [];
//      var jsonFiles = [];
//
//      var filesExpanded = grunt.file.expand( fileGlob );
//
//      filesExpanded.forEach(function ( file ) {
//        var extname = path.extname( file );
//
//        if ( file.indexOf( 'node_modules' ) > -1 ) {
//          return;
//        }
//
//        var f = file; //path.relative( './', file );
//        if ( extname === '.js' ) {
//          jsFiles.push( f );
//        }
//        if ( extname === '.json' ) {
//          jsonFiles.push( f );
//        }
//      } );
//
//      console.log( jsonFiles, jsFiles );
//
//      var tasksToRun = [];
//      var key = 'modified';
//      if ( jsonFiles.length > 0 ) {
//        tasksToRun.push( 'jsonlint' );
//        grunt.config.set( [ 'jsonlint', key ], {
//          src: jsonFiles
//        } );
//      }
//
//      var jsFilesEntry = {
//        src: jsFiles
//      };
//
//      var jsTasks = [ 'jsbeautifier', 'jscs', 'jshint', 'jsvalidate' ];
//
//      jsTasks.forEach(function ( task ) {
//        if ( jsFiles.length > 0 ) {
//          tasksToRun.push( task );
//          grunt.config.set( [ task, key ], jsFilesEntry );
//        }
//      } );
//
//      tasksToRun = tasksToRun.map(function ( task ) {
//        return task + ':' + key;
//      } );
//
//      if ( tasksToRun.length > 0 ) {
//        grunt.task.run( tasksToRun );
//      }
//
//      console.log( 'tasks to run', tasksToRun );
//
//      grunt.log.ok( 'all validated!' );
    }
  } );
};
