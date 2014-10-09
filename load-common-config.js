module.exports = function ( grunt, opts ) {
  var path = require( 'path' );

  var basePath = opts.gruntFileDirectory;
  var commonConfig = {};
  try {
    commonConfig = require( path.join( basePath, opts.commonConfig ))( grunt );
  } catch ( ex ) {
    console.error( '>>> Could not load commonConfig', ex );
    grunt.verbose.writeln( 'Could not load commonConfig', opts.commonConfig );
  }
  return commonConfig;
};
