module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  return {
    options: {
      ext: '.tpl' //.dot, .doT
    }
    //    check: {
    //      kwlDistPkgFile: 'node_modules/kwl-dist/package.json',
    //      parametersYAML: 'bundles/Kno/AppBundle/Resources/config/parameters.yml',
    //      kwlTarballLocation: 'http://knorepo.cloud.kno.com/pool/main/kwl-dist-{0}.tgz'
    //    }
  };
};
