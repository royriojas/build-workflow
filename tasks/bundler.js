module.exports = function ( grunt ) {
  var extend = require( 'extend' );

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

    var done = me.async();
    var opts = me.options( {
      watch: watch === 'watch',
      banner: '',
      uglify: false,
      separator: '\n\n',
      useCache: true
      //noWrite: true
    } );

    var bundler = require( '../utils/bundler' ).create( 'bundler-target-' + me.target );
    var banner = grunt.template.process( opts.banner );

    var _dest = me.data.dest;
    var dest = opts.buildVersion ? addVersion( _dest, opts.buildVersion ) : _dest;

    bundler.on( 'bundler:skip-write-dest', function ( e, args ) {

      var duration = Date.now() - args.startTime;
      grunt.log.writeln( '>>> Neither the sources nor the destination have changed. \n\n>>> Skipping writing the file:', dest, '\n>>> Time required:', duration / 1000 );
      if ( !opts.watch ) {
        done();
      }
    } );

    bundler.on( 'bundler:done', function ( e, args ) {

      grunt.file.write( dest, banner + opts.separator + args.result );

      var duration = Date.now() - args.startTime;
      grunt.log.writeln( '\n>>> File written', dest, 'Time required:', duration / 1000 );

      if ( opts.watch ) {
        // run forever, waiting for the next bundle cycle
        var moment = require( 'moment' );
        grunt.log.writeln( '>>> [' + moment().format( 'MM/DD/YYYY HH:mm:ss' ) + ']', '...Waiting for changes...\n\n' );
        return;
      }
      if ( !opts.uglify ) {
        done();
      } else {
        var tStart = Date.now();

        var uglify = require( 'uglify-js' );

        var result = uglify.minify( args.result, extend( true, {
          mangle: true
        }, opts.uglify, {
          fromString: true
        } ) );

        var minFile = makeMinName( dest );

        grunt.file.write( minFile, banner + opts.separator + result.code );
        grunt.log.ok( 'File written', minFile, 'time required:', (Date.now() - tStart) / 1000 );
        done();
      }

    } );

    bundler.on( ' bundler:files:updated', function ( e, args ) {
      var files = args.files || [];

      grunt.log.writeln( '\n>>> updated files \n - ', files.join( '\n - ' ), '\n' );
    } );

    bundler.on( 'bundler:read-file', function ( e, args ) {
      grunt.verbose.writeln( 'Reading file ', args.file );
    } );

    bundler.on( 'error', function ( e, err ) {
      grunt.log.writeln( '\n\nerror:' + JSON.stringify( err.message ) + '\n\n' );
    } );

    bundler.bundle( {
      src: me.data.src,
      noWrite: true,
      dest: dest
    }, opts );

  } );
};
