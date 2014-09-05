module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var path = require('path');

  return {
    options: {
      templateFile: path.resolve(__dirname, '../resources/i18n/i18n.tpl')
    }
  };
};
