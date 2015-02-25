module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaskUtils = opts.gruntTaskUtils;
  var path = require('path');
  return {
    configFile : path.resolve( __dirname, '../resources/json-configs/esformatter.json' )
  };
};