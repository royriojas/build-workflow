# Build Workflow

Simple helper to create grunt build workflows that are easy to configure and use. 

## what is it?

This is a simple module that aims to make simpler to create workflows based on grunt. This module helps you break 
a grunt file in several modules that are easier to maintain and to reason about. 

This module is inspired by this blog post [supercharging your gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)

The main differences are:

- config files exports a function that return an object. All the config objects receive the `grunt` object, the `pkg` object and `options` object.
  The options object contains a `commonConfig` object that can be used to share some config info between task configurations,
  and also exports the `gruntTaskUtils` module from `grunt-ez-frontend` a module that exports a registerTasks methods that allows you to register
  both tasks and multiTasks by passing an object instead of using two different methods.

- allows load custom grunt tasks.
- do not use yaml, so the aliases should be defined in javascript
- provide some base common tasks described below

So, This module will 

- help you break your gigantic grunt file
- provide some (optional) base tasks and tasks configurations like: 
  - **changelog**: Create a changelog from the git log info. For more info check the changelog section.
  - **check-valid**: Beautify (with `jsbeautify`) and validate the javascript files with `jshint`, `jscs` and `jsvalidate`.
  - **install-hooks**: Install `commit-msg` and `prepush` hooks for git. To enforce the rules for commit messages
    and to verify all files configured to be beautified and validated are checked before pushing.
  - **prepush**: the tasks that the prepush hook runs before any push is made.
  - **i18n-from-yml**: Generate `i18n.{lang}.js` files from yml translations files. (this is actually inside grunt-ez-frontend)
  - **i18n-to-ez-frontend**: create an `ez-frontend` task for each `i18n.{lang}.js` file to make each of them be 
    minified, had the right version and include the banner header.  
  - **run-i18n-targets**: execute all the `ez-frontend` targets created by the previous task.
  - **css-font**: a custom task to create the css and less mixins for a font from the `selection.json` 
    file obtained from the [icomoon app](https://icomoon.io/app/#/select)
  - **target, js-target, css-target**: tasks to run `ez-frontend` targets.
  - **validate-files**: a custom task to validate files passed as parameters. Useful to beautify the code from within an IDE.

## Usage

### install the dependencies

```sh
npm i -D grunt build-workflow time-grunt matchdep grunt-ez-frontend es6-promise
```

by default **loading the custom base tasks in this package is true** so you will need also the following dependencies
 
#### To enable changelog
```sh
npm i -D moment dot marked
```

#### To enable check-valid

```sh
# install the check-valid tasks
npm i -D grunt-contrib-jshint grunt-jscs grunt-jsvalidate https://github.com/royriojas/grunt-jsbeautifier/tarball/e69f6ef

# optional to enable a nice reporter that group errors per file
npm i -D jshint-stylish

# optional install grunt-codepainter
npm i -D grunt-codepainter
```

#### To enable generation of documentation with docco-husky and yuidoc

```sh
# enable grunt-exec tasks
npm i -D grunt-exec

# docco-husky-plus
npm i -D docco-husky-plus

# yuidoc
npm i -D yuidoc-theme-blue https://github.com/royriojas/yuidoc/tarball/ed6e335
```
 
### Create a Gruntfile (or replace the one you have with)

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

### Create the following structure:

```
+-- grunt-deps/
    +--configs/
    +--tasks/
    +--workflows/
    |--common-config.js
```

#### grunt-deps 

Contains the folders for custom `tasks`, `configs`, `workflows` and `common-config.js`


#### file common format

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

#### configs

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


