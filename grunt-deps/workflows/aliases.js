module.exports = function ( grunt /*, pkg, opts */ ) {
  'use strict';

  var gruntTaskUtils = require( '../../utils/grunt-helper' )( grunt );

  var aliases = {
    'default': [
      'check-valid'
    ]
  };

  gruntTaskUtils.registerTasks( aliases );
};
