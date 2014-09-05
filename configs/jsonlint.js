module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require('path');
  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var prepush = commonConfig.prepush || {};

  // region ### jsonlint
  // this task validates that the json files used to configure jshint, jscs and jsbeautifier are valid json files
  return {
    pkg: {
      src: [ 'package.json' ]
    }
  };
  //endregion
};
