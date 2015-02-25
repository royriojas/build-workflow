module.exports = function ( /* grunt, pkg, options */ ) {
  'use strict';

  return {
    options: {
      'adjoining-classes': false,
      'bulletproof-font-face': false,
      'regex-selectors': false,
      // TODO: consider reviewing this https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors
      'unqualified-attributes': false,
      'compatible-vendor-prefixes': false,
      gradients: false,
      'known-properties': false,
      'box-model': false,
      'fallback-colors': false,
      'outline-none': false
    }
  };
};
