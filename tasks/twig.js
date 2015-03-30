module.exports = function ( grunt ) {
  'use strict';
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils' )( grunt );

  gruntTaskUtils.registerTasks( {
    twig: {
      description: 'render twig templates',
      multiTask: function () {

        // TODO: Remove the need to include grunt-ez-frontend
        var lib = require( 'grunt-ez-frontend/lib/lib' );

        var path = require( 'path' );
        var Twig = require( 'twig' );
        var twig = Twig.twig;

        var me = this;
        var opts = me.options( {
          extRegex: /\.twig$/,
          replaceExt: '.html'
        } );

        var jsonData = {};
        opts.getData && (jsonData = opts.getData());
        opts.extendTwig && ( opts.extendTwig( Twig ));

        var src = me.data.src;
        var dest = me.data.dest;

        var files = grunt.file.expand( src );

        var noCWD = lib.trim( opts.cwd ) === '';

        files.forEach( function ( file ) {
          var fileName = path.basename( file );
          var outputDest = noCWD ? path.join( dest, fileName ) : path.join( dest, path.relative( opts.cwd, file ) );

          outputDest = outputDest.replace( opts.extRegex, opts.replaceExt );
          var page = twig( {
            path: file,
            async: false
          } ).render( {
            data: jsonData
          } );

          grunt.file.write( outputDest, page );
          grunt.log.ok( 'file created', outputDest );

        } );
      }
    }
  } );
};
