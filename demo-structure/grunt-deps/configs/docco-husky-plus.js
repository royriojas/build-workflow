module.exports = function (/*grunt, pkg, options*/ ) {
  'use strict';
  //var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    docs: {
      docFiles: [
        'docs/**/*.md'
      ],
      src: [
        'src/**/*.js'
      ],
      dest: 'documentation'
    }
  };
};
