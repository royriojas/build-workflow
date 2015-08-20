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

## Usage

Create the following folder structure

```bash
your-project
|--grunt-deps/
|  |--configs/             # this will be directory where configs should live
|  |  |--task-name.js      # should correspond to the name of the task and should return an object.
|  |                       # The object will be set in the cfg as cfg[task-name].
|  |
|  |--tasks/               # place here custom tasks. These can be either multitasks or single tasks
|  |  |--custom-task.js    # that for whatever reason are only needed in the current project
|  |
|  |--workflows/
|     |--aliases.js        # use this file to define the sequence of your tasks.
|
|--Gruntfile.js            # the grunt
|--package.json            # your package.json
```

### Gruntfile

This is all the code required for your grunt file, because all the configuration sections have been moved to
the their own file.

```javascript
module.exports = function ( grunt ) {
  'use strict';
  require( 'build-workflow' )( grunt );
};
```

One of the benefits of this, is that navigating to a given task is super simple. Since each file has the name
of the task, navigating to it, using sublime or other IDE is super simple. In `Sublime Text` you only need to
type the name of the task to navigate directly to the file.

## Example: Using grunt babel with build-workflow

1.  Create the following folder structure:

    ```bash
    your-project
    |--grunt-deps
    |  |--configs
    |  |  |--babel.js // this will have your configuration for babel
    |  |--workflows
    |     |--aliases.js // this will have your alias definitions
    |--Gruntfile.js
    ```

2.  install `build-workflow` as a dev dependency

    ```bash
    npm i -D build-workflow
    ```

3.  the content of your `Gruntfile.js`

    ```javascript
    module.exports = function ( grunt ) {
      'use strict';
      require( 'build-workflow' )( grunt );
    };
    ```

4.  the content of your `aliases.js`

    ```javascript
    module.exports = function ( grunt ) {
      grunt.task.registerTask('default', ['babel']);
    };
    ```

5.  The content of your `babel.js` file

    ```javascript
    module.exports = function ( grunt ) {
      return {
        'target': {
          options: {
            sourceMap: true
          },
          files: [{
            src: 'src/**/*.js', // your files to transform
            expand: true,
            dest: 'dest/'       // the destination to move the tanspiled code
          }]
        }
      };
    };
    ```

6.  Now just run

    ```bash
    grunt babel
    ```

    If everythig went ok you should be able to see an output similar to this:



## Changelog

Read it [here](changelog.md)

## License

[MIT](License)