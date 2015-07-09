var path = require( 'path' );

module.exports = function ( options ) {
  var extend = require( 'extend' );

  var opts = {
    lessify: true,
    babelify: {
      disabled: false,
      skipBabel: function () {
        return false;
      }
    },
    strictify: function ( filePath ) {
      // do not apply strictify to modules in the node_modules folder during testing
      return filePath.indexOf( 'node_modules/' ) === -1;
    }
  };

  extend( true, opts, options );

  return function ( content, file, done ) {
    var filePath = file.path;

    if ( filePath.match( /\.dot$/ ) || filePath.match( /\.tpl$/ ) ) {
      var dotCompiler = require( 'bundly/lib/dot-compiler' );
      content = dotCompiler.compile( content );
      done( content );
      return;
    }

    if ( filePath.match( /\.js$/ ) || filePath.match( /\.jsx$/ ) ) {
      if ( opts.strictify && opts.strictify( filePath ) ) {
        content = '\'use strict\';\n' + content;
      }

      if ( !opts.babelify.disabled && !opts.babelify.skipBabel( file.path ) ) {
        var babelCore = require( 'bundly/node_modules/babel-core' );
        content = babelCore.transform( content, extend( opts.babelify.options, {
          filename: file.path
        } ) ).code;
      }

      var falafel = require( 'falafel' );

      content = falafel( content, function ( node ) {
        var callee = node.callee;
        if ( node.type === 'CallExpression' && callee.type === 'Identifier' && callee.name === 'requireArr' ) {

          var fPath = path.dirname( file );

          var args = node.arguments.map( function ( arg ) {
            return path.join( fPath, arg.value );
          } );

          var expand = require( 'glob-expand' );

          var files = expand.apply( null, args ).map( function ( f ) {

            f = './' + path.relative( fPath, f );
            return 'require(' + JSON.stringify( f ) + ')';
          } );

          node.update( '[' + files.join( ', ' ) + ']' );
        }
      } );

      done( content );
      return;
    }
    if ( filePath.match( /\.css$/ ) || filePath.match( /\.less$/ ) ) {
      if ( opts.lessify ) {
        var compileLess = require( 'bundly/lib/compile-less' );
        compileLess( content, filePath, function ( result ) {
          done( result );
        } );
        return;
      }
    }

    done( content );
  };
};
