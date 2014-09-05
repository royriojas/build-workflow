module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var path = require( 'path' );

  return {
    //    all: {
    //      src: [ common.KNO_APP_BUNDLE_RESOURCES_FOLDER + '/translations/**/*.yml' ],
    //      dest: common.FRONTEND_APP_FOLDER + 'i18n/'
    //    },
    options: {
      templateFile: path.resolve( __dirname, '../resources/i18n/i18n.tpl' )
    }
  };
};
