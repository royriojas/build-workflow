var main = module.exports = {
  start: function () {
    require( 'es6-promise/dist/es6-promise' ).polyfill();

    var coffeeMaker = require( './coffee-maker' ).create();
    return coffeeMaker.brew();
  }
};

// this will be replaced by the build process
// on production by false. And uglify will just remove it from the final
// bundle since it is always true
/* istanbul ignore if */
if ( !global.__TEST_ENV__ ) {
  main.start();
}
