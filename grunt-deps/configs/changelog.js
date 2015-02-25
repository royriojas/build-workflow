module.exports = function () {
  return {
    changelog: {
      dest: './report/changelog/changelog.html',
      options: {
        issueIDRegex: function () {
          return /#(\d+)/g;
        },
        gitUrlForCommit: 'https://github.com/royriojas/build-workflow/commit/{0}',
        gitAuthorUrl: 'https://github.com/{0}',
        urlForBugId: 'https://github.com/royriojas/build-workflow/issues/{0}'
      }
    }
  };
};
