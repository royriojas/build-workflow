module.exports = function () {
  'use strict';
  var path = require( 'path' );
  return {
    options: {
      configFile: path.resolve( __dirname, '../resources/json-configs/eslint.json' )
      //rulePaths: ['conf/rules']
    }
  };
};
