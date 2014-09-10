module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var aliases = {
    'default': function () {
      console.log( 'default task!' );
    }
  };

  gruntTaksUtils.registerTasks( aliases );
};
