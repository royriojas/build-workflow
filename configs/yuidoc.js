module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    compile: {
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      url: pkg.homepage,
      options: {
        //        paths: [
        //          'Gruntfile.js',
        //          'tasks/',
        //          'configs/',
        //          'grunt-deps/',
        //          'test-helpers/',
        //          'utils/',
        //          './*.js'
        //        ],
        outdir: "./apidocs/",
        themedir: "./node_modules/yuidoc-theme-blue"
      }
    }
  };
};
