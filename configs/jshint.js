module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var path = require( 'path' );
  var tryCatch = require( '../utils/try-catch' );
  var config = path.resolve( __dirname, '../resources/json-configs/.jshintrc' );

  var getReporter = function () {
    var reporter;

    tryCatch(function () {
      reporter = require( 'jshint-stylish' );
    } );

    return reporter;
  };

  return {
    options: {
      // the default configuration is taken from this file
      jshintrc: config,
      reporter: getReporter()
    }
    //    'js-check': {
    //      src: prepush.jshint || []
    //    }
  };
};
