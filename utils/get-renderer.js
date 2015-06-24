var fs = require( 'fs' );
var dot = require( 'dot' );

module.exports = function ( file ) {
  var content = fs.readFileSync( file, { encoding: 'utf8' } );
  var settings = dot.templateSettings || { };
  settings.strip = false;

  return { render: dot.template( content, settings ) };
};
