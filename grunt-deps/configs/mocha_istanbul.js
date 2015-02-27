module.exports = function ( /*grunt, pkg, opts */ ) {
  'use strict';

  return {
    coverage: {
      src: 'specs', // a folder works nicely
      options: {
        root: './resources',
        mask: '**/*.js',
        reportFormats: [ 'html', 'text-summary' ]
      }
    }
  };
};
