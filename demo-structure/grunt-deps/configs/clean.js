module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    dist: [
      './dist',
      './report',
      './documentation',
      './apidocs'
    ]
  };
};
