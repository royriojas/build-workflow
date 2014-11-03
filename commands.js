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
    'grunt-contrib-clean'
  ],

  'browserify': [
    'grunt-browserify',
    'browserify-shim'
  ],

  'doc-tools': [
    'docco-husky-plus',
    'yuidoc-theme-blue',
    'yuidocjs',
    'grunt-contrib-yuidoc'
  ],

  'protractor': [
    'protractor',
    'grunt-protractor'
  ],

  'karma': [
    'karma-phantomjs-launcher',
    "karma-coverage",
    'karma-osx-reporter',
    'karma-spec-reporter',
    "karma-junit-reporter",
    'karma-commonjs-plus',
    'karma-mocha',
    'sinon-chai',
    'chai',
    'sinon',
    'karma-chai-sinon'
  ]
};

var commands = {
  'install-deps': function ( opts, cb ) {

    var dependencies = Object.keys( deps ).reduce(function ( seq, key ) {
      return seq.concat( deps[ key ] );
    }, [] );

    var spawn = require( 'child_process' ).spawn;

    var child = spawn( 'npm', [ 'i', '-D' ].concat( dependencies ), {
      stdio: 'inherit'
    } );

    child.on( 'close', function ( code ) {
      if ( code !== 0 ) {
        console.error( 'Error installing dev dependencies ', code );
        return;
      }
      console.log( 'done with dependencies!' );
      cb && cb();
    } );
  }
};

module.exports = commands;
