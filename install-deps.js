var deps = [
  'time-grunt',
  'matchdep',
  'es6-promise',
  'twig',
  'marked',
  'dot',
  'moment',
  'grunt-exec',
  'jshint-stylish',
  'grunt-contrib-jshint',
  'grunt-jscs',
  'grunt-jsvalidate',
  'grunt-ez-frontend',
  'grunt-jsonlint',
  'yuidoc-theme-blue',
  'grunt-contrib-clean',
  'grunt-contrib-copy',
  'grunt-contrib-uglify',
  'grunt-codepainter',
  'grunt-csso',
  'grunt-autoprefixer',
  'stringformat',
  'browserify-shim',
  'grunt-contrib-watch',
  'grunt-karma',
  'karma-coverage',
  'karma-junit-reporter',
  'karma-jasmine',
  'karma-phantomjs-launcher',
  'karma-osx-reporter',
  'karma-spec-reporter',
  'karma-chrome-launcher',
  'reactify',
  'browserify-transform-tools',
  'esprima',
  'react',
  'karma-commonjs-plus',
  'karma-mocha',
  'sinon-chai',
  'chai',
  'sinon',
  'karma-chai-sinon',
  'jasmine-spec-reporter',
  'jshint-stylish',
  'https://github.com/royriojas/karma-react-jsx-preprocessor/tarball/1824de4',
  'https://github.com/royriojas/yuidoc/tarball/ed6e335',
  'https://github.com/royriojas/grunt-jsbeautifier/tarball/e69f6ef',
  'https://github.com/royriojas/docco-husky/tarball/f02aff8'
];

var exec = require( 'child_process' ).exec;

exec( 'npm i -D ' + deps.join( ' ' ), function ( err, stdout, stderr ) {
  if ( err ) {
    console.error( err );
    process.exit( 1 );
  }

  console.log( stdout );
} );
