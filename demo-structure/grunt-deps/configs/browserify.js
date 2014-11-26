module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    options: {
      preBundleCB: function ( b ) {
        b.transform( require( 'build-workflow/utils/require-arr' ));
        b.transform( {
          global: true
        }, 'browserify-shim' );
        return b;
      }
    },
    'js-main': {
      src: './src/js/main.js',
      dest: './dist/js/main.js'
    }
  };
};
