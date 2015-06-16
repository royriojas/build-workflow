var extend = require( 'extend' );
var dispatchy = require( 'dispatchy' );
var read = require( 'read-file' ).readFileSync;
var write = require( 'write' ).sync;
var flatCache = require( 'flat-cache' );
var fileEntryCache = require( 'file-entry-cache' );
var expand = require( 'glob-expand' );

module.exports = {
  create: function ( id ) {

    return extend( dispatchy.create(), {
      id: id,
      bundle: function ( target, options ) {
        var me = this;
        var opts = {
          useCache: true,
          stricterify: {
            disabled: false
          },
          consoleify: {
            disabled: false
          },
          babelify: {
            disabled: false,
            options: {}
          },
          shimixify: {
            deps: {
              window: 'global.window',
              jQuery: 'global.jQuery',
              chrome: 'global.chrome',
              screen: 'global.screen',
              document: 'global.document',
              Worker: 'global.Worker',
              Promise: 'global.Promise',
              self: 'global.self'
            }
          }
        };

        opts = extend( true, opts, options );
        var cache;
        var depsCacheFile;

        var useCache = opts.useCache || opts.watch;

        if ( useCache ) {
          cache = flatCache.load( id );
          depsCacheFile = fileEntryCache.create( 'deps-cx-' + id );
        } else {
          flatCache.clearCacheById( id );
        }

        var watchify = require( 'watchify' );
        var browserify = require( 'browserify' );

        var concatIfRequired = function ( receivedTarget, time, text ) {
          var files = [];

          if ( opts.concatBefore ) {
            files = opts.concatBefore.map( function ( file ) {
              //console.log( 'reading file', file );
              me.fire( 'bundler:read-file', {
                file: file
              } );
              return read( file );
            } );
            text = files.join( opts.separator ) + text;
          }

          if ( opts.concatAfter ) {
            files = opts.concatAfter.map( function ( file ) {
              me.fire( 'bundler:read-file', {
                file: file
              } );

              return read( file );
            } );
            text = text + files.join( opts.separator );
          }

          if ( receivedTarget.dest ) {
            write( receivedTarget.dest, text );
          }

          me.fire( 'bundler:done', {
            result: text,
            target: receivedTarget,
            startTime: time
          } );

          return text;
        };

        var commonTransforms = function ( b ) {

          var lessify = require( './lessify' );

          b.transform( {
            global: true
          }, lessify );

          var shimify = require( 'shimixify' ).configure( opts.shimixify.deps );
          var cFilter = require( 'console-filter' );

          if ( !opts.stricterify.disabled ) {
            b.transform( require( 'stricterify' ).configure( opts.stricterify ) );
          }

          b.transform( {
            global: true
          }, require( './dotify' ) );

          var babelify = opts.babelify || {};

          if ( !babelify.disabled ) {
            b.transform( require( 'babelify' ).configure( babelify.options ) );
          }

          b.transform( {
            global: true
          }, shimify );

          if ( !opts.consoleify.disabled ) {
            b.transform( require( 'consoleify' ) );
          }

          b.transform( {
            global: true
          }, require( 'require-arr' ) );

          var filter = opts.consoleFilter;

          if ( filter ) {
            b.transform( cFilter.configure( {
              filter: filter
            } ) );
          }
        };

        function bundle() {
          var wArgs = {
            cache: {},
            packageCache: {}
          };

          if ( useCache ) {
            wArgs = cache.getKey( 'watchifyArgs' ) || wArgs;

            if ( !wArgs ) {

              wArgs = {
                cache: {},
                packageCache: {}
              };

              cache.setKey( 'watchifyArgs', wArgs );
            }

            var changedFiles = depsCacheFile.getUpdatedFiles( expand.apply( null, Object.keys( wArgs.cache ) ) );
            if ( changedFiles.length > 0 ) {
              me.fire( 'bundler:files:updated', {
                files: changedFiles
              } );
            }
            changedFiles.forEach( function ( file ) {
              delete wArgs.cache[ file ];
            } );
          }

          var watchifyArgs = wArgs;

          var b = browserify( watchifyArgs );

          if ( target.src ) {
            b.add( target.src );
          }

          commonTransforms( b );

          opts.preBundleCB && opts.preBundleCB( b );

          var w = (opts.watch || opts.useCache) ? watchify( b ) : b;

          var doBundle = function ( _changedFiles ) {
            _changedFiles = _changedFiles || [];
            if ( _changedFiles.length > 0 ) {
              me.fire( 'bundler:files:updated', {
                files: _changedFiles
              } );
            }

            var time = Date.now();

            w.bundle( function ( err, buff ) {

              if ( err ) {
                me.fire( 'error', err );
                return;
              }

              opts.postBundle && opts.postBundle();

              if ( useCache ) {
                setTimeout( function () {
                  cache.setKey( 'watchifyArgs', watchifyArgs );
                  cache.save();
                  depsCacheFile.getUpdatedFiles( expand.apply( null, Object.keys( watchifyArgs.cache ) ) );
                  depsCacheFile.reconcile();
                }, 0 );
              }

              var outp = buff.toString();
              concatIfRequired( target, time, outp );

            } );
          };

          opts.watch && w.on( 'update', doBundle );

          doBundle();

        }

        bundle();
      }
    } );
  }
};
