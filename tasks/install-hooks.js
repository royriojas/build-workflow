module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var path = require( 'path' );

  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  gruntTaskUtils.registerTasks( {
    'install-hooks': {
      description: 'install the hooks into the git subdirectory',
      multiTask: function () {
        var me = this;
        var gruntWorkingDirectory = process.cwd();

        var prepushHookConfig = {
          pathToSource: path.resolve( gruntWorkingDirectory )
        };

        var hooksSourceDirectory = path.resolve( __dirname, '../resources/hooks/' );

        var hooks = grunt.file.expand( path.join( hooksSourceDirectory, '*.js' ));
        var gitHooksDir = me.data.gitHooksDirectory;

        hooks.forEach(function ( file ) {
          var destName = path.basename( file, '.js' );
          var targetLocation = path.resolve( gitHooksDir, destName );
          try {
            grunt.file.delete( targetLocation, {
              force: true
            } );
          } catch ( ex ) {

          }

          grunt.file.copy( file, targetLocation, {
            encoding: null,
            noProcess: true
          } );

          var fs = require( 'fs' );

          fs.chmodSync( targetLocation, '755' );

          grunt.log.ok( 'Copy file from ', file, ' to ', targetLocation );
        } );

        var libs = grunt.file.expand( path.join( hooksSourceDirectory, 'lib/**/*.*' ));
        libs.forEach(function ( file ) {
          var destName = path.basename( file );
          var targetLocation = path.resolve( gitHooksDir + '/lib/', destName );
          try {
            grunt.file.delete( targetLocation, {
              force: true
            } );
          } catch ( ex ) {

          }

          grunt.file.copy( file, targetLocation, {
            encoding: null,
            noProcess: true
          } );

          grunt.log.ok( 'Copy file from ', file, ' to ', targetLocation );
        } );

        grunt.file.write( path.resolve( gitHooksDir + '/lib/prepush-cfg.json' ), JSON.stringify( prepushHookConfig ));

      }
    }
  } );
};
