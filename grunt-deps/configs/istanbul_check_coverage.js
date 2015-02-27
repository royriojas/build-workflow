module.exports = function ( /*grunt, pkg, options*/ ) {
  'use strict';
  //var gruntTaskUtils = opts.gruntTaskUtils;

  return {
    default: {
      options: {
        coverageFolder: 'coverage', // will check both coverage folders and merge the coverage results
        check: {
          lines: 50,
          statements: 50
        }
      }
    }
  };
};
