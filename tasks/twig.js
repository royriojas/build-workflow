module.exports = function ( grunt ) {
  'use strict';
  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );
  var logger = require( '../utils/log' )( grunt );
  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    twig: {
      description: 'render twig templates',
      multiTask: function () {

        var twiggy = require( '../utils/twiggy' );

        var Twig = twiggy.Twig;

        var me = this;

        var opts = me.options( {
          useMin: false,
          rev: ''
        } );

        var jsonData = {};

        opts.getData && (jsonData = opts.getData());

        opts.extendTwig && ( opts.extendTwig( Twig ));

        var files = me.files;

        var renderer = twiggy.create( opts );

        files.forEach( function ( fileEntry ) {

          var src = fileEntry.src;
          src = Array.isArray( src ) ? src[ 0 ] : src;

          var outputDest = fileEntry.dest;

          var page = renderer.render( src, {
            data: jsonData
          } );

          grunt.file.write( outputDest, page );
          logger.subtle( 'File created', path.resolve( outputDest ) );

        } );

        logger.ok( '"' + me.name + ':' + me.target + '"', 'done! Templates processed:', files.length );
      }
    }
  } );
};
