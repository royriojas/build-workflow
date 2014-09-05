var sFormat = require( 'stringformat' );
var transformTools = require( 'browserify-transform-tools' );
var path = require( 'path' );

var options = {
  excludeExtensions: [ '.json' ]
};
var customConsole = '\n\n/*wrapping console start!*/\n\n var console = require(\'kwl-dist/new-kwl/js/modules/console-wrapper.js\').create("{0}");\n\n/*wrapping console end!*/\n\n';

module.exports = transformTools.makeStringTransform( 'consoleify', options,
  function ( content, transformOptions, done ) {
    var file = transformOptions.file;

    var usesConsole = content.indexOf( 'console' ) > -1;
    if ( usesConsole && content.indexOf( '/** NO_OVERRIDE_CONSOLE **/' ) === -1 && file.indexOf( 'kwl-dist' ) === -1 ) {

      content = sFormat( customConsole, path.basename( file ).replace( /\.js(x)*$/, '' )) + content;
    }

    done( null, content );
  } );
