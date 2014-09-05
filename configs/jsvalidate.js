module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require( 'path' );
  var gruntTaskUtils = options.gruntTaskUtils;
  var commonConfig = options.commonConfig;
  var prepush = commonConfig.prepush || {};

  // region ### jsvalidate
  // validate the javascript files looking for syntax errors. It complements jshint and it is based on Esprima.
  return {
    options: {
      globals: {},
      esprimaOptions: {},
      verbose: false
    }
    //    'js-check': {
    //      files: {
    //        src: prepush.jsvalidate
    //      }
    //    }
  };
  // endregion
};
