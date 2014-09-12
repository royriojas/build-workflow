// var preprocessors = [ {
//  order: [
//    'coverage',
//    'commonjs'
//  ],
//  files: [
//    './js/**/*.js',
//    './js/**/*.js'
//  ]
//}, {
//  order: [ 'commonjs' ],
//  files: [
//    'node_modules/build-workflow/test-helpers/**/*.js',
//    './templates/**/*.tpl',
//    'node_modules/moment/moment.js',
//    './specs/**/*.js',
//  ]
//}, {
//  order: [ 'react-jsx', 'coverage', 'commonjs' ],
//  files: [
//    './js/**/*.jsx'
//  ]
//} ]
//
/**
 * Will return the preprocessors in the format that Karma requires
 * @method get-preprocessors
 * @param pp {Array} the preprocessors as an array of objects like:
 * {
 *    order: ['coverage', 'commonjs'],
 *    files: ['./js/*.js', './lib/*.js']
 * }
 * @returns {Object} and object in the format Karma expects it
 */
module.exports = function ( pp ) {
  var obj = {};
  pp = pp || [];

  pp.forEach(function ( preprocessor ) {
    var files = preprocessor.files || [];
    files.forEach(function ( file ) {
      obj[ file ] = obj[ file ] || [];

      obj[ file ] = obj[ file ].concat( preprocessor.order );

    } );
  } );

  console.log( obj );

  return obj;
};
