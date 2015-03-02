module.exports = function ( /*grunt, pkg, opts */ ) {
  'use strict';

  return {
    scripts: {
      files: [
        'specs/**/*.js',
        'resources/hooks/lib/**/*.js'
      ],
      tasks: [
        'mocha_istanbul'
      ],
      options: {
        spawn: false
      }
    }
  };
};
