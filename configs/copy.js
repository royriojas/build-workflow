module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  return {
    options: {
      // copy will try to process the content of the files as text. This behavior
      // could **potentially corrupt some binary files** as described
      // [here.](http://royriojas.wordpress.com/2014/02/06/grunt-copy-corrupting-binary-files/).
      // In order to prevent this, we exclude from processing all the binary formats we may use.
      noProcess: [
        '**/*.{png,gif,jpg,ico,psd,ttf,otf,woff,svg,sh}'
      ],
      mode: true
    }
  };
};
