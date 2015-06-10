module.exports = function ( grunt, opts, pkg ) {

  var chalk = require( 'chalk' );
  var path = require( 'path' );

  var baseConfigs = {};

  var baseTasksConfigs = grunt.file.expand( path.join( __dirname, './configs/**/*.js' ) );
  var tryCatch = require( './utils/try-catch' );

  baseTasksConfigs.forEach( function ( entry ) {
    var entryName = path.basename( entry, '.js' );

    tryCatch( function () {
      baseConfigs[ entryName ] = require( entry )( grunt, pkg );
    }, function ( err ) {

      console.error( chalk.red( 'err loading a base configuration... some of the tasks might not work: ' ) + entryName );
      console.error( chalk.red( '>>> ' + err.message ) );
      throw err;
    } );
  } );

  return baseConfigs;
};
