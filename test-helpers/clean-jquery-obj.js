module.exports = function cleanJQueryObjects( obj ) {
  var $ = require( 'jQuery' );

  var isObject = ($.type( obj ) === 'object') && !$.isEmptyObject( obj );

  if ( isObject ) {
    if ( Object.getPrototypeOf( obj ) === $.fn ) {
      if ( obj.length > 0 ) {
        return obj[ 0 ];
      }
      return null;
    }
    Object.keys( obj ).forEach( function ( key ) {
      obj[ key ] = cleanJQueryObjects( obj[ key ] );
    } );
  }

  return obj;
};
