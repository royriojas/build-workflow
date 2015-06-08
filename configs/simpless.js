module.exports = function ( grunt ) {
  'use strict';

  var path = require( 'path' );
  var buildNumber = grunt.option( 'build-number' );

  return {
    options: {
      banner: grunt.file.read( path.resolve( __dirname, '../resources/license/license.txt' ) ),
      minimize: buildNumber !== 'dev' || grunt.option( 'bundle-min' ),
      revision: buildNumber,
      assetsPathFormat: 'assets/{REVISION}_{GUID}_{FNAME}',
      copyAssetsToDestFolder: true,
      browsers: 'last 2 versions',
      advanceMin: true
    }
  };
};
