module.exports = function ( grunt, pkg, options ) {
  'use strict';
  var path = require('path');

  var gruntTaskUtils = options.gruntTaskUtils;
  var licenseLocation = path.resolve(__dirname, '../resources/license/license.txt');

  //console.log('license location', licenseLocation);

  return {
    options: {
      assetsVersion: pkg.version,
      bannerFile: licenseLocation,
      rewritePathTemplate: 'assets/{0}/{1}__{2}',
      separator: '\n\n'
    }
  };
};
