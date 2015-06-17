var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );
var regulator = require( './regulator' );

module.exports = inherit( electricPart, {
  name: 'heater', // added only for demo purposes
  init: function () {
    var me = this;
    electricPart.init.call( me );
    me.regulator = regulator.create( me.electricity );
  },
  on: function () {
    var me = this;
    me.electricity.connect( this );
    me.regulator.regulate();
    console.log( 'heater:heating!' );
  },
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
} );
