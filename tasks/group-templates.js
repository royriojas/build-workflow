module.exports = function ( grunt ) {
  var moment = require( 'moment' );
  var path = require( 'path' );

  grunt.registerMultiTask( 'group-templates', function () {
    var me = this,
      data = me.data || {},
      src = data.src || [],
      templateFiles = grunt.file.expand( src ),
      outputFile = data.dest,
      options = me.options( {} );

    var logger = require( '../utils/log' )( grunt );

    var groupTemplateCompiler = require( '../utils/group-templates' ).create();

    groupTemplateCompiler.on( 'before:compile', function ( e, args ) {
      logger.log( 'attempt to compile : ' + args.templateFile );
    } );

    groupTemplateCompiler.on( 'compile:template', function ( e, args ) {
      logger.subtle( args.compiledName + ', compiled from: ' + args.templateFile );
    } );

    groupTemplateCompiler.on( 'compile:error', function ( e, err ) {
      logger.warn( 'compile template error: ', err.message );
    } );

    var start = moment();
    logger.subtle( 'compile templates started...' + start.format( 'MM/DD/YYYY HH:mm:ss' ) );
    var content = groupTemplateCompiler.compile( templateFiles, options );

    grunt.file.write( outputFile, content );

    var done = moment();

    logger.ok( '[' + done.format( 'MM/DD/YYYY HH:mm:ss' ) + ']: Templates grouped into file: ' + path.resolve( outputFile ), (done.diff( start ) / 1000) + 's' );

  } );

};
