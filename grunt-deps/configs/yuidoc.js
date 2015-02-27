module.exports = function ( /*grunt, pkg, opts */ ) {
  'use strict';

  return {
    compile: {
      options: {
        files: [
          './*.js'
        ],
        paths: [
          'tasks/',
          'configs/',
          'grunt-deps/',
          'test-helpers/',
          'utils/'
        ]
      }
    }
  };
};
