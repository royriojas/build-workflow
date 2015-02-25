module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaskUtils = opts.gruntTaskUtils;
  var path = require('path');
  return {
    options: {
      configFile: path.resolve( __dirname, '../resources/json-configs/eslint.json' )
      //rulePaths: ['conf/rules']
    }
  };
};