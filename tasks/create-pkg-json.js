module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var path = require( 'path' );
  var gruntFile = grunt.file;
  // region ## Grunt Tasks Definitions
  // This object defines the tasks to be registered in grunt.
  var gruntTasks = {
    // this task creates the package.json used to create the npm package for distribution
    'create-pkg-json': {
      description: 'create the package.json with the given info for distribution',
      multiTask: function () {
        var me = this;
        var data = me.data;
        var thePackage = {
          name: data.name,
          version: data.version
        };

        data.main && ( thePackage.main = data.main );

        var outputPath = data.dest;

        gruntFile.write( outputPath, JSON.stringify( thePackage, null, 2 ));

        grunt.log.ok( 'Created package.json for distribution: ' + outputPath );
      }
    }
  };

  // finally register all those tasks above mentioned!
  gruntTaskUtils.registerTasks( gruntTasks );
};
