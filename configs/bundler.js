module.exports = function ( grunt ) {
  'use strict';
  var path = require( 'path' );
  var buildNumber = grunt.option( 'build-number' );

  return {
    options: {
      banner: grunt.file.read( path.resolve( __dirname, '../resources/license/license.txt' ) ),
      consoleFilter: grunt.option( 'console-filter' ),
      //the dev option is for development
      uglify: buildNumber !== 'dev' || grunt.option( 'bundle-min' ),
      buildVersion: buildNumber
    }
  };
};
