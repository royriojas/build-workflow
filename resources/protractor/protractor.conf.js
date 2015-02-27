var grunt = require( 'grunt' );
var path = require( 'path' );

var lib = require( 'grunt-ez-frontend/lib/lib' );

module.exports = function ( cfg ) {
  var opts = {
    suitesFolder: './e2e/suites/',
    specGlobs: '**/*spec.js'
  };

  lib.extend( opts, cfg );

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
    suites: {
      hack: path.resolve( __dirname, './reporter-hack.js' ) // hack to remove the dot reporter
    },

    onPrepare: function () {
      var SpecReporter = require( 'jasmine-spec-reporter' );
      // add jasmine spec reporter
      jasmine.getEnv().addReporter( new SpecReporter( {
        displayStacktrace: true,
        displaySpecDuration: true
      } ) );
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true // Use colors in the command line report.
    }
  };

  var specsFiles = path.join( opts.suitesFolder, opts.specGlobs );

  var files = grunt.file.expand( specsFiles );

  console.log( 'files', specsFiles, files );

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
