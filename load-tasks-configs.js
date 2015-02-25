module.exports = function ( grunt, opts, pkg, helperOptions, baseConfigs ) {

  var path = require( 'path' );
  var basePath = opts.gruntFileDirectory;
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  // tasks configs
  var localConfig = grunt.file.expand( opts.taskConfigs );

  var config = {};

  // iterate over them and register them in the config
  localConfig.forEach( function ( entry ) {
    var entryName = path.basename( entry, '.js' );
    //var baseConfig = baseConfigs[ entryName ] || {};

    var lConfig = require( path.join( basePath, entry ) )( grunt, pkg, helperOptions );
    config[ entryName ] = lConfig;
    //var outCfg = lib.extend( true, baseConfig, lConfig );
    //grunt.config.set( entryName, outCfg );

  } );

  var finalConfig = lib.extend( true, baseConfigs, config );

  Object.keys( finalConfig ).forEach( function ( key ) {
    grunt.config.set( key, finalConfig[ key ] );
  } );

};
