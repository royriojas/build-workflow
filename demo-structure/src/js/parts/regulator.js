module.exports = {
  name: 'regulator', // added for demo purposes
  init: function ( electricity ) {
    var me = this;
    me.electricity = electricity;
    console.log( 'init' );
  },
  regulate: function () {
    var me = this;
    me.electricity.connect( this );
    console.log( 'regulate...' );
  },
  create: function ( electricity ) {
    var ins = Object.create( this );
    ins.init( electricity );
    return ins;
  }
};
