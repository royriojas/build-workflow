module.exports = function ( grunt ) {
  grunt.registerMultiTask( 'eslinter', 'Validate files with eslinter', function () {
    var opts = this.options( {
      useCache: true,
      format: 'eslinter/node_modules/eslint-friendly-formatter'
    } );

    var logger = require( '../utils/log' )( grunt );

    var files = this.filesSrc;

    if ( files.length === 0 ) {
      //console.log( chalk.green( '>> no files to beautify' ) );
      logger.ok( 'No files to check' );
      return;
    }

    var cfg = { configFile: opts.configFile };

    var eslinter = require( 'eslinter' );
    var useCache = !!opts.useCache;

    eslinter.on( 'eslinter:start.cli', function ( e, _args ) {
      logger.subtle( 'Total files: ' + _args.filesSrc.length + ',  updated: ' + _args.files.length );
      if ( _args.files.length === 0 ) {
        logger.subtle( 'No files has changed since last run' );
      }
    } );

    logger.subtle( useCache ? 'using cache' : 'not using the cache' );

    var format;
    try {
      format = typeof opts.format === 'function' ? opts.format : require( opts.format );
    } catch (ex) {
      logger.subtle( 'formatter not found:', opts.format );
    }

    var response = eslinter.lint( files, {
      useCache: useCache,
      format: format,
      cfg: cfg
    } );

    eslinter.off( '.cli' );

    var errosCount = response.errorCount > 0;
    if ( errosCount || response.warningCount > 0 ) {
      grunt.log.write( response.output );

      if ( errosCount ) {
        logger.error( 'Eslint validation failed. Total errors:', response.errorCount );
      }
      if ( response.warningCount > 0 ) {
        logger.log( 'Eslint warnings found. Total warnings', response.warningCount );
      }
    //nodeProcess.exit( errosCount ? 1 : 0 );
    } else {
      logger.ok( 'Eslint validation complete. No errors found' );
    }

  } );
};
