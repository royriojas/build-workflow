module.exports = function () {

  var path = require( 'path' );

  return {
    options: {
      json: path.resolve( __dirname, '../resources/json-configs/codepainter.json' )
    },
    def: {

    }
  };
};
