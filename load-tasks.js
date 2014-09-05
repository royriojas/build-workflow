module.exports = function ( grunt, opts, pkg, helperOptions ) {

  var path = require( 'path' );

  var basePath = opts.gruntFileDirectory;

  // Custom tasks for this project
  var customTasks = grunt.file.expand( opts.customTasks );

  // iterate over them and execute them
  customTasks.forEach(function ( entry ) {
    //console.log('loading custom tasks', entry );
    require( path.join( basePath, entry ))( grunt, pkg, helperOptions );
  } );

};
