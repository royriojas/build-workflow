var Promise = require( 'es6-promise' ).Promise;

var deps = {
  'default': [
    'time-grunt',
    'matchdep',
    'grunt-ez-frontend',
    'moment',
    'dot',
    'marked',
    'es6-promise',
    'grunt-newer',
    'grunt-contrib-jshint',
    'grunt-jscs',
    'grunt-jsvalidate',
    'https://github.com/royriojas/grunt-jsbeautifier/tarball/e69f6ef',
    'jshint-stylish',
    'grunt-codepainter',
    'grunt-exec',
    'grunt-contrib-uglify',
    'grunt-csso',
    'grunt-autoprefixer',
    'grunt-jscs',
    'twig',
    'grunt-jsonlint',
    'grunt-contrib-clean',
    'grunt-remove-logging'
  ],

  'browserify': [
    'stringformat',
    'grunt-browserify',
    'browserify-transform-tools'
  ],

  'doc-tools': [
    'docco-husky-plus',
    'yuidoc-theme-blue',
    'yuidocjs',
    'grunt-contrib-yuidoc'
  ],

  'protractor': [
    'protractor',
    'grunt-protractor-runner',
    'jasmine-spec-reporter'
  ],

  'karma': [
    'karma-chrome-launcher',
    'karma-phantomjs-launcher',
    'karma-coverage',
    'karma-osx-reporter',
    'karma-spec-reporter',
    'karma-junit-reporter',
    'karma-commonjs-plus',
    'karma-mocha',
    'sinon-chai',
    'chai',
    'sinon',
    'karma-chai-sinon',
    'grunt-karma'
  ],

  'react': [
    'react',
    'react-tools',
    'reactify',
    'karma-react-preprocessor'
  ]
};

var commands = {
  'install-deps': function ( args ) {

    return new Promise(function ( resolve, reject ) {
      var dependencies;

      var group = args.group;

      console.log( '...here...', args );

      if ( group ) {
        dependencies = deps[ group ] || [];
      } else {
        dependencies = Object.keys( deps ).reduce(function ( seq, key ) {
          return seq.concat( deps[ key ] );
        }, [] );
      }

      if ( dependencies.length === 0 ) {
        reject( {
          message: 'no deps found for group ' + group
        } );
      }

      var spawn = require( 'child_process' ).spawn;

      var child = spawn( 'npm', [ 'i', '-D' ].concat( dependencies ), {
        stdio: 'inherit'
      } );

      child.on( 'close', function ( code ) {
        if ( code !== 0 ) {
          console.error( 'Error installing dev dependencies ', code );
        } else {
          console.log( 'done with dependencies!' );
        }
        resolve();
      } );
    } );
  }
};

module.exports = commands;
