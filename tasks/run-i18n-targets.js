module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  gruntTaksUtils.registerTasks( {
    'run-i18n-targets': function () {

      var ezFrontend = grunt.config.get( 'ez-frontend' );

      var tasks = [];
      Object.keys( ezFrontend ).forEach( function ( key ) {
        var isi18nTask = /^i18n/.test( key );
        if ( isi18nTask ) {
          tasks.push( 'js-target:' + key );
        }
      } );

      if ( tasks.length > 0 ) {
        grunt.task.run( tasks );
      }
    }
  } );
};
