module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'validate-file': function ( fileGlob ) {

      var jsFiles = [];
      var jsonFiles = [];

      fileGlob = fileGlob.split( ',' );

      var filesExpanded = grunt.file.expand( fileGlob );

      filesExpanded.forEach(function ( file ) {
        var extname = path.extname( file );

        //        if ( file.indexOf( 'node_modules' ) > -1 ) {
        //          return;
        //        }

        var f = file; //path.relative( './', file );
        if ( extname === '.js' ) {
          jsFiles.push( f );
        }
        if ( extname === '.json' ) {
          jsonFiles.push( f );
        }
      } );

      console.log( jsonFiles, jsFiles );

      var tasksToRun = [];
      var key = 'modified';
      if ( jsonFiles.length > 0 ) {
        tasksToRun.push( 'jsonlint' );
        grunt.config.set( [ 'jsonlint', key ], {
          src: jsonFiles
        } );
      }

      var jsFilesEntry = {
        src: jsFiles
      };

      var jsTasks = [ 'jsbeautifier', 'jscs', 'jshint', 'jsvalidate' ];

      jsTasks.forEach(function ( task ) {
        if ( jsFiles.length > 0 ) {
          tasksToRun.push( task );
          grunt.config.set( [ task, key ], jsFilesEntry );
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
    }
  } );
};
