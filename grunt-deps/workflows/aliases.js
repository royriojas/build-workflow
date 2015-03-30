module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var gruntTaksUtils = opts.gruntTaskUtils;

  var aliases = {
    'default': [
      'clean',
      'check-valid'
    ]
  };

  gruntTaksUtils.registerTasks( aliases );
};
