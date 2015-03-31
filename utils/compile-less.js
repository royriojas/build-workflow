module.exports = function ( content, file, done ) {
  var path = require( 'path' );
  var less = require( 'less' );
  var assign = require( 'object-assign' );

  var funcStart = '(function() { var head = document.getElementsByTagName("head")[0]; var style = document.createElement("style"); style.type = "text/css";';
  var funcEnd = 'if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);}())';

  var LessPluginAutoPrefix = require( 'less-plugin-autoprefix' );
  var autoprefix = new LessPluginAutoPrefix( {
    browsers: [
      'last 2 versions'
    ]
  } );

  var LessPluginCleanCSS = require( 'less-plugin-clean-css' );
  var cleanCSSPlugin = new LessPluginCleanCSS( {
    advanced: true
  } );

  var inlineUrlsPlugin = require( 'less-plugin-inline-urls' );

  less.render( content, assign( {
    paths: [
      '.',
      path.dirname( file )
    ],
    compress: true
  }, {
    plugins: [
      autoprefix,
      cleanCSSPlugin,
      inlineUrlsPlugin
    ]
  } ), function ( e, output ) {
    if ( e ) {
      var msg = e.message;
      if ( e.line ) {
        msg += ', line ' + e.line;
      }
      if ( e.column ) {
        msg += ', column ' + e.column;
      }
      if ( e.extract ) {
        msg += ': "' + e.extract + '"';
      }
      console.log( msg, file, e.line );
      done( new Error( msg, file, e.line ) );
      return;
    }

    var compiled = output.css;

    /*eslint-disable*/
    compiled = funcStart + 'var css = "' + compiled.replace( /\\/g, '\\\\' ).replace( /'/g, '\\$&' ).replace( /"/g, '\\$&' ) + '";' + funcEnd;
    /*eslint-enable*/

    done( null, compiled );
  } );
};
