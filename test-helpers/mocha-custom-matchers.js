beforeEach(function ( done ) {
  var me = this;
  try {
    require( './custom-matchers' ).init( me );
  } catch ( ex ) {
    console.error( 'Mocha Custom Matchers: Error initializing custom matchers.' );
  }
  done && done();
} );

afterEach(function ( done ) {
  var me = this;
  me.clearScope && me.clearScope();
  done && done();
} );
