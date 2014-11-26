module.exports = function ( grunt ) {
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
      browsers: [ 'Chrome' ]
    }
  };
};
