var inherit = require( '../lib/inherit' );
var electricPart = require( './electric-part' );

module.exports = inherit( electricPart, {
  name: 'grinder', // added only for demo purposes
  grind: function () {
    var me = this;
    me.electricity.connect( this );
    console.log( 'grinder:grinding' );
  },
  create: function () {
    var ins = Object.create( this );
    ins.init();
    return ins;
  }
} );
