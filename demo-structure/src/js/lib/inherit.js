var extend = require( './extend' );

/**
 * Simplify the prototypical inheritance
 *
 * @method inherit
 * @param baseObject {Object} the object that will be the __proto__ of the newly created object
 * @param childObject {Object} the object containing methods and properties for the newly created object
 */
var inherit = function ( baseObject, childObject ) {
  var instance = Object.create( baseObject );
  return extend( instance, childObject );
};

module.exports = inherit;
