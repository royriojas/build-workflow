module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    options: {
      replacements: [ {
        replace: /global\.__TEST_ENV__/g, // this flag will control if the console object is used or not
        using: function () {
          return "false";
        }
      } ]
    },
    'js-main': {
      src: [
        'dist/js/main.js'
      ],
      dest: 'dist/js/main.js'
    } //,
    //    'css-main': {
    //      src: [
    //        'src/less/main.less'
    //      ],
    //      dest: 'dest/wiki-enhancements.css'
    //    }
  };
};
