module.exports = function ( grunt, pkg, options ) {
  'use strict';

  return {
    'changelog': {
      dest: './report/changelog/changelog.html',
      options: {
        'gitUrlForCommit': 'https://github.com/royriojas/coffe-maker/commit/{0}',
        'gitAuthorUrl': 'https://github.com/{0}',
        'urlForBugId': 'https://github.com/royriojas/coffe-maker/issues/{0}'
      }
    }
  };
};
