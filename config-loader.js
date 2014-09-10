/**
 * @module build-workflow
 *
 * @class config-loader
 * @static
 **/

/**
 * Loads the now separated grunt configuration files
 *
 * @method config-loader
 **/
module.exports = function ( grunt, args ) {
  'use strict';

  var path = require( 'path' );

  // these are the **default options**
  var opts = {

    // ### loadBaseTasksAndConfigs
    // if the base tasks included in this repo should be loaded
    // base tasks are:
    // - changelog
    // - check-valid
    // - create-pkg-json
    // - css-font
    // - install-hooks
    // - prepush task
    // - run-i18n-targets
    // - validate-file
    loadBaseTasksAndConfigs: true,

    // ### appPkgJSONPath
    // the path to the package.json file
    appPkgJSONPath: './package.json',

    // ### gruntFileDirectory
    // the directory where the grunt file lives
    gruntFileDirectory: process.cwd(),

    // ### customTasks
    // the path to the local custom tasks for this grunt file
    // The default configuration assumes the local tasks definitions
    // are inside a folder called `grunt-deps/tasks`.
    //
    // Each task must be stored in a single file, the name of the task
    // should match the name of the file.
    customTasks: './grunt-deps/tasks/**/*.js',

    // ### taskConfigs
    // the place where the local tasks configurations live
    // the name of the file must correspond to the name of the task.
    // i.e. the task `grunt-jshint` will require a file called `jshint.js`
    // to configure it.
    taskConfigs: './grunt-deps/configs/**/*.js',

    // ### workflows
    // These folder contains the aliases, aliases can be defined in several files
    // one for `build` other for `dev`. Usually only one file is required.
    // That file is usually called `aliases.js`
    workflows: './grunt-deps/workflows/**/*.js',

    // ### common-config
    // This is a file that contains the common configuration for:
    // - docco-husky
    // - yuidoc
    // - filesToValidate (which are used by the check-valid and prepush tasks)
    commonConfig: './grunt-deps/common-config.js',

    // ### filterDevOnly
    // should only load the `grunt-*` tasks from the `devDependencies`
    filterDevOnly: true
  };

  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var gruntTaskUtils = require( 'grunt-ez-frontend/lib/grunt-task-utils.js' )( grunt );

  // only enable the reporting option if the flag `report-time` is passed when called
  // grunt. Example: `grunt --report-time`.
  //
  // This will require you to install `time-grunt` which can be done running
  //
  // ```javascript
  // npm i -D time-grunt
  // ```
  if ( grunt.option( 'report-time' )) {
    // **Enable time-grunt**
    //
    // In order to have a nice report of the time consumed by each task.
    // This will generate a report with a nice bar chart in the console after all grunt task finished to execute
    require( 'time-grunt' )( grunt );
  }

  lib.extend( opts, args );

  var filterMethod = opts.filterDevOnly ? 'filterDev' : 'filterAll';

  // the base path relative to the location of this file
  // when called from within the gruntfile.js
  var basePath = opts.gruntFileDirectory;

  // ### Auto load grunt tasks
  // load all the grunt-tasks from the package.json dependencies sections. This is handy because
  // it is not longer required to register a task calling `grunt.loadNmpTasks('grunt-name-of-task');`
  var gruntDeps = require( 'matchdep' )[ filterMethod ]( 'grunt-*', path.join( basePath, opts.appPkgJSONPath ));
  gruntDeps.forEach( grunt.loadNpmTasks );

  grunt.verbose.writeln( 'cfg-ldr: basePath', basePath );

  if ( !basePath ) {
    grunt.fail.warn( 'We need you to provide the gruntFileFolder path for the build-worflow to work correctly' );
  }

  var file = opts.appPkgJSONPath;

  // ### load the commonConfig module.
  // The common config module has the configuration values for
  // - docco-husky
  // - yuidoc
  // - check-valid. Which includes
  //   - jshint
  //   - jsvalidate
  //   - jscs
  //   - jsbeautifier
  //   - codepainter (optional)
  var commonConfig = require( './load-common-config' )( grunt, opts );

  // ### the build number
  // the build number is set passing the `--build-number` flag to grunt. if this flag is not used. the version
  // number will be replaced by `dev`
  //
  // Running:
  //
  // ```javascript
  // grunt --build-number=1.5.2.5
  // ```
  // will override the value of the pkg.version and will be used by all the other tasks
  // like `changelog`, `ez-frontend`, `yuidoc` and `docco-husky`
  var pkg = grunt.file.readJSON( file );
  var optionBuildNumber = grunt.option( 'build-number' ) || 'dev';

  // just in case make sure the `grunt.option` is set so if from other configuration files
  // this options is used will have the right value
  pkg.version = optionBuildNumber || pkg.version;
  grunt.option( 'build-number', pkg.version );

  // helper options are a set of arguments that are going to be passed to all the `base tasks` and `local tasks` definitions
  var helperOptions = {
    gruntTaskUtils: gruntTaskUtils,
    commonConfig: commonConfig
  };

  // base tasks will only be loaded if the flag `opts.loadBaseTasksAndConfigs` is set to true.
  opts.loadBaseTasksAndConfigs && require( './load-base-tasks' )( grunt, opts, pkg, helperOptions );

  grunt.initConfig( {
    // grunt files set the pkg object to be used in the expanded templates.
    pkg: pkg
  } );

  // base configurations for tasks will be loaded only if the flag `opts.loadBaseTasksAndConfigs` is set to true.
  var baseConfigs = opts.loadBaseTasksAndConfigs ? require( './load-base-tasks-configs' )( grunt, opts, pkg, helperOptions ) : {};

  // load custom tasks in the `opts.customTasks` path
  require( './load-tasks' )( grunt, opts, pkg, helperOptions );

  // load the tasks configs from `opts.taskConfigs` path
  require( './load-tasks-configs' )( grunt, opts, pkg, helperOptions, baseConfigs );

  // load the workflows (aliases) from the `opts.workflows` path
  var workflows = grunt.file.expand( path.join( basePath, opts.workflows ));
  workflows.forEach(function ( entry ) {
    require( entry )( grunt, pkg, helperOptions );
  } );
};
