module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var fs = require( 'fs' );

  var filterFiles = function ( files, cache ) {
    files = files || [];

    return files.filter( function ( file ) {
      var fstatStored = cache.getKey( file );
      var fstat = fs.statSync( file );
      return !fstatStored || (fstat.mtime.getTime() !== fstatStored.mtime || fstat.size !== fstatStored.size);
    } );
  };

  gruntTaskUtils.registerTasks( {
    esformatter: {
      description: 'beautify files with esformatter',
      multiTask: function () {
        var path = require( 'path' );
        var esformatter = require( 'esformatter' );

        var me = this;

        var opts = me.options( {
          esformatterOpts: {},
          beforeStart: null,
          reportOnly: false
        } );

        var flatCache = require( 'flat-cache' );
        var cache = flatCache.load( 'esformatter-cache' + (opts.reportOnly ? '_report' : '') );

        var filesSrc = filterFiles( me.filesSrc, cache );

        if ( filesSrc.length === 0 ) {
          grunt.log.ok( 'No files to format' );
          return;
        }

        var cfg = {};
        if ( opts.configFile ) {
          cfg = grunt.file.readJSON( path.resolve( opts.configFile ) );
          //grunt.verbose.writeln( 'cfg', cfg );
        }

        var extend = require( '../utils/extend' );
        cfg = extend( true, cfg, opts.esformatterOpts );

        var plugins = cfg.plugins;

        if ( plugins && plugins.length > 0 ) {
          // plugins will be auto register again, during transform,
          // setting them here will fix this issue in esformatter
          // https://github.com/millermedeiros/esformatter/issues/245
          var tryCatch = require( '../utils/try-catch' );
          plugins.forEach( function ( plugin ) {
            tryCatch( function () {
              esformatter.register( require( plugin ) );
              grunt.log.ok( 'registering plugin', plugin );
            }, function ( ex ) {
              grunt.verbose.writeln( '\nError: ' + ex.message );
              grunt.fail.warn( 'Error loading esformatter plugin : ' + plugin );
            } );
          } );
          // do not load it inside the module
          cfg.plugins = [];
        }

        if ( opts.beforeStart ) {
          // handy to add more plugins programatically if required
          opts.beforeStart( esformatter );
        }

        var noBeautifiedFiles = [];
        var beautifiedFiles = [];

        filesSrc.forEach( function ( fIn ) {
          var sourceIn = grunt.file.read( fIn );

          try {
            grunt.verbose.writeln( 'beautifying file: ', fIn );
            var output = esformatter.format( sourceIn, cfg );
          } catch (ex) {
            grunt.verbose.writeln( 'error: ', ex.message );
            grunt.fail.fatal( 'error trying to format file: ' +
                fIn );
          }
          var sourceRequiredBeautification = sourceIn !== output;

          if ( !opts.reportOnly ) {
            if ( sourceRequiredBeautification ) {
              grunt.file.write( fIn, output );
              beautifiedFiles.push( fIn );
              grunt.log.ok( 'formatted file ' + fIn );
            } else {
              grunt.verbose.writeln( 'file is ok: ', fIn );
            }
          } else {

            if ( sourceRequiredBeautification ) {
              noBeautifiedFiles.push( fIn );
            }

          }
        } );

        if ( opts.reportOnly ) {
          if ( noBeautifiedFiles.length > 0 ) {
            grunt.fail.warn( 'The following files need beautification: \n\n - ' + noBeautifiedFiles.join( '\n - ' ) + '\n\n' );
          }
        } else {
          if ( beautifiedFiles.length > 0 ) {
            grunt.log.ok( 'Files beautified: ' + beautifiedFiles.length );
          } else {
            grunt.log.ok( 'No files needed beautification. Total processed : ' + filesSrc.length + ' file(s)' );
            grunt.verbose.writeln( 'files processed: \n\n - ' + filesSrc.join( '\n - ' ) );
          }
        }

        filesSrc.forEach( function ( fIn ) {
          var stat = fs.statSync( fIn );
          cache.setKey( fIn, {
            size: stat.size,
            mtime: stat.mtime.getTime()
          } );
        } );

        cache.save();
      }
    }
  } );
};
