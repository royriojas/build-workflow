module.exports = function ( /* grunt, pkg, options */ ) {
  'use strict';

  var path = require( 'path' );
  return {
    options: {
      configFile: path.resolve( __dirname, '../resources/json-configs/esformatter.json' )
    }
  };
};
