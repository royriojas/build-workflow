module.exports = function ( grunt /* pkg, options */ ) {
  'use strict';

  var path = require( 'path' );

  return {
    options: {
      useCache: !grunt.option( 'skip-cache' ),
      config: path.resolve( __dirname, '../resources/json-configs/.jscs.json' )
    }
  };
};
