module.exports = function ( grunt /* pkg, options */ ) {
  'use strict';
  var path = require( 'path' );
  return {
    options: {
      useCache: !grunt.option( 'skip-cache' ),
      format: require( path.resolve( __dirname, '../node_modules/eslint-friendly-formatter' ) ),
      configFile: path.resolve( __dirname, '../resources/json-configs/eslint.json' )
      //rulePaths: ['conf/rules']
    }
  };
};
