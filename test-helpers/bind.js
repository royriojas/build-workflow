if ( !Function.prototype.bind ) {
  Function.prototype.bind = function ( oThis ) {
    if ( typeof this !== 'function' ) {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError( 'Function.prototype.bind - what is trying to be bound is not callable' );
    }

    var aArgs = Array.prototype.slice.call( arguments, 1 ),
      fToBind = this,
      FNoop = function () {},
      fBound = function () {
        return fToBind.apply( this instanceof FNoop && oThis ? this : oThis,
          aArgs.concat( Array.prototype.slice.call( arguments )) );
      };

    FNoop.prototype = this.prototype;
    fBound.prototype = new FNoop();

    return fBound;
  };
}
