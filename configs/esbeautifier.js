module.exports = function ( grunt /* pkg, options */ ) {
  'use strict';

  return {
    options: {
      useCache: !grunt.option( 'skip-cache' ),
      esformatterOpts: require( 'esbeautifier/configs/esformatter.json' )
    }
  };
};
