module.exports = function ( /* grunt, pkg, options */ ) {
  'use strict';

  var path = require( 'path' );

  return {
    //    'kwl-font': {
    //      files: [ {
    //        src: 'lib/fonts/KWL-font/selection.json',
    //        dest: 'src/less/KWL-font/kwl-font.less'
    //      } ],
    //      options: {
    //        // where to dump a js file with the codes declared
    //        jsonCodesOuput: 'docs/demo/pages/kwl-font-data/kwl-font-codes.js',
    //
    //        // This function is called once per icon name and allows to fix inconsistencies in the naming conventions
    //        processIconName: function ( name ) {
    //          var fixPrefix = 'kwl-icon_'; // current version of the KWL-font have a duplicated prefix
    //          return ( name || '' ).trim().toLowerCase().replace( fixPrefix, '' ).replace( /_/g, '-' );
    //        }
    //      }
    //    },
    options: {
      // the template for the file that will generate the kwl-icon-* classes
      fontLessTemplate: path.resolve( __dirname, '../resources/css-font/kwl-font.less.tpl' ),

      // the template for the mixins to use this font
      fontCodesTemplate: path.resolve( __dirname, '../resources/css-font/font-codes.mixins.tpl' ),

      // the folder where the fonts are located relative to the selection.json file
      fontsFolder: 'fonts'
    }
  };
};
