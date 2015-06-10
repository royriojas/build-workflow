module.exports = function ( grunt, opts, pkg ) {

  var path = require( 'path' );

  var baseTasksGlobs = './tasks/**/*.js';

  var commonTasks = grunt.file.expand( path.join( __dirname, baseTasksGlobs ) );

  // Load the common Tasks definitions
  commonTasks.forEach( function ( entry ) {
    //console.log('loading common tasks', entry );
    require( entry )( grunt, pkg );
  } );

};
