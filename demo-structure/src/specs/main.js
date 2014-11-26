var actualCoffeeMaker = require( '../js/coffee-maker' );

describe( 'main', function () {
  it( 'should start the coffee-maker and make good coffee', function ( done ) {
    var me = this;
    var brewSpy;

    var deps = {
      './coffee-maker': {
        create: function () {

          var cm = actualCoffeeMaker.create();
          brewSpy = me.sandbox.spy( cm, 'brew' );
          return cm;
        }
      }
    };

    var main = require( '../js/main', deps );

    var coffee = main.start();

    expect( brewSpy ).to.have.been.called;

    coffee.then(function ( result ) {
      expect( result.coffee.name ).to.equal( 'good coffee!' );
      done();
    } );
  } );
} );
