module.exports = function () {
  'use strict';

  return {
    first: [
      'check-valid:esformatter'
    ],
    second: [
      'check-valid:jscs',
      'check-valid:eslint'
    ]
  };
};
