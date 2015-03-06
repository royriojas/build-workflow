var Promise = require( 'es6-promise' ).Promise;

var deps = {
  'default': [
    'es6-promise',
    'grunt',
    'esformatter',
    'esprima-fb@12001.1.0-dev-harmony-fb', // needed by the jscs plugin
    'esformatter-eol-last',
    'esformatter-jsx',
    'esformatter-quote-props',
    'esformatter-quotes',
    'esformatter-shebang-ignore',
    'chai@^1.10.0',
    'chai-as-promised',
    'chai-fuzzy',
    'sinon',
    'sinon-chai',
    'grunt-autoprefixer',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-contrib-yuidoc',
    'grunt-csso',
    'grunt-exec',
    'grunt-ez-frontend',
    'marked',
    'matchdep',
    'mocha',
    'moment',
    'time-grunt',
    'twig',
    'yuidoc-theme-blue',
    'yuidocjs',
    'eslint',
    'eslint-friendly-formatter',
    'grunt-bump',
    'grunt-contrib-clean',
    'jscs',
    'grunt-jsonlint',
    'grunt-contrib-copy'
  ],
  browserify: [
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
  protractor: [
    'protractor',
    'grunt-protractor-runner',
    'jasmine-spec-reporter'
  ],
  karma: [
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
  react: [
    'react',
    'react-tools',
    'reactify',
    'karma-react-preprocessor'
  ]
};

var commands = {
  'install-deps': function ( args ) {

    return new Promise( function ( resolve, reject ) {
      var dependencies;

      var group = args.group;

      if ( group ) {
        dependencies = deps[ group ] || [];
      } else {
        dependencies = Object.keys( deps ).reduce( function ( seq, key ) {
          return seq.concat( deps[ key ] );
        }, [] );
      }

      if ( dependencies.length === 0 ) {
        reject( {
          message: 'no deps found for group ' + group
        } );
      }

      var spawn = require( 'child_process' ).spawn;

      var child = spawn( 'npm', [
        'i',
        '-D'
      ].concat( dependencies ), {
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
