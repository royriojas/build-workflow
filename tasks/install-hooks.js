module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;
  var path = require( 'path' );

  gruntTaskUtils.registerTasks( {
    'install-hooks': {
      description: 'install the hooks into the git subdirectory',
      multiTask: function () {

        var me = this;
        var gruntWorkingDirectory = process.cwd();

        var data = me.data || {};

        var prepushHookConfig = {
          pathToSource: path.resolve( gruntWorkingDirectory ),
          commitTitleMaxLength: data.commitTitleMaxLength || 140
        };

        var hooksSourceDirectory = path.resolve( __dirname, '../resources/hooks/' );

        var hooks = grunt.file.expand( path.join( hooksSourceDirectory, '*.js' ) );
        var gitHooksDir = data.gitHooksDirectory;

        hooks.forEach( function ( file ) {
          var destName = path.basename( file, '.js' );
          var targetLocation = path.resolve( gitHooksDir, destName );
          try {
            grunt.file.delete( targetLocation, {
              force: true
            } );
          } catch (ex) {}

          grunt.file.copy( file, targetLocation, {
            encoding: null,
            noProcess: true
          } );

          var fs = require( 'fs' );

          fs.chmodSync( targetLocation, '755' );

          grunt.log.ok( 'Copy file from ', file, ' to ', targetLocation );
        } );

        var libs = grunt.file.expand( path.join( hooksSourceDirectory, 'lib/**/*.*' ) );
        libs.forEach( function ( file ) {
          var destName = path.basename( file );
          var targetLocation = path.resolve( gitHooksDir + '/lib/', destName );
          try {
            grunt.file.delete( targetLocation, {
              force: true
            } );
          } catch (ex) {}

          grunt.file.copy( file, targetLocation, {
            encoding: null,
            noProcess: true
          } );

          grunt.log.ok( 'Copy file from ', file, ' to ', targetLocation );
        } );

        grunt.file.write( path.resolve( gitHooksDir + '/lib/hooks-cfg.json' ), JSON.stringify( prepushHookConfig ) );

      }
    }
  } );
};
