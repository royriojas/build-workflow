module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require( 'path' );

  // region ### jsonlint
  // this task validates that the json files used to configure jshint, jscs and jsbeautifier are valid json files
  return {
    pkg: {
      src: [ 'package.json' ]
    }
  };
  //endregion
};
