var Promise = require( 'Promise' );

module.exports = {
  init: function () {
    var me = this;
    me.heater = require( './parts/heater' ).create();
    me.grinder = require( './parts/grinder' ).create();
    me.pump = require( './parts/pump' ).create();
  },
  brew: function () {
    var me = this;
    me.grinder.grind();
    me.heater.on();
    me.pump.pump();

    console.log( 'brewing coffee start!' );

    return new Promise(function ( resolve, reject ) {
      setTimeout(function () {
        console.log( 'brewing coffee done!' );
        resolve( {
          coffee: {
            name: 'good coffee!'
          }
        } );
      }, 1000 );
    } );
  },
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
};
