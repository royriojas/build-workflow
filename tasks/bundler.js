module.exports = function ( grunt ) {
  var extend = require( 'extend' );
  var path = require( 'path' );
  var ES6Promise = require( 'es6-promise' ).Promise;
  var crypto = require( 'crypto' );

  var md5 = function ( str, encoding ) {

    return crypto
      .createHash( 'md5' )
      .update( str + '' )
      .digest( encoding || 'hex' );
  };

  var makeMinName = function ( fileName ) {
    var rgex = /(.+)\.(\w+)$/gi;
    return fileName.replace( rgex, '$1.min.$2' );
  };

  var addVersion = function ( fileName, bNumber ) {
    var rgex = /(.+)\.(\w+)$/gi;
    return fileName.replace( rgex, '$1.' + bNumber + '.$2' );
  };

  grunt.registerMultiTask( 'bundler', function ( watch ) {
    var me = this;

    var logger = require( '../utils/log' )( grunt );

    var done = me.async();
    var opts = me.options( {
      watch: watch === 'watch',
      banner: '',
      uglify: false,
      separator: '\n\n',
      useCache: true
    //noWrite: true
    } );

    var fileEntries = me.files || [ ];

    //console.log('files', fileEntries);
    var banner = grunt.template.process( opts.banner );

    var p = fileEntries.reduce( function ( seq, data ) {
      return seq.then( function () {

        var src = Array.isArray( data.src ) ? data.src[ 0 ] : data.src;

        var hash = md5( src );

        return new ES6Promise( function ( resolve ) {

          var bundler = require( '../utils/bundler' ).create( 'b-t-' + me.target + '-' + hash );

          var _dest = data.dest;
          var dest = opts.buildVersion ? addVersion( _dest, opts.buildVersion ) : _dest;

          bundler.on( 'bundler:done', function ( e, args ) {

            grunt.file.write( dest, banner + opts.separator + args.result );

            var duration = Date.now() - args.startTime;
            logger.ok( 'File written', path.resolve( dest ), 'Time required:', duration / 1000 );

            if ( opts.watch ) {
              // run forever, waiting for the next bundle cycle
              var moment = require( 'moment' );
              logger.subtle( '[' + moment().format( 'MM/DD/YYYY HH:mm:ss' ) + ']', '...Waiting for changes...\n\n' );
              resolve();
              return;
            }
            if ( !opts.uglify ) {
              resolve();
            } else {
              var tStart = Date.now();

              var uglify = require( 'uglify-js' );

              var result = uglify.minify( args.result, extend( true, {
                mangle: true
              }, opts.uglify, { fromString: true } ) );

              var minFile = makeMinName( dest );

              grunt.file.write( minFile, banner + opts.separator + result.code );
              logger.ok( 'File written', path.resolve( minFile ), 'time required:', (Date.now() - tStart) / 1000 );
              resolve();
            }

          } );

          bundler.on( ' bundler:files:updated', function ( e, args ) {
            var files = args.files || [ ];

            logger.subtle( [
              '\n updated files \n -',
              files.join( '\n - ' ),
              '\n'
            ].join( ' ' ) );
          } );

          bundler.on( 'bundler:read-file', function ( e, args ) {
            logger.log( 'Reading file ', args.file );
          } );

          bundler.on( 'error', function ( e, err ) {
            if ( opts.watch ) {
              logger.important( '\n\nerror:' + JSON.stringify( err.message, null, 2 ) + '\n\n' );
            } else {
              logger.error( '\n\nerror:' + JSON.stringify( err.message, null, 2 ) + '\n\n' );
            }
          } );

          bundler.bundle( { src: src }, opts );
        } );
      } );
    }, ES6Promise.resolve() );

    p.then( function () {
      if ( !opts.watch ) {
        done();
      }
    } );
  } );
};
