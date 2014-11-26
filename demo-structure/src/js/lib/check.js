/**
 *
 * Utility for do some basic check on arguments and objects
 *
 * @class check
 * @static
 */

// code for `typeOf` and `isPlainObject` borrowed from `jQuery.type`
// to avoid including jquery only to have this
var class2type = {};

var types = [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Object"
];

var objProto = Object.prototype;
var hasOwn = objProto.hasOwnProperty;
var toString = objProto.toString;

types.forEach(function ( name ) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

var chk = {
  /**
   * Checks if the provided value is null (or undefined)
   *
   * @method isNull
   * @param val {*} the value to check
   * @return {Boolean} true if it is null (or undefined)
   */
  isNull: function ( val ) {
    return typeof val === "undefined" || val === null;
  },
  /**
   * Checks if a value is an empty string, null or undefined.
   * @method isNullOrEmpty
   * @param val
   * @return {Boolean}
   */
  isNullOrEmpty: function ( val ) {
    var me = this;
    return val === '' || me.isNull( val );
  },

  /**
   * Returns the type of the val being passed
   *
   * @method typeOf
   * @param obj {*} Any object which type is needed to be known.
   * @return {String} the name of the type of the object being
   */
  typeOf: function ( obj ) {
    return obj === null ?
      String( obj ) :
      class2type[ toString.call( obj ) ] || "object";
  },
  /**
   * Returns true if an object is a plain object
   *
   * @method isPlainObject
   * @param obj {*} an Object to evaluate if it is a plain javascript object
   * @return {Boolean} true if the the object is a plain object, false otherwise
   */
  isPlainObject: function ( obj ) {
    var me = this;
    if ( !obj || me.typeOf( obj ) !== "object" ) {
      return false;
    }

    // Not own constructor property must be Object
    if ( obj.constructor && !hasOwn.call( obj, "constructor" ) && !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" )) {
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || hasOwn.call( obj, key );
  }
};

module.exports = chk;
