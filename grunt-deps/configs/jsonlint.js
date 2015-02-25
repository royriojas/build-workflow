module.exports = function ( grunt ) {
  'use strict';

  return {
    // the package.json
    all: {
      src: [
        'package.json',
        'resources/json-configs/*.json'
      ]
    }
  };
};
