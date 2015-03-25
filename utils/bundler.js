var extend = require( 'extend' );
var dispatchy = require( 'dispatchy' );
var read = require( 'read-file' ).readFileSync;
var write = require( 'write' ).sync;

var stream2Text = function ( cb ) {
  var through = require( 'through2' );
  var data = '';

  return through.obj( function ( chunk, encoding, done ) {
    data += chunk.toString();
    done( null );
  }, function ( _cb ) {
    var result = cb( data );
    if ( result ) {
      this.push( result );
    }
    _cb();
  } );
};

module.exports = {
  create: function () {
    return extend( dispatchy.create(), {
      bundle: function ( target, options ) {
        var me = this;
        var opts = {
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

        var watchify = require( 'watchify' );
        var browserify = require( 'browserify' );

        var concatIfRequired = function ( receivedTarget, time ) {
          return stream2Text( function ( text ) {
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
          } );
        };

        var commonTransforms = function ( b ) {

          var shimify = require( 'shimixify' ).configure( opts.shimixify.deps );
          var cFilter = require( 'console-filter' );
          var lessify = require( 'node-lessify' );

          var LessPluginAutoPrefix = require( 'less-plugin-autoprefix' );
          var autoprefix = new LessPluginAutoPrefix( {
            browsers: [
              'last 2 versions'
            ]
          } );

          var LessPluginCleanCSS = require( 'less-plugin-clean-css' );
          var cleanCSSPlugin = new LessPluginCleanCSS( {
            advanced: true
          } );

          var inlineUrlsPlugin = require( 'less-plugin-inline-urls' );

          b.transform( lessify, {
            plugins: [
              autoprefix,
              cleanCSSPlugin,
              inlineUrlsPlugin
            ]
          } );

          b.transform( require( 'stricterify' ) );
          b.transform( require( './dotify' ) );
          b.transform( require( 'reactify' ) );
          b.transform( {
            global: true
          }, shimify );
          b.transform( require( 'consoleify' ) );
          b.transform( require( 'require-arr' ) );

          var filter = opts.consoleFilter;

          if ( filter ) {
            b.transform( cFilter.configure( {
              filter: filter
            } ) );
          }
        };

        function bundle() {

          var watchifyArgs = {
            cache: {},
            packageCache: {}
          };

          var b = browserify( watchifyArgs );

          if ( target.src ) {
            b.add( target.src );
          }

          commonTransforms( b );

          opts.preBundleCB && opts.preBundleCB( b );

          var w = opts.watch ? watchify( b ) : b;

          var doBundle = function () {
            var time = Date.now();
            w.bundle( function ( err ) {
              if ( err ) {
                me.fire( 'error', err );
                return;
              }
              opts.postBundle && opts.postBundle();
            } ).pipe( concatIfRequired( target, time ) );
          };

          opts.watch && w.on( 'update', doBundle );

          doBundle();

        }

        bundle();
      }
    } );
  }
};
