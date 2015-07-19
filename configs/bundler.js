module.exports = function ( grunt ) {
  'use strict';

  var path = require( 'path' );
  var buildNumber = grunt.option( 'build-number' );

  return {
    options: {
      banner: grunt.file.read( path.resolve( __dirname, '../resources/license/license.txt' ) ),
      transforms: {
        consoleFilter: {
          keep: grunt.option( 'console-filter' ) || grunt.option( 'console-filter-keep' )
        }
      },
      consoleifyEnabled: buildNumber !== 'dev',
      useCache: !grunt.option( 'skip-cache' ),
      //the dev option is for development
      minimize: buildNumber !== 'dev' || grunt.option( 'bundle-min' ),
      revision: buildNumber
    }
  };
};
