module.exports = function ( grunt ) {

  var prepushFiles = [
    "**/*.js",
    "!resources/hooks/*.js",
    "!node_modules/**/*.*"
  ];

  return {
    changelog: {
      "gitUrlForCommit": "https://github.com/royriojas/build-workflow/commit/{0}",
      "gitAuthorUrl": "https://github.com/{0}",
      "urlForBugId": "https://github.com/royriojas/build-workflow/issues/{0}"
    },

    "docco_husky": {
      "content_dir": "documentation/docs-source",
      "output_dir": "documentation/docs",
      "sources": [
        "Gruntfile.js",
        "./"
      ],
      "project_name": "Build workflow",
      "show_timestamp": true
    },

    "codepainter": {
      "sources": prepushFiles
    },

    "yuidoc": {
      "config": "./grunt-deps/yuidoc/yuidoc.json"
    },

    "filesToValidate": {
      "jsbeautifier": prepushFiles,
      "jscs": prepushFiles,
      "jshint": prepushFiles,
      "jsvalidate": prepushFiles
    }
  };
};
