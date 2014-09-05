module.exports = function ( grunt, args ) {
  'use strict';

  var path = require( 'path' );

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

  // **load all grunt tasks without specifying them by name**.
  //
  // This is handy because it is not longer required
  // to register a task calling grunt.loadNmpTasks('grunt-name-of-task');
  require( 'matchdep' )
    .filterDev( 'grunt-*' )
    .forEach( grunt.loadNpmTasks );

  // the base path relative to the location of this file
  // when called from within the gruntfile.js


  var opts = {

    appPkgJSONPath: './package.json',

    gruntFileDirectory: process.cwd(),

    // the path to the local custom tasks for this grunt file
    customTasks: './grunt-deps/tasks/**/*.js',

    // the place where the tasks configuration live
    taskConfigs: './grunt-deps/configs/**/*.js',

    // the tasks aliases for grunt, they actually enable the grunt workflows.
    workflows: './grunt-deps/workflows/**/*.js',

    //common-config
    commonConfig: './grunt-deps/common-config.js'
  };

  lib.extend(opts, args);

  var basePath = opts.gruntFileDirectory;

  grunt.verbose.writeln('cfg-ldr: basePath', basePath);

  if (!basePath) {
    grunt.fail.warn('We need you to provide the gruntFileFolder path for the build-worflow to work correctly');
  }

  var file = opts.appPkgJSONPath;

  var verbose = grunt.verbose;

  var commonConfig = {};

  try {
    commonConfig = require( path.join( basePath,  opts.commonConfig ))(grunt);
  }
  catch(ex) {
    verbose.writeln('Could not found commonConfig', opts.commonConfig);
  }

  var pkg = grunt.file.readJSON( file );

  var optionBuildNumber = grunt.option( 'build-number' ) || 'dev';
  pkg.version = optionBuildNumber || pkg.version;

  grunt.option( 'build-number', pkg.version );

  var helperOptions = {
    gruntTaskUtils: gruntTaskUtils,
    commonConfig: commonConfig
  };

  //console.log(helperOptions);

  var commonTasksPath = './tasks/**/*.js';

  var commonTasks = grunt.file.expand( path.join( __dirname, commonTasksPath ) );

  // Load the common Tasks definitions
  commonTasks.forEach(function (entry) {
    //console.log('loading common tasks', entry );
    require( entry )(grunt, pkg, helperOptions);
  });

  // Custom tasks for this project
  var customTasks = grunt.file.expand( opts.customTasks );

  // iterate over them and execute them
  customTasks.forEach(function ( entry ) {
    //console.log('loading custom tasks', entry );
    require( path.join( basePath, entry ))( grunt, pkg, helperOptions);
  } );

  var baseConfigs = {};

  var commonTasksConfigs = grunt.file.expand( path.join(__dirname, './configs/**/*.js'));

  commonTasksConfigs.forEach(function (entry) {
    var entryName = path.basename( entry, '.js' );
    baseConfigs[entryName] = require( entry ) (grunt, pkg, helperOptions);
  });

  //console.log(baseConfigs);

  // tasks configs
  var localConfig = grunt.file.expand( opts.taskConfigs );

  grunt.initConfig( {
    pkg: pkg
  } );


  // iterate over them and register them in the config
  localConfig.forEach(function ( entry ) {
    var entryName = path.basename( entry, '.js' );
    var baseConfig = baseConfigs[entryName] || {};

    var lConfig = require(path.join(basePath, entry))(grunt, pkg, {
      gruntTaskUtils: gruntTaskUtils,
      commonConfig: commonConfig
    });

    var outCfg = lib.extend(true, baseConfig, lConfig);
    grunt.config.set( entryName , outCfg );
  } );


  var workflows = grunt.file.expand( path.join(basePath, opts.workflows) );

  //console.log('workflows', workflows);

  workflows.forEach(function (entry) {
    require(entry)(grunt, pkg, helperOptions);
  });
};
