module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

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
