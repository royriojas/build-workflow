module.exports = function ( grunt, pkg, opts ) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    foldersToclean: {
      src: [
        'apidocs',
        'documentation'
      ]
    }
  };
};
