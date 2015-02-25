module.exports = function ( grunt, pkg ) {
  'use strict';
  var path = require( 'path' );

  return {
    options: {
      assetsVersion: pkg.version,
      bannerFile: path.resolve( __dirname, '../resources/license/license.txt' ),
      rewritePathTemplate: 'assets/{0}/{1}__{2}',
      separator: '\n\n'
    }
  };
};
