module.exports = function (/*grunt, pkg, options*/ ) {
  'use strict';

  var configFile = 'grunt-deps/karma/karma.conf.js';

  return {
    develop: {
      configFile: configFile
    },
    one: {
      configFile: configFile,
      singleRun: true
    },
    chrome: {
      configFile: configFile,
      browsers: [
        'Chrome'
      ]
    }
  };
};
