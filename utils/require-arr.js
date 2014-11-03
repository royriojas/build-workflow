var transformTools = require( 'browserify-transform-tools' );
var path = require( 'path' );

var options = {};
var grunt = require( 'grunt' );

module.exports = transformTools.makeFalafelTransform( 'require-arr', options,
  function ( node, transformOptions, done ) {
    var callee = node.callee;
    if ( node.type === 'CallExpression' && callee.type === 'Identifier' && callee.name === 'requireArr' ) {

      var filePath = path.dirname( transformOptions.file );

      var args = node.arguments.map(function ( arg ) {
        return path.join( filePath, arg.value );
      } );

      var files = grunt.file.expand( args ).map(function ( f ) {

        f = './' + path.relative( filePath, f );
        return 'require(' + JSON.stringify( f ) + ')';

      } );

      node.update( '[' + files.join( ', ' ) + ']' );
    }
    done();
  }
);
