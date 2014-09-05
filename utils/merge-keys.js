module.exports = function () {
  var args = [].slice.call( arguments );
  var objKeys = {};

  args.forEach(function ( obj ) {
    if ( obj ) {
      var keys = Object.keys( obj );
      keys.forEach(function ( key ) {
        objKeys[ key ] = true;
      } );
    }
  } );

  return Object.keys( objKeys );
};
