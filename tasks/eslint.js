var eslint = require( 'eslint' );

// https://github.com/eslint/eslint/blob/5322a4ab9757eb745030ddcafa076ab5b4317e50/lib/cli.js#L129
function getErrorResults( results ) {
  var filtered = [];

  results.forEach( function ( result ) {
    var filteredMessages = result.messages.filter( function ( message ) {
      return message.severity === 2;
    } );

    if ( filteredMessages.length > 0 ) {
      filtered.push( {
        filePath: result.filePath,
        messages: filteredMessages
      } );
    }
  } );

  return filtered;
}

module.exports = function ( grunt ) {
  grunt.registerMultiTask( 'eslint', 'Validate files with ESLint', function () {
    var opts = this.options( {
      outputFile: false,
      quiet: false,
      useCache: true
    } );

    var cache = require( 'file-entry-cache' ).create( 'eslint' );
    var chalk = require( 'chalk' );
    // legacy
    // TODO: remove in the future
    if ( opts.config ) {
      opts.configFile = opts.config;
    }
    if ( opts.rulesdir ) {
      opts.rulePaths = opts.rulesdir;
    }

    var useCache = opts.useCache;
    if ( !useCache ) {
      cache.deleteCacheFile();
    }
    grunt.log.ok( useCache ? 'using cache' : 'not using the cache' );

    grunt.verbose.writeln( 'files received ', this.filesSrc );

    var filesSrc = useCache ? cache.getUpdatedFiles( this.filesSrc ) : this.filesSrc;

    if ( useCache ) {
      grunt.verbose.writeln( 'updated files ', filesSrc );
      grunt.log.ok( 'total files in glob : ' + this.filesSrc.length + ', updated: ' + filesSrc.length );
    }

    if ( filesSrc.length === 0 ) {
      if ( useCache && this.filesSrc.length > 0 ) {
        grunt.log.ok( chalk.green( 'No new files to verify' ) );
        return true;
      }

      grunt.log.ok( chalk.green( 'No files to verify' ) );

      return true;
    }

    var engine = new eslint.CLIEngine( opts );
    var report = engine.executeOnFiles( filesSrc );
    var results = report.results || [];

    results.forEach( function ( result ) {
      if ( result.errorCount > 0 || result.warningCount > 0 ) {
        cache.removeEntry( result.filePath );
      }
    } );

    if ( opts.quiet ) {
      results = getErrorResults( results );
    }

    cache.reconcile();

    var formatter = typeof opts.format === 'function' ? opts.format : engine.getFormatter( opts.format );

    if ( !formatter ) {
      grunt.warn( 'Could not find formatter ' + opts.format + '\'.' );
      return false;
    }

    var output = formatter( results );

    var noErrors = report.errorCount === 0;
    var noWarnings = report.warningCount === 0;

    if ( !noErrors || !noWarnings ) {
      if ( opts.outputFile ) {
        grunt.file.write( opts.outputFile, output );
      } else {
        console.log( output );
      }
    } else {
      grunt.log.ok( chalk.green( 'All files passed validation' ) );
    }
    return noErrors;
  } );
};
