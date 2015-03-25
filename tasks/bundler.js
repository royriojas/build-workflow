module.exports = function ( grunt ) {
  var extend = require( 'extend' );
  var makeMinName = function ( fileName ) {
    var rgex = /(.+)\.(\w+)$/gi;
    return fileName.replace( rgex, '$1.min.$2' );
  };

  grunt.registerMultiTask( 'bundler', function () {
    var me = this;

    var done = me.async();
    var opts = me.options( {
      watch: grunt.option( 'watch-task' ) === me.target,
      banner: '',
      uglify: false,
      separator: '\n\n'
    } );

    var bundler = require( '../utils/bundler' ).create();

    bundler.on( 'bundler:done', function ( e, args ) {
      grunt.log.ok( 'File written', me.data.dest, 'time required:', args.duration / 1000 );
      if ( opts.watch ) {
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

        var banner = grunt.template.process( opts.banner );

        var minFile = makeMinName( me.data.dest );

        grunt.file.write( minFile, banner + opts.separator + result.code );
        grunt.log.ok( 'File written', minFile, 'time required:', (Date.now() - tStart) / 1000 );
        done();
      }

    } );

    bundler.on( 'bundler:read-file', function ( e, args ) {
      grunt.verbose.writeln( 'Reading file ', args.file );
    } );

    bundler.on( 'error', function ( e, err ) {
      grunt.fatal( 'error:' + JSON.stringify( err.message ) );
    } );

    bundler.bundle( me.data, opts );

  } );
};
