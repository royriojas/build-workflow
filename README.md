**IMPORTANT**

If I have to start again, I will probably not choose any build tool but directly embrace the *npm as build tool** trend. *Grunt* has 
indeed helped me a lot, there are lot of plugins available, it is easy to configure, but it can get really messy for a fairly complex
build workflow. And that's the same with *gulp* or all the other build tools out there. 

I still have some fairly complex web projects that use **grunt** and this module is still great to help me organize them.

For more info on how to use npm as a build tool check:

- [task automation with npm](http://substack.net/task_automation_with_npm_run)
- [npm as a build tool](http://ponyfoo.com/articles/choose-grunt-gulp-or-npm)

# Build Workflow

A module that helps to break a gigantic `Gruntfile` into smaller modules that are easy to manage and reason about.
It also provide some tasks, helpers and utilities for common tasks

## Overview

This module aims to simplify the creation of workflows based on grunt, I know gulp is better :) or webpack or (`insert better tool here`)
Since some of the projects I'm working right now are still using **grunt**, I wanted to have a better way to manage the build
workflows.

This module is inspired by this blog post [supercharging your gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)

The main differences are:

- **config files** always export a function that return an object. All the config exported functions receive 
  the `grunt` object, the `pkg`, `package.json` parsed object
- Custom grunt tasks can be placed inside the `grunt-deps/tasks` folder they will be loaded automatically.
- It does not use `yaml`, so the aliases for tasks are defined in javascript. This is to keep it simple and avoid 
  leaving the javascript realm.
- provide some base common tasks and tasks configs. TODO: They should moved to their own repo and even better decouple them from grunt
  so they can be used as cli tools 

So, This module will 

- help you break your gigantic grunt file into small modules that are easy to reason about.
- provide some (optional) **base tasks** and **tasks configurations** like:
  - **bundler:** A wrapper around watchify to provide faster builds using a cache that could be persisted instead of only use the watch mode
    This enables you to run the build tasks once and again even without the watch mode and only process the changed files.
  - **simpless:** Another wrapper around 
  - **check-valid**: Beautify (with `esbeautifier`) and validate the javascript files with `eslint` and `jscs`. I have
    also make cli tools for [beautify](https://www.npmjs.com/package/esbeautifier) and [eslinter](https://www.npmjs.com/package/eslinter)
    you can use them directly if you don't want/plan to use grunt for that
  - **prepush**: the tasks that the prepush hook runs before any push is made, `grunt prepush` will run the same as `check-valid` but will not beautify
    the files automatically, will just fail if files are not beautified or fail the check
  - **parse-translations**: Generate `i18n.{lang}.js` files from Symfony yml translations files.
  - **css-font**: a custom task to create the css and less mixins for a font from the `selection.json` 
    file obtained from a font exported from [icomoon app](https://icomoon.io/app/#/select)
  - **validate-file**: a custom task to validate files passed as parameters. Useful to beautify the code from within an IDE.
  - **twig**: a simple twig template renderer

## Changelog

Read it [here](changelog.md)