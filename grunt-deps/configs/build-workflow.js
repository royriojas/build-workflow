module.exports = function ( /*grunt, pkg, options*/ ) {

  var prepushFiles = [
    'configs/**/*.js',
    'demo-structure/**/*.js',
    'grunt-deps/**/*.js',
    'mocha-helpers/**/*.js',
    'resources/**/*.js',
    'specs/**/*.js',
    'tasks/**/*.js',
    'test-helpers/**/*.js',
    'utils/**/*.js',
    '*.js'
  ];

  return {
    prepushTasks: [
      'jsonlint'
    ],
    validationTasks: {
      src: prepushFiles,
      tasks: [
        'esformatter',
        'eslint',
        'jscs'
      ]
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
