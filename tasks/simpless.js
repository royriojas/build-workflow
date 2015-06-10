module.exports = function ( grunt ) {
  var path = require( 'path' );
  var extend = require( 'extend' );
  var moment = require( 'moment' );

  grunt.registerMultiTask( 'simpless', function () {
    var me = this;
    var logger = require( '../utils/log' )( grunt );
    var done = me.async();

    var opts = me.options( {
      banner: null,
      revision: null,
      assetsPathFormat: 'assets/{REVISION}_{GUID}_{FNAME}',
      copyAssetsToDestFolder: true,
      browsers: 'last 2 versions',
      advanceMin: true,
      minimize: true,
      userFns: {}
    } );

    opts.userFns = extend( true, require( 'simpless/lib/default-user-fns' ), opts.userFns );

    var simpless = require( 'simpless' ).create();
    var util = require( 'util' );

    var start = moment();
    var banner = grunt.template.process( opts.banner );

    simpless.on( 'error', function ( e, err ) {
      logger.error( 'Error parsing less file\n\n', err.message );
    } );

    simpless.on( 'resource:copied', function ( e, args ) {
      logger.log( 'resource copied from:', args.from, 'to:', args.to );
    } );

    simpless.on( 'url:replaced', function ( e, args ) {
      logger.log( 'url replaced from:', args.from, 'to:', args.to );
    } );

    simpless.on( 'write:file write:minimized', function ( e, args ) {
      var now = moment();
      logger.ok( 'File written:', args.dest, 'Time required:', now.diff( start ) / 1000 );
      if ( !opts.minimize && e.type === 'write:file' ) {
        done();
        return;
      }
      if ( opts.minimize && e.type === 'write:minimized' ) {
        done();
      }
    } );

    logger.log( 'options', util.inspect( opts ) );

    simpless.process( {
      src: me.filesSrc,
      dest: path.resolve( me.data.dest )
    }, {
      banner: banner,
      minimize: opts.minimize,
      revision: opts.revision,
      assetsPathFormat: opts.assetsPathFormat,
      copyAssetsToDestFolder: opts.copyAssetsToDestFolder,
      autoprefixer: {
        browsers: opts.browsers
      },
      cssoOptions: {
        structureModifications: opts.advanceMin
      },
      userFns: opts.userFns
    } );

  } );
};
