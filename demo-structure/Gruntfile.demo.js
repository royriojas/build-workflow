module.exports = function ( grunt ) {
  'use strict';

  // load the config-loader function and pass the grunt object
  require( 'build-workflow' )( grunt, {
    // uncomment this line to load the base tasks
    // loadBaseTasksAndConfigs : false
    //replaceVersionWithBuildNumber: false
  } );
};