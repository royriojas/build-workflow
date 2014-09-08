module.exports = function (grunt, pkg, options) {
  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var path = require('path');

  return {
    options: {
      json: path.resolve(__dirname, '../resources/json-configs/codepainter.json')
    },
    def: {

    }
  };
};