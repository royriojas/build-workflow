var $ = require( 'jQuery' );
var stubFn = require( './stub-fn' );
module.exports = {
  stubFn: stubFn,
  /**
   * Creates an overrider object to provide alternative
   * implementations for custom objects
   * @param obj {Object}
   * @returns {Object} and overrider object
   */
  create: function ( obj ) {
    var originals = { };
    return {
      /**
       * Stub all the methods on the current object instance
       *
       * @method stubAll
       * @param callThrough {Boolean} should call to the original methods
       */
      stubAll: function ( callThrough ) {
        var keys = Object.keys( obj );
        var me = this;

        var fns = keys.filter( function ( key ) {
          return $.type( obj[ key ] ) === 'function';
        } );

        me.stubFns( fns, callThrough );
      },

      /**
       * Create stub functions of the given methods
       *
       * @method stubFns
       * @param methods {Array} the methods array
       * @param callThrough {Boolean} should call to the original methods
       */
      stubFns: function ( methods, callThrough ) {
        var me = this;
        methods = methods || [ ];
        methods.forEach( function ( method ) {
          if ( $.type( obj[ method ] ) === 'function' ) {
            var oMethod = me.override( method );
            callThrough && oMethod.callThrough();
          }
        } );
      },
      /**
       * Override method with the given implementation
       * @method override
       * @param method {String} the method name
       * @param [newImpl] {Function} the new implementation
       * @returns the old Implementation
       */
      override: function ( method, newImpl ) {
        if ( !newImpl ) {
          newImpl = stubFn();
        }

        var objMethod = obj[ method ];

        if ( !originals[ method ] ) {
          originals[ method ] = objMethod;
        }

        obj[ method ] = newImpl;

        newImpl.callThrough = function () {
          newImpl.originalMethod = originals[ method ];
        };

        return newImpl;
      },

      /**
       * Replace a given property of the object with a new object
       *
       * @method overrideProp
       * @param prop {String} the property to override
       * @param newProp {Object} the new property to use in place of the old one
       * @returns {Object} the newly created property or the given object
       */
      overrideProp: function ( prop, newProp ) {
        if ( typeof newProp === 'undefined' ) {
          newProp = { };
        }

        var objProp = obj[ prop ];

        if ( !originals[ prop ] ) {
          originals[ prop ] = objProp;
        }

        obj[ prop ] = newProp;

        return newProp;
      },

      /**
       * call the orginal method from the overriden method
       *
       * @method callOriginal
       * @param method {String} the method name
       * @param args the arguments to pass to the method
       * @returns {Mixed} whatever return the original call or
       * undefined if the method does not exist
       */
      callOriginal: function ( method, args ) {
        var oMethod = originals[ method ];
        if ( oMethod ) {
          return oMethod.apply( obj, args );
        }
      },

      /**
       * restore all the old implementations
       * @method restore
       */
      restore: function () {
        var keys = Object.keys( originals );
        keys.forEach( function ( key ) {
          obj[ key ] = originals[ key ];
        } );
      }
    };
  }
};
