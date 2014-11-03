module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var path = require( 'path' );

  return {
    // ## exec:docs
    // Generate the documentation for this project using
    // a modified version of `docco-husky`
    //
    // Call it executing `grunt exec:docs` or `grunt exec:docs:[fileOrFolder]
    //
    // if a file is passed when calling `grunt exec:docs:[fileOrFolder]`
    // then the documentation will be generated only for this file.
    //    docs: {
    //      command: function ( file ) {
    //        var doccoHusky = commonConfig.docco_husky || {};
    //        var filesOrFolders = doccoHusky.sources || [];
    //
    //        if ( file ) {
    //          filesOrFolders = [ file ];
    //        }
    //
    //        if ( filesOrFolders.length === 0 ) {
    //          grunt.fail.warn( 'No files to process' );
    //        }
    //
    //        return lib.format( 'node_modules/docco-husky-plus/bin/generate {0}', filesOrFolders.join( ' ' ));
    //      }
    //    },

    // ## exec:phptests
    // Run the php unit tests
    //
    // call it executing `grunt exec:phptests` or `grunt exec:phptests:[fileOrFolder]`
    //
    // if a file or folder is given, then the tests will be executed using only that file
    // if not it will run all the unit tests iniside the folder `bundles/Kno/AppBundle/Tests`
    phptests: {
      command: function ( file ) {

        //var cmd = ' sf/app/ --coverage-text';
        //var cmd = 'sf/vendor/phpunit/phpunit/phpunit --coverage-html report/php -c sf/app';
        var cmd = 'sf/vendor/phpunit/phpunit/phpunit --coverage-text -c sf/app';

        if ( !file ) {
          file = 'bundles/Kno/AppBundle/Tests';
        }

        cmd += ' ' + file;

        return cmd;
      },
      callback: function ( error, stdin, stderr ) {
        // grunt.log.writeln( stdout );
        if ( error ) {
          grunt.log.error( 'One or more PHP tests have failed.' );
          grunt.fail.fatal( error );
          return;
        }

        var exp = /(Lines:|Classes:|Methods:)(\s){1,3}([0-9]){1,3}.([0]){1,2}([%])/g,
          t = stdin.match( exp ),
          expected = 100;

        if ( !t || t.length === 0 ) {
          grunt.fail.fatal( '\nError encountered while executed PHP Tests. No coverage data generated\n' );
        }

        for ( var i = 0; i < 3; i++ ) {
          var condition = t[ i ].replace( /\s+/g, '' ),
            covered = condition.split( ':' ),
            actual = parseInt( covered[ 1 ] );

          if ( actual < expected ) {
            grunt.fail.fatal( lib.format( '\nPHP Code coverage was below the required threshold of {0}%\n', expected ));
          }
        }

      }
    }
    //    // ## exec:codepainter
    //    // Codepainter is a utility similar to jsbeautifier it format the code to
    //    // follow a given set of styles. It is similar to jsbeautifier. It actually
    //    // complements it, since we're using it to make sure we always use single
    //    // quotes in our strings in javascript.
    //    //
    //    // Call it executing `grunt exec:codepainter` or `grunt exec:codepainter:glob`
    //    //
    //    // The first call beautify all the source files, by application group
    //    // to avoid an issue with opening too many file descriptors. The second one will
    //    // beautify all the files that match the passed glob only.
    //    //
    //    // **Note**:
    //    //
    //    // a glob is a string that represent a set of files or directories
    //    // something like: `some/path/**/*.js` which will match all files inside some path that
    //    // have the js extension.
    //    codepainter: {
    //      command: function ( glob ) {
    //        var codepainterJSON = path.resolve( __dirname, '../resources/json-configs/codepainter.json' );
    //        if ( glob ) {
    //          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
    //            codepainterJSON, glob );
    //        }
    //
    //        // ** sourceFilesGlobs**
    //        //
    //        // globs to point to all the source files in this project
    //        var codepainter = commonConfig.codepainter || {};
    //        var sourceFilesGlobs = grunt.file.expand( codepainter.sources );
    //
    //        return sourceFilesGlobs.map(function ( glob ) {
    //          return lib.format( 'node_modules/codepainter/bin/codepaint xform -j {0} "{1}"',
    //            codepainterJSON, glob );
    //        } ).join( ' && ' );
    //      }
    //    },

    //    yuidoc: {
    //      command: function ( glob ) {
    //
    //        var server = glob === 'server';
    //
    //        var yuidoc = commonConfig.yuidoc || {};
    //        var pathToConfig = yuidoc.config || path.resolve( __dirname, '../resources/json-configs/yuidoc.json' );
    //        var projectName = pkg.name;
    //        var projectVersion = pkg.version;
    //
    //        var files = yuidoc.files || [];
    //
    //        if ( files.length === 0 ) {
    //          grunt.fail.warn( 'No files provided. please add them to your common-config.js file to the yuidoc.files property' );
    //        }
    //
    //        var cmd = lib.format( 'node_modules/yuidocjs/lib/cli.js {0} -c {1} --project-name {2} --project-version {3} {4}', files.join( ' ' ), pathToConfig, projectName, projectVersion, server ? '--server' : '' );
    //        grunt.verbose.writeln( cmd );
    //        return cmd;
    //      }
    //    }
    //    protractor: {
    //      command: function () {
    //        var commands = [];
    //        if ( !grunt.file.exists( './node_modules/protractor/' )) {
    //          commands.push( 'npm i protractor' );
    //        }
    //        if ( !grunt.file.exists( './node_modules/protractor/selenium/' )) {
    //          commands.push( './node_modules/protractor/bin/webdriver-manager update' );
    //        }
    //
    //        var protractor = commonConfig.protractor || {};
    //        var pathToProtractorConfig = protractor.config;
    //
    //        if ( !pathToProtractorConfig ) {
    //          grunt.fail.warn( 'Missing protractor config file: ', pathToProtractorConfig );
    //        }
    //
    //        commands.push( lib.format( './node_modules/protractor/bin/protractor {0}', pathToProtractorConfig ));
    //
    //        var cmd = commands.join( '\n' );
    //        grunt.verbose.writeln( cmd );
    //        return cmd;
    //      }
    //    }
  };
};
