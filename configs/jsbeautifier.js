module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var prepush = commonConfig.prepush || {};

  var path = require( 'path' );

  var config = path.resolve( __dirname, '../resources/json-configs/beautify-config.json' );

  return {
    options: {
      mode: 'VERIFY_AND_WRITE',
      config: config
    }
    //    'js-check': {
    //      src: prepush.jsbeautifier || [],
    //      options: {
    //        // verify and rewrite any offending not formatted file
    //        mode: 'VERIFY_ONLY'
    //      }
    //    }
  };
};
