module.exports = function ( grunt /* pkg, options */ ) {
  'use strict';
  return {
    options: {
      useCache: !grunt.option( 'skip-cache' ),
      configFile: require.resolve( 'eslinter/configs/eslint.json' )
    }
  };
};
