module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    docs: {
      options: {
        project_name: 'Build Workflow'
      },
      docFiles: [ 'docs/**/*.md' ],
      src: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'configs/**/*.js',
        'grunt-deps/**/*.js',
        'test-helpers/**/*.js',
        'utils/**/*.js',
        './*.js'
      ],
      dest: 'documentation'
    }
  };
};
