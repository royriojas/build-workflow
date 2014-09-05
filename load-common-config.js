module.exports = function ( grunt, opts ) {
  var path = require( 'path' );

  var basePath = opts.gruntFileDirectory;
  var commonConfig = {};
  try {
    commonConfig = require( path.join( basePath, opts.commonConfig ))( grunt );
  } catch ( ex ) {
    grunt.verbose.writeln( 'Could not found commonConfig', opts.commonConfig );
  }
  return commonConfig;
};
