var transformTools = require( 'browserify-transform-tools' );
var path = require( 'path' );

var options = {
  excludeExtensions: [ '.json', '.jsx', '.dot', '.tpl' ]
};

/**
 * parses a valid regular expression represented as a string into a real Regular Expression
 * @method parseRegExp
 * @param regexAsString {String} that represents a valid regular expression
 * @returns {RegExp}
 */

var parseRegExp = function ( regexAsString ) {

  var matches = regexAsString.match( /(\/?)(.+)\1([a-z]*)/i );
  var flags = matches[ 3 ];

  if ( flags && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test( flags ) ) {
    return new RegExp( regexAsString );
  }

  var expression = matches[ 2 ];
  return new RegExp( expression, flags );
};

module.exports = transformTools.makeFalafelTransform( 'console-filter', options, function ( node, transformOptions, done ) {
  if ( node.type === 'CallExpression' ) {
    if ( node.callee && node.callee.source().indexOf( 'console.' ) === 0 ) {

      var filter = transformOptions.config.filter;

      var regex = parseRegExp( filter );
      var source = node.source();

      var matchOnFile = transformOptions.file.match( regex );
      var matchOnSource = source.match( regex );
      if ( matchOnSource || matchOnFile ) {
        console.log( '>>> ', path.basename( transformOptions.file, '.js' ), source );
        done();
        return;
      }

      node.update( '' );
    }
  }
  done();
} );