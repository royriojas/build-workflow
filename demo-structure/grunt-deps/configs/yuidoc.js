module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    compile: {
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      url: pkg.homepage,
      options: {
        paths: [
          './src/js/'
        ],
        outdir: './apidocs/',
        themedir: './node_modules/yuidoc-theme-blue'
      }
    }
  };
};
