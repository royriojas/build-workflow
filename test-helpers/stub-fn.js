var $ = require( 'jQuery' );
/**
 * Creates a stubbed function to help on the testing
 *
 * @param [returnValue] {Object}
 * @returns {Function}
 */
var stubFn = function ( returnValue, exec ) {
  var fn = function () {
    var retValue = returnValue;

    var cCall = {
      args: [].slice.call( arguments ),
      thisObj: this
    };

    $.extend( fn, cCall );

    fn.called = true;

    fn.fnCalls.push( cCall );
    fn.callCount = fn.fnCalls.length;

    if ( exec ) {
      if ( $.type( returnValue ) !== 'function' ) {
        throw new TypeError( 'If exec is true, returnValue must be a function' );
      }
      retValue = retValue.apply( this, arguments );
    } else {
      if ( $.type( fn.originalMethod ) === 'function' ) {
        retValue = fn.originalMethod.apply( this, arguments );
      }
    }

    fn.returnValue = cCall.returnValue = retValue;

    return retValue;
  };

  fn.called = false;
  fn.fnCalls = [];
  fn.callCount = 0;

  return fn;
};

module.exports = stubFn;
