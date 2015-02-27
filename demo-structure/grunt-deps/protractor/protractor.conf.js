var path = require( 'path' );

var config = require( 'build-workflow/resources/protractor/protractor.conf.js' )( {
  suitesFolder: path.resolve( './e2e/suites/' ),
  specGlobs: '**/*spec.js'
} );

module.exports.config = config;
