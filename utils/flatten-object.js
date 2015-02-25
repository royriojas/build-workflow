module.exports = function flattenObject( ob ) {
  var toReturn = {};
  var keys = Object.keys( ob );

  keys.forEach( function ( key ) {
    if ( (typeof ob[ key ]) === 'object' && ob[ key ] !== null ) {
      var flatObject = flattenObject( ob[ key ] );
      Object.keys( flatObject ).forEach( function ( subKey ) {
        toReturn[ key + '.' + subKey ] = flatObject[ subKey ];
      } );
    } else {
      toReturn[ key ] = ob[ key ];
    }
  } );

  return toReturn;
};
