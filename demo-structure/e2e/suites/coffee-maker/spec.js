describe( 'reader', function () {
  var ptor;

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    ptor = protractor.getInstance();
  } );

  it( 'should convert markdown into proper html', function () {
    browser.get( 'http://google.com' );
    //    var ele = element(by.css('h1'));
    //
    //    ele.getText().then(function(text) {
    //      expect(text).toEqual('Creating Services on the fly... or why DRY is important');
    //    });

  } );
} );
