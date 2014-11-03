module.exports = function ( grunt, pkg ) {

  var prepushFiles = [
    '**/*.js',
    '!resources/hooks/*.js',
    '!node_modules/**/*.*',
    '!documentation/**/*.js',
    '!apidocs/**/*.js'
  ];

  //  var sourcesForDocs = [
  //    'Gruntfile.js',
  //    'tasks/',
  //    'configs/',
  //    'grunt-deps/',
  //    'test-helpers/',
  //    'utils/',
  //    './*.js'
  //  ];

  return {

    //    'docco_husky': {
    //      'sources': sourcesForDocs
    //    },
    //
    //    "yuidoc": {
    //      //"config": "./grunt-deps/yuidoc/yuidoc.json",
    //      files: sourcesForDocs
    //    },

    prepushTasks: [ 'jsonlint' ],

    'filesToValidate': {
      'jsbeautifier': prepushFiles,
      'jscs': prepushFiles,
      'jshint': prepushFiles,
      'jsvalidate': prepushFiles,
      'codepainter': prepushFiles
    }
  };
};
