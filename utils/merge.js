module.exports = function () {
  var arr = [ ].slice.call( arguments );

  return arr.reduce( function ( a, b ) {
    return a.concat( b );
  }, [ ] );
};
