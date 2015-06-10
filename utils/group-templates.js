var extend = require( 'extend' );
var dispatchy = require( 'dispatchy' );

module.exports = {
  create: function () {
    return extend( dispatchy.create(), {
      compile: function ( sourceFiles, options ) {

        var me = this;

        var read = require( 'read-file' ).readFileSync;
        var format = require( 'stringformat' );
        var path = require( 'path' );
        var doT = require( 'dot' );

        var opts = {
          ext: '.doT',
          template: '(function (window) { \n  var ns = function (ns, root) {\n    if (!ns) {\n      return null;\n    }\n    var nsParts = ns.split(".");\n    var innerRoot = root || window;\n    for (var i = 0, len = nsParts.length; i < len; i++) {\n      if (typeof innerRoot[nsParts[i]] === "undefined") {\n        innerRoot[nsParts[i]] = {};\n      }\n      innerRoot = innerRoot[nsParts[i]];\n    }\n    return innerRoot;\n  };\n  \n  //[[CONTENT]]\n  \n}(window));',
          templateFile: null,
          objNamespace: '__dotTemplates',
          normalizeName: function ( filename ) {
            var t = /-(.)/g;
            return filename.replace( t, function ( a, b ) {
              return b.toUpperCase();
            } );
          }
        };

        extend( opts, options );

        if ( opts.templateFile ) {
          opts.template = read( opts.templateFile );
        }

        var tplContent = format( 'var obj = ns("{0}");\n', opts.objNamespace );

        sourceFiles.forEach( function ( ele ) {
          var fileName = path.basename( ele, opts.ext );
          //log.writeln( 'compiling template : ' + fileName );
          me.fire( 'before:compile', {
            templateFile: fileName
          } );

          var content = read( ele );

          try {
            var templateFn = doT.compile( content );
            var name = opts.normalizeName( fileName );

            tplContent += format( 'obj["{0}"] = {1};\n', name, templateFn.toString().replace( 'function anonymous', 'function ' ) );

            me.fire( 'compile:template', {
              templateFile: ele,
              compiledName: name
            } );
          } catch (ex) {

            var message = format( '{0} failed : {1}', ele, ex.message );
            me.fire( 'compile:error', {
              message: message
            } );
          }
        } );

        return opts.template.replace( '//[[CONTENT]]', tplContent );
      }
    } );
  }
};
