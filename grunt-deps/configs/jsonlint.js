module.exports = function ( grunt ) {
  'use strict';

  return {
    // the package.json
    all: {
      src: [
        'package.json',
        'resources/json-configs/.jscs.json',
        'resources/json-configs/.jshintrc',
        'resources/json-configs/beautify-config.json',
        'resources/json-configs/codepainter.json'
      ]
    }
  };
};
