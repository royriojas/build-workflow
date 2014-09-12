module.exports = function ( grunt, pkg ) {
  'use strict';
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils' )( grunt );
  var lib = require( 'grunt-ez-frontend/lib/lib' );
  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'twig': {
      description: 'render twig templates',
      multiTask: function () {
        var Twig = require( 'twig' );
        var twig = Twig.twig;

        var me = this;
        var opts = me.options( {
          data: {},
          extRegex: /\.twig$/,
          replaceExt: '.html'
        } );

        var src = me.data.src;
        var dest = me.data.dest;

        var files = grunt.file.expand( src );

        var noCWD = lib.trim( opts.cwd ) === '';

        files.forEach(function ( file ) {
          var fileName = path.basename( file );
          var outputDest = noCWD ? path.join( dest, fileName ) : path.join( dest, path.relative( opts.cwd, file ));

          outputDest = outputDest.replace( opts.extRegex, opts.replaceExt );
          var page = twig( {
            path: file,
            async: false
          } ).render( opts.data );

          grunt.file.write( outputDest, page );
          grunt.log.ok( 'file created', outputDest );

        } );
      }
    }
  } );
};
