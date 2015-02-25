module.exports = function ( grunt, pkg ) {
  'use strict';

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
        outdir: './apidocs/',
        themedir: './node_modules/yuidoc-theme-blue'
      }
    }
  };
};
