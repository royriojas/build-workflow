module.exports = function ( grunt /*, pkg, options*/ ) {
  'use strict';

  return {
    'protractor-prepare': {
      command: function () {
        var commands = [];
        if ( !grunt.file.exists( './node_modules/protractor/' ) ) {
          commands.push( 'npm i protractor' );
        }
        if ( !grunt.file.exists( './node_modules/protractor/selenium/' ) ) {
          commands.push( './node_modules/protractor/bin/webdriver-manager update' );
        }

        var cmd = commands.join( '\n' );
        grunt.verbose.writeln( cmd );
        return cmd;
      }
    }
  };
};
