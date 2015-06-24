module.exports = function ( grunt /*, pkg, opts */ ) {
  'use strict';

  var deps = {
    window: 'global.window',
    jQuery: 'global.jQuery',
    screen: 'global.screen',
    Worker: 'global.Worker',
    Promise: 'global.Promise',
    self: 'global.self'
  };

  return {
    options: {
      preBundleCB: function ( b ) {

        b.transform( require( 'build-workflow/utils/strictify' ) );

        var transforms = [
          require( 'build-workflow/utils/shimify' ).configure( deps ),
          require( 'build-workflow/utils/consoleify' ),
          require( 'build-workflow/utils/dotify' ),
          require( 'build-workflow/utils/require-arr' )
        ];

        transforms.forEach( function ( dep ) {
          b.transform( { global: true }, dep );
        } );

        var filter = grunt.option( 'console-filter' );

        if ( filter ) {
          b.transform( require( 'build-workflow/utils/console-filter' ).configure( {
            filter: filter
          } ) );
        }

        return b;
      }
    },
    'js-main': {
      src: './src/js/main.js',
      dest: './dist/js/main.js'
    }
  };
};
