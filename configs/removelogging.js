module.exports = function ( /* grunt, pkg, options */ ) {
  'use strict';

  return {
    options: {
      methods: [
        'log',
        'debug'
      ]
    }
    //    ,
    //    dist: {
    //      src: "./dest/js/*.js" // Each file will be overwritten with the output!,
    //    }
  };
};
