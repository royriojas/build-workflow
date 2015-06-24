module.exports = function ( grunt /*, pkg, options */ ) {
  'use strict';

  var gruntTaskUtils = require( '../utils/grunt-helper' )( grunt );
  var sFormat = require( 'stringformat' );
  var extend = require( 'extend' );

  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'css-font': {
      description: 'creates a css font css from the selection.json info file',
      multiTask: function () {

        var me = this;
        //var data = me.data || {};
        //var src = data.src;
        var files = me.files || [ ];

        var opts = me.options( {
          fontLessTemplate: 'grunt-deps/font.less.tpl',
          fontCodesTemplate: 'grunt-deps/font-codes.mixins.tpl', // the template for the less for this font
          fontsFolder: 'fonts', // the folder where the fonts are located
          processIconName: function ( name ) {
            return name;
          }
        } );

        files.forEach( function ( dataEntry ) {
          var src = dataEntry.src;
          if ( !src || src.length === 0 ) {
            grunt.log.ok( 'Nothing to process' );
            return;
          }

          var dest = dataEntry.dest;
          var mixinsDest = dest.replace( /\.less$/g, '.mixins.less' );
          var destDir = path.dirname( mixinsDest );
          var mixinsFile = path.basename( mixinsDest );

          src.forEach( function ( jsonFontDescriptor ) {

            var rawData = grunt.file.readJSON( jsonFontDescriptor );

            var prefix = rawData.preferences.fontPref.prefix;
            var fontData = {
              name: rawData.metadata.name,
              prefix: prefix,
              icons: rawData.icons.map( function ( icon ) {
                var name = icon.properties.name;
                var iconName = opts.processIconName( name );
                return {
                  name: iconName,
                  hexCode: '\\' + (icon.properties.code).toString( 16 ),
                  className: prefix + iconName
                };
              } )
            };

            var sourceFiles = path.join( path.dirname( src ), opts.fontsFolder, '**/*.*' );
            var filesToProcess = grunt.file.expand( sourceFiles );

            grunt.verbose.writeln( 'processing ', filesToProcess );

            filesToProcess.forEach( function ( entry ) {
              var baseName = path.basename( entry );

              // convert filename to lowercase to allow consistency
              var outputFileName = path.join( destDir, opts.fontsFolder, baseName.toLowerCase() );
              grunt.file.copy( entry, outputFileName );
              grunt.log.ok( 'File created: ' + outputFileName );
            } );

            //console.log(JSON.stringify(fontData, null, 2));

            var dot = require( 'dot' );

            // make dot do not remove the line breaks
            var compileOptions = { strip: false };

            // why dot why!!!!: dot don't use defaults, if a template setting is passed here it will
            // completely override the defaults, so we need to extend from the default options and override
            // the one we want to change!...
            // again... why dot why?
            var templateSettings = extend( { }, dot.templateSettings, compileOptions );
            var renderCodeFonts = dot.template( grunt.file.read( opts.fontCodesTemplate ), templateSettings );
            var renderFontsLess = dot.template( grunt.file.read( opts.fontLessTemplate ), templateSettings );

            var fData = { fontData: fontData, mixinsFile: mixinsFile };

            var mixinText = renderCodeFonts( fData );
            var lessText = renderFontsLess( fData );

            grunt.file.write( mixinsDest, mixinText );
            grunt.log.ok( 'Mixins File created: ' + mixinsDest );

            grunt.file.write( dest, lessText );
            grunt.log.ok( 'Less File created: ' + dest );

            var jsonCodesOutput = opts.jsonCodesOutput;
            if ( jsonCodesOutput ) {
              grunt.file.write( jsonCodesOutput, sFormat( 'var fontData = {0}', JSON.stringify( fontData, null, 2 ) ) );
              grunt.log.ok( 'JSON Metadata File created: ' + jsonCodesOutput );
            }
          } );

        } );
      }
    }
  } );
};
