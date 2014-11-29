module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    'dev': {
      // the server root directory
      root: './demo/',
      port: 8282,
      host: "127.0.0.1",
      cache: 1,
      showDir: true,
      autoIndex: true,

      // server default file extension
      ext: "html",

      // run in parallel with other tasks
      runInBackground: true

    }

  };
};
