module.exports = function ( grunt, args ) {
  'use strict';

  var path = require( 'path' );

  var opts = {

    loadBaseTasksAndConfigs: true,

    appPkgJSONPath: './package.json',

    gruntFileDirectory: process.cwd(),

    // the path to the local custom tasks for this grunt file
    customTasks: './grunt-deps/tasks/**/*.js',

    // the place where the tasks configuration live
    taskConfigs: './grunt-deps/configs/**/*.js',

    // the tasks aliases for grunt, they actually enable the grunt workflows.
    workflows: './grunt-deps/workflows/**/*.js',

    //common-config
    commonConfig: './grunt-deps/common-config.js',
    filterDevOnly: true
  };

  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  // only enable the reporting option if the flag `report-time` is passed when called
  // grunt. Example: `grunt --report-time`
  if ( grunt.option( 'report-time' )) {
    // **Enable time-grunt**
    //
    // In order to have a nice report of the time consumed by each task.
    // This will generate a report with a nice bar chart in the console after all grunt task finished to execute
    require( 'time-grunt' )( grunt );
  }

  lib.extend( opts, args );

  var filterMethod = opts.filterDevOnly ? 'filterDev' : 'filterAll';

  // **load all grunt tasks without specifying them by name**.
  //
  // This is handy because it is not longer required
  // to register a task calling grunt.loadNmpTasks('grunt-name-of-task');
  var gruntDeps = require( 'matchdep' )[ filterMethod ]( 'grunt-*' );

  gruntDeps.forEach( grunt.loadNpmTasks );

  // the base path relative to the location of this file
  // when called from within the gruntfile.js
  var basePath = opts.gruntFileDirectory;

  grunt.verbose.writeln( 'cfg-ldr: basePath', basePath );

  if ( !basePath ) {
    grunt.fail.warn( 'We need you to provide the gruntFileFolder path for the build-worflow to work correctly' );
  }

  var file = opts.appPkgJSONPath;

  var verbose = grunt.verbose;

  var commonConfig = require( './load-common-config' )( grunt, opts );

  var pkg = grunt.file.readJSON( file );

  var optionBuildNumber = grunt.option( 'build-number' ) || 'dev';
  pkg.version = optionBuildNumber || pkg.version;

  grunt.option( 'build-number', pkg.version );

  var helperOptions = {
    gruntTaskUtils: gruntTaskUtils,
    commonConfig: commonConfig
  };

  //console.log(helperOptions);
  opts.loadBaseTasksAndConfigs && require( './load-base-tasks' )( grunt, opts, pkg, helperOptions );

  grunt.initConfig( {
    pkg: pkg
  } );

  var baseConfigs = opts.loadBaseTasksAndConfigs ? require( './load-base-tasks-configs' )( grunt, opts, pkg, helperOptions ) : {};

  require( './load-tasks' )( grunt, opts, pkg, helperOptions );

  require( './load-tasks-configs' )( grunt, opts, pkg, helperOptions, baseConfigs );

  // load the workflows
  var workflows = grunt.file.expand( path.join( basePath, opts.workflows ));
  workflows.forEach(function ( entry ) {
    require( entry )( grunt, pkg, helperOptions );
  } );

  //grunt.file.write('./config.json', JSON.stringify(grunt.config.get(), null, 2));
};
