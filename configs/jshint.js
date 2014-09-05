module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require('path');
  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var prepush = commonConfig.prepush || {};

  var config = path.resolve(__dirname, '../resources/json-configs/.jshintrc');

  // region ### jshint
  //
  // validate the javascript files against jshint
  return {
    options: {
      // the default configuration is taken from this file
      jshintrc: config,
      reporter: require('jshint-stylish')
    }
//    'js-check': {
//      src: prepush.jshint || []
//    }
  };
  // endregion
};
