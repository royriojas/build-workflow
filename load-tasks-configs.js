module.exports = function ( grunt, opts, pkg, baseConfigs ) {

  var path = require( 'path' );
  var basePath = opts.gruntFileDirectory;
  var extend = require( 'extend' );

  // tasks configs
  var localConfig = grunt.file.expand( opts.taskConfigs );

  var config = { };

  // iterate over them and register them in the config
  localConfig.forEach( function ( entry ) {
    var entryName = path.basename( entry, '.js' );
    config[ entryName ] = require( path.join( basePath, entry ) )( grunt, pkg );
  } );

  var finalConfig = extend( true, baseConfigs, config );

  Object.keys( finalConfig ).forEach( function ( key ) {
    grunt.config.set( key, finalConfig[ key ] );
  } );

};
