module.exports = function ( str, forceLowerCase ) {
  str = ( str || '' ).trim();

  if ( str === '' ) {
    return '';
  }

  var last = str.substr( 1 );

  forceLowerCase && ( last = last.toLowerCase());

  return str.charAt( 0 ).toUpperCase() + last;
};
