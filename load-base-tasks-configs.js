module.exports = function ( grunt, opts, pkg, helperOptions ) {

  var path = require( 'path' );

  var baseConfigs = {};

  var baseTasksConfigs = grunt.file.expand( path.join( __dirname, './configs/**/*.js' ));

  baseTasksConfigs.forEach(function ( entry ) {
    var entryName = path.basename( entry, '.js' );
    baseConfigs[ entryName ] = require( entry )( grunt, pkg, helperOptions );
  } );

  return baseConfigs;

};
