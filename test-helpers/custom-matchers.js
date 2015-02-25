module.exports = {
  init: function ( scope ) {
    var $ = require( 'jQuery' );

    if ( scope ) {
      scope.overriders = [];
      scope.$fixture = $( '<div id="qunit-fixture"></div>' ).appendTo( 'body' );
      scope.stubFn = require( './stub-fn' );
      var overrider = require( './overrider' );

      var qunitMethods = [
        'equal',
        'strictEqual',
        'deepEqual',
        'ok'
      ];

      qunitMethods.forEach( function ( method ) {
        scope[ method ] = function () {
          assert[ method ].apply( assert, arguments );
        };
      } );

      scope.getOverrider = function ( obj ) {
        var me = this;
        var ov = overrider.create( obj );
        me.overriders.push( ov );
        return ov;
      };

      scope.clearScope = function () {
        var me = this;
        me.$fixture.remove();
        if ( me.overriders && me.overriders.length > 0 ) {
          me.overriders.forEach( function ( ov ) {
            ov.restore();
          } );
        }
        me.overriders = null;
        me.stubFn = null;
      };

      scope.tojEqual = scope.checkEqual = function ( actual, expected, msg ) {
        var cleanJQueryObj = require( './clean-jquery-obj' );
        actual = cleanJQueryObj( actual );
        expected = cleanJQueryObj( expected );
        assert.deepEqual( actual, expected, msg || 'toJEqual failed' );
      };

      scope.toHaveProperties = function ( instance, args ) {
        var notFoundProps = [];

        args.forEach( function ( key ) {
          if ( !(key in instance) ) {
            notFoundProps.push( key );
          }
        } );

        var allFound = notFoundProps.length === 0;

        assert.isTrue( allFound, 'the object has all the given properties' );
      };

      scope.toHaveMethods = function ( obj, methods ) {

        if ( !(typeof obj !== 'undefined' && obj !== null) ) {
          throw new Error( 'You need an object to check if it provides the required methods' );
        }

        if ( methods.length === 0 ) {
          throw new Error( 'You need to pass some methods to check if they are in the object' );
        }

        var notFoundMethods = [];
        methods.forEach( function ( fn ) {
          if ( typeof obj[ fn ] !== 'function' ) {
            notFoundMethods.push( fn );
          }
        } );

        var allFound = notFoundMethods.length === 0;
        assert.isTrue( allFound, 'the object has all the given properties' );
      };

      scope.toHaveJQueryProps = function ( instance, args ) {

        var notFoundProps = [];

        args.forEach( function ( key ) {
          if ( !(key in instance) ) {
            notFoundProps.push( key );
            return;
          }
          var msg;
          var query = instance[ key ];
          if ( Object.getPrototypeOf( query ) !== $.fn ) {
            msg = key + ': found, but not jQuery';
            notFoundProps.push( msg );
            return;
          }
          if ( query.length === 0 ) {
            msg = key + ': found, but []';
            notFoundProps.push( msg );
          }
        } );

        var allFound = notFoundProps.length === 0;
        assert.isTrue( allFound, 'the object has all the given jQuery properties' );
      };
    }
  }
};
