module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gtu = opts.gruntTaskUtils;

  gtu.registerTasks( {
    'demo-task': function () {
      var opts = this.options( {
        message: 'hello world'
      } );
      console.log( opts.message );
    }
  } );
};
