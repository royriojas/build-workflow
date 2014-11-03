# Build Workflow

Simple helper to create grunt build workflows that are easy to configure and use. 

## what is it?

This is a simple module that aims to make simpler to create workflows based on grunt. This module helps you break 
a grunt file in several modules that are easier to maintain and to reason about. 

This module is inspired by this blog post [supercharging your gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)

The main differences are:

- config files exports a function that return an object. All the config objects receive the `grunt` object, the `pkg` object and `options` object.
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
  - **twig**: a simple twig template renderer

__TODO: at some point all this tasks should be moved to their own repos in order to leave `build-workflow` a simple grunt 
management module__
  
## Usage

[check usage here](docs/usage.md) 
