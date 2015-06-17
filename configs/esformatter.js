module.exports = function ( grunt/* pkg, options */ ) {
  'use strict';

  var path = require( 'path' );
  return {
    options: {
      useCache: !grunt.option( 'skip-cache' ),
      configFile: path.resolve( __dirname, '../resources/json-configs/esformatter.json' )
    }
  };
};
