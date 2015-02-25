/**
 * The `build-workflow` module
 * @module build-workflow
 */

/**
 * Utils namespace
 * @class utils
 * @static
 */

/**
 * Capitalize a string.
 *
 * @method capitalize
 * @param str {String}
 * @param [forceLowerCase] {Boolean} force the rest of the string to be lowercase
 * @returns {string} The capitalized string
 */
module.exports = function ( str, forceLowerCase ) {
  str = (str || '').trim();

  if ( str === '' ) {
    return '';
  }

  var last = str.substr( 1 );

  forceLowerCase && (last = last.toLowerCase());

  return str.charAt( 0 ).toUpperCase() + last;
};
