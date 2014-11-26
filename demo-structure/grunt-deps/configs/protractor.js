module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    def: {
      options: {
        configFile: "./grunt-deps/protractor/protractor.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        //noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
          suite: 'coffee-maker'
        }
      }
    }
  };
};
