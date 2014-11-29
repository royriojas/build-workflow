module.exports = function ( grunt, pkg ) {

  var prepushFiles = [
    '**/*.js',
    '!resources/hooks/*.js',
    '!node_modules/**/*.*',
    '!documentation/**/*.js',
    '!apidocs/**/*.js'
  ];

  return {

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
