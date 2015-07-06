module.exports = function ( grunt ) {
  var ES6Promise = require( 'es6-promise' ).Promise;

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
    opts.banner = grunt.template.process( opts.banner );

    var filesPromise = fileEntries.reduce( function ( seq, data ) {
      return seq.then( function () {
        var bundly = require( '../utils/bundly' ).create( data, opts );

        bundly.on( 'files-updated', function ( e, args ) {
          var files = args.files || [ ];

          logger.subtle( [
            '\n updated files \n -',
            files.join( '\n - ' ),
            '\n'
          ].join( ' ' ) );
        } );

        bundly.on( 'read-file', function ( e, args ) {
          logger.log( 'Reading file ', args.file );
        } );

        bundly.on( 'file-write', function ( e, args ) {
          logger.ok( 'File written', args.dest, 'time required:', args.duration );
        } );

        bundly.on( 'file-write:minify', function ( e, args ) {
          logger.ok( 'Minified file written', args.dest, 'time required:', args.duration );
        } );

        bundly.on( 'watch-mode-on', function () {
          var moment = require( 'moment' );
          logger.subtle( '[' + moment().format( 'MM/DD/YYYY HH:mm:ss' ) + ']', '...Waiting for changes...\n\n' );
        } );

        bundly.on( 'error', function ( e, err ) {
          // error will break the execution
          // important will just wait until next change to attempt to execute the fix
          var method = opts.watch ? 'important' : 'error';
          logger[ method ]( '\n\nerror:' + JSON.stringify( err.message, null, 2 ) + '\n\n' );
        } );

        return bundly.bundle();
      } );
    }, ES6Promise.resolve() );

    filesPromise.then( function () {
      if ( !opts.watch ) {
        // only finish the task if not in watch mode
        done();
      }
    } );

  } );
};
