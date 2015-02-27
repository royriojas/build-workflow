module.exports = function () {

  // These are the files that are going to be validated by the `check-valid` task
  // if the hooks are installed, these files are going to be validated by the `prepush` task.
  var prepushFiles = [
    'src/**/*.js',
    'grunt-deps/**/*.js'
  ];

  return {
    prepushTasks: [
      'karma:one'
    ],

    validationTasks: {
      src: prepushFiles,
      tasks: [
        'esformatter',
        'eslint',
        'jscs'
      ]
    }
  };
};
