module.exports = function ( grunt, pkg ) {

  var prepushFiles = [
    '**/*.js',
    '!coverage/**/*.js',
    //'!resources/hooks/*.js',
    '!node_modules/**/*.*',
    '!documentation/**/*.js',
    '!apidocs/**/*.js'
  ];

  return {

    prepushTasks: [ 'jsonlint' ],

    validationTasks: {
      src: prepushFiles,
      tasks : [ 'esformatter', 'eslint' ]
      //jsbeautifier: prepushFiles,
      //jscs: prepushFiles
      //jshint: prepushFiles,
      //jsvalidate: prepushFiles,
      //codepainter: prepushFiles
    },

    // deprecated
    filesToValidate: {

    }
  };
};
