module.exports = function ( config ) {

  var path = require( 'path' );

  var formatPreprocessors = require( 'build-workflow/resources/karma/format-preprocessors' );
  var commonJSProcessContent = require( 'build-workflow/resources/karma/commonjs-process-content' );

  config.set( {
    basePath: '../../',
    autoWatch: true,
    frameworks: [ 'mocha', 'chai-sinon', 'commonjs' ],
    browsers: [
      //'Chrome' //,
      //'Firefox'
      'PhantomJS'
    ],
    files: [
      // vendor dependencies
      'node_modules/build-workflow/test-helpers/**/*.js',
      'node_modules/es6-promise/dist/es6-promise.js',
      // your code
      'src/js/**/*.js',

      // your specs
      'src/specs/helper.js', //make sure the helper runs first
      'src/specs/**/*.js'
    ],
    reporters: [
      'spec',
      'coverage',
      'junit',
      'osx'
    ],
    preprocessors: formatPreprocessors( [ {
      order: [
        'coverage',
        'commonjs'
      ],
      files: [
        'src/js/**/*.js'
      ]
    }, {
      order: [ 'commonjs' ],
      files: [
        'node_modules/build-workflow/test-helpers/**/*.js',
        'node_modules/es6-promise/dist/es6-promise.js',
        'src/specs/**/*.js'
      ]
    }, {
      order: [
        'react-jsx',
        'coverage',
        'commonjs'
      ],
      files: [
        'src/**/*.jsx'
      ]
    } ] ),

    //singleRun: true,
    coverageReporter: {
      reporters: [ {
        type: 'text-summary'
      }, {
        type: 'html',
        dir: 'report/coverage'
      } ]
    },

    junitReporter: {
      outputFile: 'report/junit/test-results.xml'
    },

    reactPreprocessor: {
      transformPath: function ( path ) {
        return path;
      }
    },

    commonjsPreprocessor: {
      aliases: {
        //moment: path.normalize( __dirname + '../../node_modules/moment/moment.js' )
      },
      modulesRoot: 'node_modules',
      shouldExecFile: function ( file ) {
        // some files auto exec code so those files some times cause
        // harm because the scripts might be doing a redirection
        // to prevent that we just don't execute. We determine that based
        // on the file path
        //
        // var shouldExec = file.path.indexOf( 'js/launcher' ) === -1 && file.path.indexOf( 'main' ) === -1;
        // return shouldExec;
        var patterns = [
          'src/specs/',
          'node_modules/build-workflow/test-helpers/test-helper.js'
        ];

        return patterns.reduce(function ( seq, pattern ) {
          return seq || file.path.indexOf( pattern ) > -1;
        }, false );
      },
      processContent: commonJSProcessContent
    },
    // Uncomment these lines to test feature #14
    //specReporter : {
    //    suppressPassed: true,
    //    suppressFailed: true,
    //    suppressSkipped: true
    //},
    // enable / disable colors in the output (reporters and logs)
    'colors': true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    'logLevel': config.LOG_INFO

  } );
};
