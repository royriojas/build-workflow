module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var JSCS = require( 'jscs' );
  var ES6Promise = require( 'es6-promise' ).Promise;
  var path = require( 'path' );

  var getChecker = function ( cfg ) {
    var checker = new JSCS();
    checker.registerDefaultRules();
    checker.configure( cfg );

    return {
      check: function ( filePath ) {
        return ES6Promise.resolve( checker.checkPath( filePath ) );
      }
    };
  };

  gruntTaskUtils.registerTasks( {
    jscs: {
      description: 'check the code with jscs',
      multiTask: function () {
        var me = this;
        var done = me.async();

        var chalk = require( 'chalk' );

        var opts = me.options( {
          jscsOpts: {},
          useCache: true
        } );

        var useCache = opts.useCache;

        grunt.log.ok( useCache ? 'using cache' : 'not using the cache' );

        var fileCache = require( 'file-entry-cache' ).create( 'jscs-cache' );
        if ( !useCache ) {
          fileCache.deleteCacheFile();
        }

        var filesSrc = useCache ? fileCache.getUpdatedFiles( me.filesSrc ) : me.filesSrc;

        if ( useCache ) {
          grunt.verbose.writeln( 'updated files ', filesSrc );
          grunt.log.ok( 'total files in glob: ' + me.filesSrc.length + ', updated: ' + filesSrc.length );
        }

        if ( filesSrc.length === 0 ) {

          if ( useCache && me.filesSrc.length > 0 ) {
            grunt.log.ok( chalk.green( 'No new files to verify' ) );
            done( true );
            return;
          }
          grunt.log.ok( chalk.green( 'No files to verify' ) );
          done( true );
          return;
        }

        var cfg = opts.config;
        // must the path to the config file
        if ( typeof opts.config === 'string' ) {
          cfg = grunt.file.readJSON( path.resolve( opts.config ) );
        }

        var extend = require( '../utils/extend' );
        cfg = extend( true, cfg, opts.jscsOpts );

        var checker = getChecker( cfg );

        var promises = filesSrc.map( function ( file ) {
          var p = checker.check( file );
          p.catch( function ( err ) {
            grunt.verbose.writeln( 'jscs error: ', err.message );
            grunt.fail.warn( 'jscs error on file', file );
          } );
          return p;
        } );

        ES6Promise.all( promises ).then( function ( resolvers ) {
          var results = resolvers.reduce( function ( pre, current ) {
            return pre.concat( current );
          }, [] ).filter( function ( result ) {
            return !result.isEmpty();
          } );

          var count = 0;
          results.forEach( function ( result ) {
            //console.log(result.getFilename());
            var filename = result.getFilename();

            // remove the failed entries
            fileCache.removeEntry( filename );
            count += result.getErrorCount();
            result.getErrorList().forEach( function ( error ) {
              result.oldFileName = result.getFilename;
              result.getFilename = function () {
                return path.resolve( this.oldFileName() ) + ':' + error.line + ':' + error.column;
              };
              grunt.log.writeln( result.explainError( error, true ) );
              result.getFilename = result.oldFileName;
            } );
          } );

          fileCache.reconcile();

          if ( count === 0 ) {
            grunt.log.ok( chalk.green( 'All files passed validation!' ) );
          } else {
            grunt.log.error( count + ' code style errors found!' );
          }

          done( opts.force || count === 0 );
        } );

      }
    }
  } );
};
