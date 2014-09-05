module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  // **lib module**
  //
  // this module include some utilities, like `lib.format`, `lib.isNullOrEmpty`, `lib.isNull`, `lib.extend`, etc
  var lib = require( 'grunt-ez-frontend/lib/lib.js' );

  gruntTaskUtils.registerTasks( {
    'check-kwl': {
      description: 'check if the version of KWL installed is the same as the one in the parameters.yml',
      multiTask: function () {
        var me = this,
          done = me.async(),
          kwlDistPkgFile = me.data.kwlDistPkgFile,
          kwlDistPkg = {};

        if ( kwlDistPkgFile && grunt.file.exists( kwlDistPkgFile )) {

          kwlDistPkg = grunt.file.readJSON( kwlDistPkgFile );
        }

        var parameters = grunt.file.readYAML( me.data.parametersYAML ) || {};
        parameters = parameters.parameters || {};

        var assets = parameters.assets || {},
          kwl = assets.kwl || {},
          desiredVersion = lib.trim( kwl.version );

        //grunt.log.writeln('version... ' + version);

        var currentVersion = lib.trim( kwlDistPkg.version );
        if ( currentVersion !== desiredVersion ) {

          grunt.log.writeln( lib.format( 'kwl must be updated... current version: {0}, desired version: {1}', currentVersion, desiredVersion ));

          var exec = require( 'child_process' ).exec;
          grunt.log.writeln( 'updating KWL to ' + desiredVersion );

          var tarballLocation = lib.format( me.data.kwlTarballLocation, desiredVersion );

          grunt.log.writeln( lib.format( 'pulling from {0}', tarballLocation ));

          var cmds = 'rm -rfv node_modules/kwl-dist\n\
            npm i --save-dev ' + tarballLocation;

          exec( cmds, function ( err, stdout, stderr ) {
            if ( err ) {
              grunt.warn( JSON.stringify( err, null, 2 ));
              //grunt.log.writeln(stderr);
              done( false );
            }
            grunt.log.ok( 'KWL has been updated' );
            done();
          } );
          return;
        }
        grunt.log.ok( 'No need to update KWL. Current version: ' + currentVersion );
        done();
      }
    }
  } );
};
