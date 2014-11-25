module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gtu = opts.gruntTaskUtils;

  gtu.registerTasks( {
    'default': [ 'check-valid', 'demo-task' ]
  } );
};
