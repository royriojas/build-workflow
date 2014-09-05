module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );

  return {
    options: {
      //template: '(function (jQuery, kno, window) { \n  var ns = kno.ns;\n  \n//[[CONTENT]]\n  \n}($, kno, window));'
      templateFile: path.resolve( __dirname, '../resources/compile-templates/dot-template.tpl' )
    }
  };
};
