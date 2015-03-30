var path = require( 'path' );
var expand = require( 'glob-expand' );
var extend = require( 'extend' );

module.exports = function ( cfg ) {
  var opts = {
    suitesFolder: './e2e/suites/',
    specGlobs: '**/*spec.js'
  };

  extend( opts, cfg );

  var protractorPath = path.resolve( path.dirname( require.resolve( 'protractor' ) ), '../' );

  // An example configuration file.
  var config = {
    // The address of a running selenium server.
    //  seleniumAddress: 'http://10.211.55.5:4412/wd/hub',
    //  capabilities: {
    //    'browserName': 'internet explorer',
    //    'platform': 'ANY',
    //    'version': '11'
    //  },
    //chromeOnly: true,
    chromeDriver: path.join( protractorPath, '/selenium/chromedriver' ),
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    framework: 'mocha',
    onPrepare: function () {
      var chai = require( 'chai' );
      chai.use( require( 'chai-as-promised' ) );
      chai.use( require( 'sinon-chai' ) );
      chai.use( require( 'chai-fuzzy' ) );
      global.expect = chai.expect;
      // make it not wait for Angular, since we don't use it
      global.browser.ignoreSynchronization = true;
    },
    mochaOpts: {
      ui: 'bdd',
      reporter: 'spec',
      // important. Mocha has a very low threshold
      timeout: 10000
    },
    suites: {

    }
  };

  var specsFiles = path.join( opts.suitesFolder, opts.specGlobs );

  var files = expand( specsFiles );

  console.log( 'suites >>> ', specsFiles, files );

  var getDirectoryNameOfFile = function ( file ) {
    var name = path.dirname( file );

    var parts = name.split( path.sep );

    if ( parts.length > 0 ) {
      name = parts[ parts.length - 1 ];
    }

    return name;
  };

  files.forEach( function ( file ) {
    var dName = getDirectoryNameOfFile( file );

    config.suites[ dName ] = config.suites[ dName ] || path.join( path.dirname( file ), opts.specGlobs );

  } );

  return config;
};
