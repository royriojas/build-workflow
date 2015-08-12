module.exports = function ( grunt, opts, pkg ) {

  var logger = require( 'clix-logger' )( { coloredOutput: true } );
  var path = require( 'path' );

  var baseConfigs = { };

  var baseTasksConfigs = grunt.file.expand( path.join( __dirname, './configs/**/*.js' ) );
  var tryCatch = require( './utils/try-catch' );

  baseTasksConfigs.forEach( function ( entry ) {
    var entryName = path.basename( entry, '.js' );

    tryCatch( function () {
      baseConfigs[ entryName ] = require( entry )( grunt, pkg );
    }, function ( err ) {

      logger.error( 'err loading a base configuration... some of the tasks might not work: \n' + entryName + '\n\n' );
      logger.error( err.message );
      throw err;
    } );
  } );

  return baseConfigs;
};
