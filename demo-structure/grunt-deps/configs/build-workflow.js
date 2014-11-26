module.exports = function ( grunt ) {

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

    // **filesToValidate**
    //
    // This json object controls which files are passed to each task.
    // usually they are the same so we're using a single variable here
    // the tasks executed by the check-valid task and the prepush are
    // `jsbeautifier`, `jscs`, `jshint`, `jsvalidate`
    // `codepainter` is optional and can be executed by running
    // `grunt codepainter`. You can replace jsbeautifier by codepainter, but you will need
    // run `grunt codepainter` manually. The default configuration is inside the folder
    // `node_modules/build-workflow/resources/json-configs/codepainter.json`. You can
    // replace it overriding the value of the `grunt-deps/configs/codepainter.js` with your own one.
    //
    filesToValidate: {
      'jsbeautifier': prepushFiles,
      'jscs': prepushFiles,
      'jshint': prepushFiles,
      'jsvalidate': prepushFiles,
      'codepainter': prepushFiles
    }
  };
};
