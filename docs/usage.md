# Usage

## install the module and its dependencies

```sh
npm i -D grunt build-workflow time-grunt matchdep grunt-ez-frontend
```

by default **loading the custom base tasks in this package is true** so you will need also the following dependencies
 
### To enable changelog
```sh
npm i -D moment dot marked es6-promise
```

### To enable check-valid

```sh
# install the check-valid tasks
npm i -D grunt-newer grunt-contrib-jshint grunt-jscs grunt-jsvalidate https://github.com/royriojas/grunt-jsbeautifier/tarball/e69f6ef

# optional to enable a nice reporter that group errors per file
npm i -D jshint-stylish

# optional install grunt-codepainter
npm i -D grunt-codepainter
```

### To enable generation of documentation with docco-husky and yuidoc

```sh
# enable grunt-exec tasks
npm i -D grunt-exec

# docco-husky-plus
npm i -D docco-husky-plus

# yuidoc
npm i -D yuidoc-theme-blue https://github.com/royriojas/yuidoc/tarball/ed6e335
```

### ez-frontend dependencies

```sh
npm i -D grunt-contrib-uglify grunt-csso  grunt-autoprefixer grunt-jscs
```
 
## Create a Gruntfile (or replace the one you have with)

```javascript
module.exports = function ( grunt ) {
  'use strict';

  // load the config-loader function and pass the grunt object
  require( 'build-workflow' )( grunt, {
    // uncomment this line to load the base tasks
    // loadBaseTasksAndConfigs : false
  } );
};
```

## Create the following structure:

```
+-- grunt-deps/
    +--configs/
    +--tasks/
    +--workflows/
    |--common-config.js
```

### grunt-deps 

Contains the folders for custom `tasks`, `configs`, `workflows` and `common-config.js`


### file common format

`configs`, `tasks` and `workflows` files should exports a function. The function will look like the following: 

```javascript
/**
* @param grunt {Object} the grunt object
* @param pkg {Object} the package json object for the current project
* @param opts {Object} the options object
* @param opts.commonConfig {Object} the result of calling the exported function from `common-config.js`
* @param opts.gruntTaskUtils {Object} the gruntTasksUtils module from `grunt-ez-frontend`
*/
module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaskUtils = opts.gruntTaskUtils;

  // configs files should return an object with the configuration to be set
  // tasks and workflows do not need to do this
  return {};
};
```

### configs

This folder will contain the tasks configurations. 

As an example below is the configuration for the changelog tasks.

```javascript
//
// file changelog.js
//
module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    'changelog': {
      dest: './report/changelog/changelog.html',
      options: {
        'gitUrlForCommit': 'https://github.com/royriojas/build-workflow/commit/{0}',
        'gitAuthorUrl': 'https://github.com/{0}',
        'urlForBugId': 'https://github.com/royriojas/build-workflow/issues/{0}'
      }
    }
  };
};
```

Grunt configs are set on the config object in grunt, but this could easily become unmanageable, so this module
will look for the tasks configs inside the `configs` folder, execute the exported function and set the value of 
the config in the `grunt.config` object. If the base tasks were loaded the configurations described here will 
override the base ones.

### common-config.js file

A `common-config.js` file looks like the one below

```javascript
module.exports = function ( grunt, pkg ) {

  var prepushFiles = [
    '**/*.js',
    '!resources/hooks/*.js',
    '!node_modules/**/*.*',
    '!documentation/**/*.js',
    '!apidocs/**/*.js'
  ];

  var sourcesForDocs = [
    'Gruntfile.js',
    'tasks/',
    'configs/',
    'grunt-deps/',
    'test-helpers/',
    'utils/',
    './*.js'
  ];

  return {
    
    // this files are going to generate annotated docs using docco-husky-plus
    // for docco to work properly the package json also need to have some configuration
    // values. TODO: move the docco-husky config to this file too.
    // the `package.json` values to add are
    //
    // "docco_husky": {
    //    // do not add `./` at the beginning or a `/` at the end. Docco is kinda picky 
    //    "content_dir": "docs", 
    //    "output_dir": "documentation",
    //    "project_name": "Build Workflow",
    //    "show_timestamp": true
    //  }
    //
    // to execute the documentation task run
    // grunt exec:docs
    'docco_husky': {
      'sources': sourcesForDocs
    },

    // this section controls the generation of the apidocs
    // you can provide a custom configuration object for yuidoc
    // or use the default one configured to use yuidoc-theme-blue
    // the documentation files can be specified using the files property
    "yuidoc": {
      //"config": "./grunt-deps/yuidoc/yuidoc.json",
      files: sourcesForDocs
    },

    // by default the prepush task is executed by the prepush hook, if installed
    // the default prepush task will only execute the tasks under the filesToValidate
    // section. If other tasks are required to be executed during the 
    // prepush you can specify them here. i.e. if you want to make the prepush to also
    // validate the tests are run you can add karma:one (assuming you have configured that task)
    // this will execute the validation tasks and the karma:one and fail if the task fail
    // preventing the push of code with untested paths
    prepushTasks: [ 'karma:one' ],

    // filesToValidate specify the tasks that are going to be executed when 
    // running the `prepush` hook and `check-valid` task
    // to validate the files simply run `grunt check-valid`
    'filesToValidate': {
      'jsbeautifier': prepushFiles,
      'jscs': prepushFiles,
      'jshint': prepushFiles,
      'jsvalidate': prepushFiles,
      'codepainter': prepushFiles
    }
  };
};
```
