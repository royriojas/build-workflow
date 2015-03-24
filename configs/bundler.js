module.exports = function ( grunt ) {
  'use strict';
  var path = require( 'path' );

  return {
    options: {
      banner: grunt.file.read( path.resolve( __dirname, '../resources/license/license.txt' ) )
    }
  };
};
