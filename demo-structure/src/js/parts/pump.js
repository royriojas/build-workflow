var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );

module.exports = inherit( electricPart, {
  name: 'pump', // added only for demo purposes
  pump: function () {
    var me = this;
    me.electricity.connect( this );
    console.log( 'pump:pumping' );
  },
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
} );
