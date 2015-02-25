/**
 *
 * @class lib
 * @static
 */

var check = require( './check' );
var type = check.typeOf.bind( check );
var isPlainObject = check.isPlainObject.bind( check );

/**
 * @method extend jQuery extend as commonJS module
 * @returns {Object}
 */
module.exports = function extend() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === 'boolean' ) {
    deep = target;
    target = arguments[ 1 ] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== 'object' && type( target ) !== 'function' ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for (name in options) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && (isPlainObject( copy ) || (copyIsArray = type( copy ) === 'array')) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && type( src ) === 'array' ? src : [];

          } else {
            clone = src && isPlainObject( src ) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};
