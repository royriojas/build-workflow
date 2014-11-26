module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  gruntTaksUtils.registerTasks( {
    'dev': [ 'install-hooks', 'clean', 'check-valid', 'browserify:js-main', 'target:js-main', 'karma:one' ],
    'build': [ 'dev', 'karma:one', 'changelog', 'docco-husky-plus', 'yuidoc' ],
    //    'e2e': ['http-server', 'protractor'],
    'default': [ 'dev' ]
  } );
};
