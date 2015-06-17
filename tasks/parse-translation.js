module.exports = function ( grunt ) {
  var path = require( 'path' );
  var extend = require( 'extend' );

  grunt.registerMultiTask( 'parse-translations', 'Create i18n files from the corresponding ymls using a given template file or a template string', function () {
    var gruntFile = grunt.file;
    var logger = require( '../utils/log' )( grunt );

    var me = this,
      data = me.data,
      ymlFiles = data.src,
      outputFolder = data.dest,
      files = gruntFile.expand( ymlFiles ),
      options = me.options( {
        template: '/**\n * This file is auto-generated. Please do not edit it.\n */\n(function ($, w) {\n  w.__i18n = (w.__i18n || {});\n  $.extend(true, w.__i18n, [[FILE_CONTENTS]]);\n}(jQuery, window));',
        templateFile: null,
        ignoreKeys: [
          'main'
        ],
        generateFileName: function ( fileName ) {
          return fileName.replace( 'messages', 'i18n' ) + '.js';
        }
      } ),

      template = options.template;

    if ( options.templateFile ) {
      template = gruntFile.read( options.templateFile );
    }

    var writeTransFile = function ( obj, nameOfOutputFile ) {
      var outputFile = template.replace( '[[FILE_CONTENTS]]', JSON.stringify( obj, null, 2 ) );
      logger.subtle( 'Writing file: ' + path.resolve( nameOfOutputFile ) );
      gruntFile.write( nameOfOutputFile, outputFile );
    };

    files.map( function ( filepath ) {
      var fileName = path.basename( filepath, '.yml' ),
        messages = gruntFile.readYAML( filepath );//YAML.load(filepath);

      //messages = messages.main;
      var ignoredKeys = {};
      var defaultObject = {};
      var hasDefaultKeys = false;

      var oFile = options.generateFileName( fileName );

      options.ignoreKeys.forEach( function ( key ) {
        defaultObject = extend( true, defaultObject, messages[ key ] );
        if ( !hasDefaultKeys ) {
          hasDefaultKeys = !!messages[ key ];
        }
        ignoredKeys[ key ] = true;
      } );

      if ( hasDefaultKeys ) {
        var nameOfOutputFile = path.join( outputFolder, oFile );
        writeTransFile( defaultObject, nameOfOutputFile );
      }

      Object.keys( messages ).forEach( function ( key ) {
        if ( ignoredKeys[ key ] ) {
          return;
        }

        var nFile = path.join( outputFolder, key, oFile );
        writeTransFile( messages[ key ], nFile );
      } );

    } );

    logger.ok( 'translations parsed!' );
  } );
};
