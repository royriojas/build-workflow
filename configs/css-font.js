module.exports = function ( /* grunt, pkg, options */ ) {
  'use strict';

  var path = require( 'path' );

  return {
    //    'my-font': {
    //      files: [ {
    //        src: 'lib/fonts/my-font/selection.json',
    //        dest: 'src/less/my-font/my-font.less'
    //      } ],
    //      options: {
    //        // where to dump a js file with the codes declared
    //        jsonCodesOuput: 'docs/demo/pages/my-font-data/my-font-codes.js',
    //
    //        // This function is called once per icon name and allows to fix inconsistencies in the naming conventions
    //        processIconName: function ( name ) {
    //          var fixPrefix = 'my-icon_'; // current version of the my-font have a duplicated prefix
    //          return ( name || '' ).trim().toLowerCase().replace( fixPrefix, '' ).replace( /_/g, '-' );
    //        }
    //      }
    //    },
    options: {
      // the template for the file that will generate the my-icon-* classes
      fontLessTemplate: path.resolve( __dirname, '../resources/css-font/font.less.tpl' ),

      // the template for the mixins to use this font
      fontCodesTemplate: path.resolve( __dirname, '../resources/css-font/font-codes.mixins.tpl' ),

      // the folder where the fonts are located relative to the selection.json file
      fontsFolder: 'fonts'
    }
  };
};
