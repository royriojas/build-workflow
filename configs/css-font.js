module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var path = require('path');

  return {
    options: {
      // the template for the file that will generate the kwl-icon-* classes
      fontLessTemplate: path.resolve(__dirname, '../resources/css-font/kwl-font.less.tpl'),

      // the template for the mixins to use this font
      fontCodesTemplate:  path.resolve(__dirname, '../resources/css-font/font-codes.mixins.tpl'),

      // the folder where the fonts are located relative to the selection.json file
      fontsFolder: 'fonts'
    }
  };

};
