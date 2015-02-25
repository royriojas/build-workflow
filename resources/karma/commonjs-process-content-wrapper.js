var dotCompiler = require( '../../utils/dot-compiler' );
var falafel = require( 'falafel' );
var grunt = require( 'grunt' );
var path = require( 'path' );

module.exports = function ( options ) {
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  var opts = {
    strictify: function ( filePath ) {
      // do not apply strictify to modules in the node_modules folder during testing
      return filePath.indexOf( 'node_modules/' ) === -1;
    }
  };

  lib.extend( opts, options );

  return function ( content, file ) {
    var filePath = file.path;

    if ( filePath.match( /\.dot$/ ) || filePath.match( /\.tpl$/ ) ) {
      content = dotCompiler.compile( content );
    }

    if ( filePath.match( /\.js$/ ) || filePath.match( /\.jsx$/ ) ) {
      if ( opts.strictify && opts.strictify( filePath ) ) {
        content = '\'use strict\';\n' + content;
      }

      content = falafel( content, function ( node ) {
        var callee = node.callee;
        if ( node.type === 'CallExpression' && callee.type === 'Identifier' && callee.name === 'requireArr' ) {

          var filePath = path.dirname( file );

          var args = node.arguments.map( function ( arg ) {
            return path.join( filePath, arg.value );
          } );

          var files = grunt.file.expand( args ).map( function ( f ) {

            f = './' + path.relative( filePath, f );
            return 'require(' + JSON.stringify( f ) + ')';
          } );

          node.update( '[' + files.join( ', ' ) + ']' );
        }
      } );
    }
    return content;
  };
};
