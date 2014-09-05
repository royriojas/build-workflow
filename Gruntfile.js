//
// # App Grunt File
//
module.exports = function ( grunt ) {
  'use strict';

  require( './config-loader' )( grunt, {
    filterDevOnly: false
  } );

};
