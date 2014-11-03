/*
 "karma-react-jsx-preprocessor": "https://github.com/royriojas/karma-react-jsx-preprocessor/tarball/1824de4",
 "marked": "~0.3.2",
 "es6-promise": "~1.0.0",
 "dot": "~1.0.2",
 "yuidoc-theme-blue": "~0.1.8",
 "time-grunt": "~1.0.0",
 "jshint-stylish": "~0.4.0",
 "grunt-jsvalidate": "~0.2.2",
 "twig": "~0.7.2",
 "docco-husky": "https://github.com/royriojas/docco-husky/tarball/54a9a7d",
 "matchdep": "~0.3.0",
 "grunt-contrib-jshint": "~0.10.0",
 "grunt-jsonlint": "~1.0.4",
 "moment": "~2.8.3",
 "grunt-jsbeautifier": "https://github.com/royriojas/grunt-jsbeautifier/tarball/e69f6ef",
 "grunt-jscs": "~0.7.1",
 "grunt": "~0.4.5",
 "grunt-ez-frontend": "~0.2.21",
 "yuidocjs": "https://github.com/royriojas/yuidoc/tarball/ed6e335",
 "grunt-exec": "~0.4.6",
 "grunt-contrib-copy": "~0.5.0",
 "sinon-chai": "~2.5.0",
 "stringformat": "0.0.5",
 "grunt-codepainter": "~1.1.0",
 "grunt-contrib-clean": "~0.6.0",
 "karma-chrome-launcher": "~0.1.4",
 "karma-commonjs-plus": "0.0.25",
 "karma-jasmine": "~0.1.5",
 "karma-junit-reporter": "~0.2.2",
 "karma-spec-reporter": "0.0.13",
 "jasmine-spec-reporter": "~0.6.0",
 "chai": "~1.9.1",
 "esprima": "~1.2.2",
 "grunt-karma": "~0.9.0",
 "mocha": "~1.21.4",
 "karma-mocha": "~0.1.9",
 "reactify": "~0.14.0",
 "browserify-transform-tools": "~1.2.1",
 "grunt-contrib-uglify": "~0.5.1",
 "karma-phantomjs-launcher": "~0.1.4",
 "sinon": "~1.10.3",
 "grunt-contrib-watch": "~0.6.1",
 "react": "~0.11.1",
 "karma-coverage": "~0.2.6",
 "grunt-csso": "~0.6.3",
 "karma-osx-reporter": "~0.1.0",
 "karma": "~0.12.23",
 "karma-chai-sinon": "~0.1.3",
 "grunt-autoprefixer": "~1.0.1",
 "browserify": "~5.11.1",
 "browserify-shim": "~3.7.0",
 "grunt-bump": "0.0.15",
 "docco-husky-plus": "~0.4.1"
 */

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
    'grunt-jscs'
  ],

  'browserify': [
    'grunt-browserify',
    'browserify-shim'
  ],

  'doc-tools': [
    'docco-husky-plus',
    'yuidoc-theme-blue',
    'yuidocjs'
  ],

  'protractor': [
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

//var spawn = require( 'child_process' ).spawn;
//
//var child = spawn('npm', ['i', '-D'].concat( deps ), { stdio: 'inherit' });
//
//child.on('close', function (code) {
//  if (code !== 0) {
//    console.error('Error installing dev dependencies ', code);
//    return;
//  }
//  console.log('done!');
//});
