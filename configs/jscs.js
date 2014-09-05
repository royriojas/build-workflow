module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require( 'path' );
  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var prepush = commonConfig.prepush || {};

  return {
    //    'js-check': {
    //      src: prepush.jscs || []
    //    },
    options: {
      config: path.resolve( __dirname, '../resources/json-configs/.jscs.json' )
    }
  };
  // endregion
};
