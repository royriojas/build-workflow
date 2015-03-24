module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var chalk = require( 'chalk' );
  var sFormat = require( 'stringformat' );
  var gruntTaskUtils = options.gruntTaskUtils;

  gruntTaskUtils.registerTasks( {
    esformatter: {
      description: 'beautify files with esbeautifier',
      multiTask: function () {
        var path = require( 'path' );
        var esbeautifier = Object.create( require( 'esbeautifier' ) );

        var me = this;

        var opts = me.options( {
          esformatterOpts: {},
          reportOnly: false,
          useCache: true
        } );

        var useCache = opts.useCache;
        grunt.log.ok( useCache ? 'using cache' : 'not using the cache' );

        var cfg = {};
        if ( opts.configFile ) {
          cfg = grunt.file.readJSON( path.resolve( opts.configFile ) );
          //grunt.verbose.writeln( 'cfg', cfg );
        }

        var extend = require( '../utils/extend' );
        cfg = extend( true, cfg, opts.esformatterOpts );

        esbeautifier.on( 'beautify:start', function ( e, args ) {
          if ( useCache ) {
            grunt.verbose.writeln( 'updated files', args.files );
            grunt.log.ok( 'total files in glob : ' + me.filesSrc.length + ', updated: ' + args.files.length );
          }
        } );

        var noBeautifiedFiles = [];

        esbeautifier.on( 'need:beautify.cli', function ( e, _args ) {
          if ( !opts.reportOnly ) {
            grunt.verbose.writeln( 'beautifiying', _args.file );
          } else {
            noBeautifiedFiles.push( _args.file );
          }
        } );

        esbeautifier.on( 'done.cli', function ( e, _args ) {
          if ( !opts.reportOnly ) {
            var msg = chalk.green( 'No files needed beautification!' );

            if ( _args.count > 0 ) {
              msg = sFormat( '{0} {1} file(s) beautified', chalk.yellow( 'beautifying done!' ), _args.count );
            }

            grunt.log.ok( msg );
          } else {
            if ( noBeautifiedFiles.length > 0 ) {
              grunt.log.writeln( chalk.red( 'The following files need beautification: ' ), chalk.yellow( '\n\n   - ' + noBeautifiedFiles.join( '\n   - ' ) ) + '\n' );
              grunt.warn( sFormat( '{0} files need beautification', noBeautifiedFiles.length ) );
            } else {
              grunt.log.ok( 'All files are beautified.' );
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
