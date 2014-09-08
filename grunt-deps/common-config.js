module.exports = function ( grunt ) {

  var prepushFiles = [
    '**/*.js',
    '!resources/hooks/*.js',
    '!node_modules/**/*.*',
    '!documentation/**/*.js',
    '!apidocs/**/*.js'
  ];

  return {

    'docco_husky': {
      'sources': [
        'Gruntfile.js',
        'tasks/'
      ]
    },

    'codepainter': {
      'sources': prepushFiles
    },

    //    "yuidoc": {
    //      "config": "./grunt-deps/yuidoc/yuidoc.json"
    //    },

    'filesToValidate': {
      'jsbeautifier': prepushFiles,
      'jscs': prepushFiles,
      'jshint': prepushFiles,
      'jsvalidate': prepushFiles
    }
  };
};
