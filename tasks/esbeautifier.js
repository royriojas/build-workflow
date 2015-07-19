module.exports = function ( grunt /*, pkg, opts */ ) {
  'use strict';

  var chalk = require( 'chalk' );
  var sFormat = require( 'stringformat' );
  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );

  gruntTaskUtils.registerTasks( {
    esbeautifier: {
      description: 'beautify files with esbeautifier',
      multiTask: function () {
        var path = require( 'path' );
        var esbeautifier = Object.create( require( 'esbeautifier' ) );

        var me = this;
        var logger = require( '../utils/log' )( grunt );

        var opts = me.options( {
          esformatterOpts: {},
          reportOnly: false,
          useCache: true
        } );

        var useCache = opts.useCache;
        logger.subtle( useCache ? 'using cache' : 'not using the cache' );

        var cfg = { };
        if ( opts.configFile ) {
          cfg = grunt.file.readJSON( path.resolve( opts.configFile ) );
        }

        var extend = require( 'extend' );
        cfg = extend( true, cfg, opts.esformatterOpts );

        esbeautifier.on( 'beautify:start', function ( e, args ) {
          if ( useCache ) {
            grunt.verbose.writeln( 'updated files', args.files );
            logger.subtle( 'total files: ' + me.filesSrc.length + ', updated: ' + args.files.length );
          }
        } );

        var noBeautifiedFiles = [ ];

        esbeautifier.on( 'need:beautify.cli', function ( e, _args ) {
          if ( !opts.reportOnly ) {
            grunt.verbose.writeln( 'beautifiying', _args.file );
          } else {
            noBeautifiedFiles.push( _args.file );
          }
        } );

        esbeautifier.on( 'done.cli', function ( e, _args ) {
          if ( !opts.reportOnly ) {
            var msg = chalk.green( 'No files needed beautification' );

            if ( _args.count > 0 ) {
              msg = sFormat( '{0} {1} file(s) beautified', chalk.yellow( 'beautifying done!' ), _args.count );
            }

            logger.ok( msg );
          } else {
            if ( noBeautifiedFiles.length > 0 ) {
              logger.subtle( 'The following files need beautification:', '\n\n   - ' + noBeautifiedFiles.join( '\n   - ' ) + '\n\n' );
              grunt.warn( sFormat( '{0} files need beautification', noBeautifiedFiles.length ) );
            } else {
              logger.ok( 'All files are beautified.' );
            }
          }
        } );

        esbeautifier.beautify( me.filesSrc, {
          useCache: opts.useCache,
          checkOnly: opts.reportOnly,
          cfg: cfg
        } );
      }
    }
  } );
};
