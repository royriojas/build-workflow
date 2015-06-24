var Twig = require( 'twig' );
var twig = Twig.twig;
var extend = require( 'extend' );

var registerExtensions = function ( options ) {
  var clsc = require( 'coalescy' );

  var revFile = function ( fileName, bNumber ) {
    var rgex = /(.+)\.(\w+)$/gi;
    return fileName.replace( rgex, '$1.' + bNumber + '.$2' );
  };

  var getMinName = function ( fileName ) {
    var rgex = /(.+)\.(\w+)$/gi;
    return fileName.replace( rgex, '$1.min.$2' );
  };

  Twig.extendFilter( 'processResource', function ( value, args ) {
    args = args || [ ];

    var addVersion = clsc( args[ 0 ], true );
    value = addVersion ? revFile( value, options.rev ) : value;

    var useMin = options.useMin;
    value = useMin ? getMinName( value ) : value;

    return value;
  } );

  Twig.extend( function ( receivedTwig ) {
    receivedTwig.exports.extendTag( {
      type: 'markdown',
      regex: /^markdown$/,
      next: [
        'endmarkdown'
      ], // match the type of the end tag
      open: true,
      compile: function ( token ) {
        return token;
      },
      parse: function ( token, context, chain ) {
        var marked = require( 'marked' );
        var output = marked( token.output[ 0 ].value );

        return { chain: chain, output: output };
      }
    } );

    receivedTwig.exports.extendTag( {
      type: 'endmarkdown',
      regex: /^endmarkdown$/,
      next: [],
      open: false
    } );
  } );
};

var twiggy = {
  Twig: Twig,
  create: function ( options ) {

    var opts = { useMin: false, rev: '' };

    extend( opts, options );

    registerExtensions( opts );

    return {
      render: function ( file, args ) {
        return twig( { path: file, async: false } ).render( args );
      }
    };
  }
};

module.exports = twiggy;
