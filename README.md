# Build Workflow

Simple helper to create **build workflows**, using grunt, that are both easy to use and maintain. 

## Overview

This is a small module that aims to simplify the creation of workflows based on grunt. In order to achieve this
some conventions are followed, i.e. do not use a gigantic `Gruntfile.js` that is soon harder to maintain, preventing
a lot of spaghetti code by breaking it into different modules, one per each grunt task config, keeping things small
and focused.

This module is inspired by this blog post [supercharging your gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)

The main differences are:

- **config files** always export a function that return an object. All the config exported functions receive 
  the `grunt` object, the `pkg`, `package.json` parsed object, and an `options` object, which has some helpers 
  that will be described later.
- Custom grunt tasks can be placed inside the `grunt-deps/tasks` folder they will be loaded automatically.
- It does not use `yaml`, so the aliases for tasks are defined in javascript. This is to keep it simple and avoid 
  leaving the javascript realm.
- provide some base common tasks configs, described in the next section.

So, This module will 

- help you break your gigantic grunt file into small modules that are easy to reason about.
- provide some (optional) **base tasks** and **tasks configurations** like: 
  - **changelog**: Create a changelog from the git log info. For more info check the changelog section.
  - **check-valid**: Beautify (with `esbeautifier`) and validate the javascript files with `eslint` and `jscs`.
  - **install-hooks**: Install `commit-msg` and `prepush` hooks for git. To enforce the rules for commit messages
    and to verify all files configured to be beautified and validated are checked before pushing.
  - **prepush**: the tasks that the prepush hook runs before any push is made.
  - **i18n-from-yml**: Generate `i18n.{lang}.js` files from yml translations files. (this is actually done using grunt-ez-frontend)
  - **i18n-to-ez-frontend**: create an `ez-frontend` task for each `i18n.{lang}.js` file to make each of them be 
    minified, had the right version and include the banner header.  
  - **run-i18n-targets**: execute all the `ez-frontend` targets created by the previous task.
  - **css-font**: a custom task to create the css and less mixins for a font from the `selection.json` 
    file obtained from the [icomoon app](https://icomoon.io/app/#/select)
  - **target, js-target, css-target**: tasks to run `ez-frontend` targets.
  - **validate-files**: a custom task to validate files passed as parameters. Useful to beautify the code from within an IDE.
  - **twig**: a simple twig template renderer

__TODO: at some point all this tasks should be moved to their own repos in order to leave `build-workflow` a simple grunt 
management module__

**Update**: While grunt is a nice task runner, I lately found myself using it not that much. Lately I tried to make most
of the tasks found inside this module separated packages that can be used from within the command line. This new approach
has several new advantages, and modules can be used from any task runner.

TODO: List which modules should be used instead of the ones provided by this package.
  
## Usage

For usage info please [read this document](docs/usage.md) 

## Grunt configs/tasks provided by this package

For info about the common configs and tasks please [check this document](docs/grunt.md)

## Changelog

Read it [here](changelog.md)