module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaskUtils = opts.gruntTaskUtils;

  return {
    scripts: {
      files: [
        'specs/**/*.js',
        'resources/hooks/lib/**/*.js'
      ],
      tasks: [ 'mocha_istanbul' ],
      options: {
        spawn: false
      }
    }
  };
};
