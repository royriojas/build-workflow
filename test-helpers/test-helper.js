(function ( global ) {

  var objUtil = require( './obj-util' );

  beforeEach(function ( done ) {
    global.__cjs__clearCachedModules && global.__cjs__clearCachedModules();
    var sinon = require( 'sinon' );
    var me = this;
    var sandbox = sinon.sandbox.create();
    me.sandbox = sandbox;

    require( './custom-matchers' ).init( me );

    var methods = [ 'stub', 'spy' ];

    var many = function ( type, obj, methods ) {

      var doubles = {};
      methods = [].concat( methods );

      for ( var m = 0; m < methods.length; m++ ) {
        var method = methods[ m ];

        // Sinon requires doubling target to exist.
        if ( !objUtil.getKeyValue( obj, method )) {
          objUtil.setKeyValue( obj, method, Function.prototype );
        }

        if ( /\./.test( method )) { // Ex. 'a.b.c'
          var methodsParts = method.split( '.' );
          doubles[ method ] = sandbox[ type ](
            objUtil.getKeyValue( obj, methodsParts.slice( 0, -1 ).join( '.' )), // Ex. 'a.b'
            methodsParts.slice( -1 ) // Ex. 'c'
          );
        } else {
          doubles[ method ] = sandbox[ type ]( obj, method );
        }
      }

      return doubles;
    };

    methods.forEach(function ( type ) {
      sandbox[ type + 'Many' ] = function ( obj, methods ) {
        return many( type, obj, methods );
      };
    } );

    sandbox.createSpyObj = function ( name, methods ) {
      var obj = {};
      obj.__name__ = name;
      sandbox.spyMany( obj, methods );
      return obj;
    };

    done && done();
  } );

  afterEach(function ( done ) {

    var me = this;

    me.clearScope();
    me.sandbox.restore && me.sandbox.restore();
    global.__clearMocks && global.__clearMocks();
    global.__cjs__clearCachedModules && global.__cjs__clearCachedModules();
    done && done();
  } );

}( self ));
