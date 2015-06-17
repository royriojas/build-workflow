module.exports = function ( grunt/*, pkg, opts */ ) {
  'use strict';

  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );

  var path = require( 'path' );
  var logger = require( '../utils/log' )( grunt );

  gruntTaskUtils.registerTasks( {
    'validate-file': function ( fileGlob ) {

      var jsFiles = [];
      var jsonFiles = [];

      fileGlob = fileGlob.split( ',' );

      var filesExpanded = grunt.file.expand( fileGlob );

      filesExpanded.forEach( function ( file ) {
        var extname = path.extname( file );

        var f = file;
        if ( extname === '.js' ) {
          jsFiles.push( f );
        }
        if ( extname === '.json' ) {
          jsonFiles.push( f );
        }
      } );

      logger.subtle( 'files to process ', jsonFiles.concat( jsFiles ) );

      var tasksToRun = [];
      var key = 'modified';
      if ( jsonFiles.length > 0 ) {
        tasksToRun.push( 'jsonlint' );
        grunt.config.set( [
          'jsonlint',
          key
        ], {
          src: jsonFiles
        } );
      }

      var jsFilesEntry = {
        src: jsFiles
      };

      var jsTasks = [
        'esformatter',
        'eslint',
        'jscs'
      ];

      jsTasks.forEach( function ( task ) {
        if ( jsFiles.length > 0 ) {
          tasksToRun.push( task );
          grunt.config.set( [
            task,
            key
          ], jsFilesEntry );
        }
      } );

      tasksToRun = tasksToRun.map( function ( task ) {
        return task + ':' + key;
      } );

      if ( tasksToRun.length > 0 ) {
        grunt.task.run( tasksToRun );
      }

      logger.subtle( 'tasks to run', tasksToRun );

      logger.ok( 'all validated!' );
    }
  } );
};
