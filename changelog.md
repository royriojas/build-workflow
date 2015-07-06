
# Build Workflow - Changelog
## v4.6.0
- **Build Scripts Changes**
  - Lock dependencies - [9821da2]( https://github.com/royriojas/build-workflow/commit/9821da2 ), [royriojas](https://github.com/royriojas), 06/07/2015 03:38:41

    
- **Refactoring**
  - Factorized bundly into its own module - [3c7c60d]( https://github.com/royriojas/build-workflow/commit/3c7c60d ), [royriojas](https://github.com/royriojas), 06/07/2015 03:12:44

    
## v4.5.0
- **Build Scripts Changes**
  - Try to update to latest `watchify` to avoid having 2 different versions of `browserify` - [95fbf26]( https://github.com/royriojas/build-workflow/commit/95fbf26 ), [royriojas](https://github.com/royriojas), 03/07/2015 01:20:48

    
  - attempt to use latest watchify - [6df5590]( https://github.com/royriojas/build-workflow/commit/6df5590 ), [royriojas](https://github.com/royriojas), 01/07/2015 22:28:10

    
## v4.4.0
- **Bug Fixes**
  - fix consoleify issues preventing code from running in IE browsers - [6e332bf]( https://github.com/royriojas/build-workflow/commit/6e332bf ), [royriojas](https://github.com/royriojas), 25/06/2015 17:04:27

    
## v4.3.2
#### Esbeautifier
- **Refactoring**
  - Allow line breaks between object properties - [22b2f28]( https://github.com/royriojas/build-workflow/commit/22b2f28 ), [royriojas](https://github.com/royriojas), 25/06/2015 02:23:40

    
## v4.3.1
- **Build Scripts Changes**
  - Automate generation of changelog and commit message for it - [0e879ed]( https://github.com/royriojas/build-workflow/commit/0e879ed ), [royriojas](https://github.com/royriojas), 24/06/2015 16:42:38

    
## v4.3.0
- **Build Scripts Changes**
  - Update esbeautifier dep to better handle beautification of small arrays - [3277300]( https://github.com/royriojas/build-workflow/commit/3277300 ), [royriojas](https://github.com/royriojas), 24/06/2015 16:41:21

    
## v4.2.2
- **Features**
  - new karma helper and logger helper - [e06146e]( https://github.com/royriojas/build-workflow/commit/e06146e ), [royriojas](https://github.com/royriojas), 19/06/2015 18:00:30

    
- **Enhancements**
  - Make babelify a global transform by default - [4ea2d33]( https://github.com/royriojas/build-workflow/commit/4ea2d33 ), [royriojas](https://github.com/royriojas), 17/06/2015 19:18:13

    
## v4.2.1
- **Refactoring**
  - beautificated code - [97d1a8f]( https://github.com/royriojas/build-workflow/commit/97d1a8f ), [royriojas](https://github.com/royriojas), 17/06/2015 04:08:23

    
## v4.2.0
- **Build Scripts Changes**
  - Update to the latest esformatter - [8cbd1f0]( https://github.com/royriojas/build-workflow/commit/8cbd1f0 ), [royriojas](https://github.com/royriojas), 17/06/2015 04:05:33

    
## v4.1.5
- **Features**
  - Add the ability to skip certain files from the babelify transform - [7d90610]( https://github.com/royriojas/build-workflow/commit/7d90610 ), [royriojas](https://github.com/royriojas), 16/06/2015 16:49:50

    
## v4.1.4
- **Features**
  - Add babelify for karma too - [ba6eb15]( https://github.com/royriojas/build-workflow/commit/ba6eb15 ), [royriojas](https://github.com/royriojas), 16/06/2015 16:05:14

    
## v4.1.3
- **Features**
  - Add the ability to pass options to configure babelify - [3cd81c1]( https://github.com/royriojas/build-workflow/commit/3cd81c1 ), [royriojas](https://github.com/royriojas), 16/06/2015 11:02:05

    
## v4.1.2
- **Bug Fixes**
  - remove multiline option for jsx files - [ba0e081]( https://github.com/royriojas/build-workflow/commit/ba0e081 ), [royriojas](https://github.com/royriojas), 16/06/2015 05:29:53

    
## v4.1.1
- **Build Scripts Changes**
  - fix changelog command - [a33313d]( https://github.com/royriojas/build-workflow/commit/a33313d ), [royriojas](https://github.com/royriojas), 16/06/2015 05:22:11

    
## v4.0.6
- **Enhancements**
  - Update esformatter-jsx - [904ac54]( https://github.com/royriojas/build-workflow/commit/904ac54 ), [royriojas](https://github.com/royriojas), 16/06/2015 05:19:38

    
- **Features**
  - Enabling babelify. Removed jscs - [9a1c0f1]( https://github.com/royriojas/build-workflow/commit/9a1c0f1 ), [royriojas](https://github.com/royriojas), 16/06/2015 01:27:21

    **Breaking change**
    
    jscs is removed, make sure to remove it from your configuration `build-workflow.js config` file
    
  - Enable es6 for eslint - [88709b9]( https://github.com/royriojas/build-workflow/commit/88709b9 ), [royriojas](https://github.com/royriojas), 16/06/2015 01:03:04

    
  - Enable eslint-react - [d11af8b]( https://github.com/royriojas/build-workflow/commit/d11af8b ), [royriojas](https://github.com/royriojas), 16/06/2015 00:59:54

    
## v4.0.5
- **Build Scripts Changes**
  - add changelog helper task - [e876056]( https://github.com/royriojas/build-workflow/commit/e876056 ), [royriojas](https://github.com/royriojas), 10/06/2015 23:28:37

    
  - Lock deps - [3f5a22b]( https://github.com/royriojas/build-workflow/commit/3f5a22b ), [royriojas](https://github.com/royriojas), 10/06/2015 23:21:52

    
## v4.0.4
- **Enhancements**
  - Enable file expansion on simpless - [1498e68]( https://github.com/royriojas/build-workflow/commit/1498e68 ), [royriojas](https://github.com/royriojas), 10/06/2015 23:17:16

    
  - twig multitask now support dynamic file expanding - [efdcf0c]( https://github.com/royriojas/build-workflow/commit/efdcf0c ), [royriojas](https://github.com/royriojas), 10/06/2015 22:43:47

    
- **Bug Fixes**
  - Use ES6Promise instead of Promise - [ae476f5]( https://github.com/royriojas/build-workflow/commit/ae476f5 ), [royriojas](https://github.com/royriojas), 10/06/2015 23:06:23

    
- **Refactoring**
  - Make sure we access src as text - [927a185]( https://github.com/royriojas/build-workflow/commit/927a185 ), [royriojas](https://github.com/royriojas), 10/06/2015 22:43:20

    
- **Build Scripts Changes**
  - Remove not used reps - [24fb349]( https://github.com/royriojas/build-workflow/commit/24fb349 ), [royriojas](https://github.com/royriojas), 10/06/2015 22:42:58

    
## v4.0.3
- **Build Scripts Changes**
  - exclude dev dependencies from shrinkwrap.json - [9c00957]( https://github.com/royriojas/build-workflow/commit/9c00957 ), [royriojas](https://github.com/royriojas), 10/06/2015 18:07:29

    
## v4.0.2
- **Build Scripts Changes**
  - downgrade watchify to 2.6.0 for reliability. Newer version does not fire change events - [e9f6b50]( https://github.com/royriojas/build-workflow/commit/e9f6b50 ), [royriojas](https://github.com/royriojas), 10/06/2015 17:52:19

    
## v4.0.1
- **Build Scripts Changes**
  - Lock deps - [2cf00b0]( https://github.com/royriojas/build-workflow/commit/2cf00b0 ), [royriojas](https://github.com/royriojas), 10/06/2015 05:01:27

    
## v4.0.0
- **Refactoring**
  - Some serious refactoring in order to make this module easier to use - [aa7428c]( https://github.com/royriojas/build-workflow/commit/aa7428c ), [royriojas](https://github.com/royriojas), 10/06/2015 04:48:41

    
## v3.2.10
- **Enhancements**
  - Better error reporting on auto-prefix failure. - [06c5b32]( https://github.com/royriojas/build-workflow/commit/06c5b32 ), [royriojas](https://github.com/royriojas), 09/06/2015 22:31:13

    
## v3.2.9
- **Build Scripts Changes**
  - Lock dependencies - [5857c44]( https://github.com/royriojas/build-workflow/commit/5857c44 ), [royriojas](https://github.com/royriojas), 08/06/2015 02:21:06

    
## v3.2.8
- **Features**
  - Add grunt-simpless task - [07f77fe]( https://github.com/royriojas/build-workflow/commit/07f77fe ), [royriojas](https://github.com/royriojas), 08/06/2015 02:16:15

    
## v3.2.7
- **Features**
  - bundler now uses a cache to improve building speed - [48f8aa0]( https://github.com/royriojas/build-workflow/commit/48f8aa0 ), [royriojas](https://github.com/royriojas), 22/05/2015 16:55:38

    Cache is enabled by default in bundler in order to disable it, pass
    
    ```
    bundler: {
      'target-name': {
        options: {
          useCache: false <<< disable the cache
        },
        src: 'somefile.js',
        dest: 'someDestFile.js'
      }
    }
    ```
    
## v3.2.6
- **Build Scripts Changes**
  - Update consoleify to avoid leak of path of building env - [dd38a1a]( https://github.com/royriojas/build-workflow/commit/dd38a1a ), [royriojas](https://github.com/royriojas), 16/05/2015 15:12:25

    
## v3.2.5
- **Build Scripts Changes**
  - Update eslint to latest version - [b57a32a]( https://github.com/royriojas/build-workflow/commit/b57a32a ), [royriojas](https://github.com/royriojas), 16/05/2015 01:06:40

    
- **Enhancements**
  - Do not kill the bundler watch if the task fails to compile, just wait for the next set of changes - [bdcd7e6]( https://github.com/royriojas/build-workflow/commit/bdcd7e6 ), [royriojas](https://github.com/royriojas), 16/05/2015 01:06:08

    
#### only on dev mode
- **Bug Fixes**
  - Ensure consoleify transform is active only when buildNumber === 'dev' (only on dev mode) - [65b50ba]( https://github.com/royriojas/build-workflow/commit/65b50ba ), [royriojas](https://github.com/royriojas), 16/05/2015 01:05:36

    
## v3.2.4
- **Bug Fixes**
  - prevent bundler from failing if not stricterify section set in the options - [8bde822]( https://github.com/royriojas/build-workflow/commit/8bde822 ), [royriojas](https://github.com/royriojas), 13/05/2015 12:30:20

    
## v3.2.3
- **Features**
  - add `checkIfSkip` callback to stricterify in bundler task - [eb16214]( https://github.com/royriojas/build-workflow/commit/eb16214 ), [royriojas](https://github.com/royriojas), 13/05/2015 02:49:02

    
## v3.2.2
- **Bug Fixes**
  - consoleify transform is not working on ie9 - [37fad9a]( https://github.com/royriojas/build-workflow/commit/37fad9a ), [royriojas](https://github.com/royriojas), 08/05/2015 17:41:03

    
## v3.2.1
- **Build Scripts Changes**
  - Fix dependency issue introduced by JSONStream in package.json - [293bdff]( https://github.com/royriojas/build-workflow/commit/293bdff ), [royriojas](https://github.com/royriojas), 07/05/2015 12:03:39

    
## v3.2.0
#### bundler
- **Bug Fixes**
  - make dotify transform global to be able to parse tpl files in node_modules - [629b046]( https://github.com/royriojas/build-workflow/commit/629b046 ), [royriojas](https://github.com/royriojas), 09/04/2015 12:26:27

    
## v3.0.7
#### bundler
- **Bug Fixes**
  - Lock browserify version to 9.0.3. Latest version introduces a bug that produce no output when executed - [78db8b9]( https://github.com/royriojas/build-workflow/commit/78db8b9 ), [royriojas](https://github.com/royriojas), 07/04/2015 15:19:52

    
## v3.0.6
#### compile-less
- **Bug Fixes**
  - Fix for issue while trying to parse less files. Fixes [#7](https://github.com/royriojas/build-workflow/issues/7) - [442094d]( https://github.com/royriojas/build-workflow/commit/442094d ), [royriojas](https://github.com/royriojas), 31/03/2015 02:32:52

    
## v3.0.5
#### twig
- **Enhancements**
  - add `options.extendTwig` callback to twig grunt task - [f753a12]( https://github.com/royriojas/build-workflow/commit/f753a12 ), [royriojas](https://github.com/royriojas), 30/03/2015 15:16:53

    `extendTwig` allows the consumer to extend twig, adding new filters or tags.
    
    For example adding a filter:
    
    ```javascript
    pages: {
      options: {
        extendTwig: function ( Twig ) {
          Twig.extendFilter( 'processResource', function ( value, args ) {
            args = args || [];
            // add the version to all the required css or js files
            var addVersion = clsc( args[ 0 ], true );
            value = addVersion ? revFile(value, buildNumber) : value;
            return value;
          } );
        },
        cwd: 'src/pages/'
      },
      src: [ 'src/pages/**/*.twig' ],
      dest: 'dist/pages/'
    }
    ```
    
## v3.0.4
#### eslint
- **Bug Fixes**
  - Fix issue that hide the warnings when no errors were found - [e5ca52c]( https://github.com/royriojas/build-workflow/commit/e5ca52c ), [royriojas](https://github.com/royriojas), 30/03/2015 02:58:50

    
## v3.0.3
#### protractor conf helper
- **Bug Fixes**
  - Fix 'missing underscore' dep - [eba47e5]( https://github.com/royriojas/build-workflow/commit/eba47e5 ), [royriojas](https://github.com/royriojas), 30/03/2015 01:54:40

    
## v3.0.2
#### protractor conf helper
- **Bug Fixes**
  - Fix 'missing suistes property' in config - [50edd48]( https://github.com/royriojas/build-workflow/commit/50edd48 ), [royriojas](https://github.com/royriojas), 30/03/2015 01:51:18

    
## v3.0.1
#### protractor conf helper
- **Bug Fixes**
  - Fix 'cannot find expand module' issue - [d85f14c]( https://github.com/royriojas/build-workflow/commit/d85f14c ), [royriojas](https://github.com/royriojas), 30/03/2015 01:46:21

    
## v3.0.0
- **Refactoring**
  - Remove old modules taht are not longer needed - [26d5c23]( https://github.com/royriojas/build-workflow/commit/26d5c23 ), [royriojas](https://github.com/royriojas), 30/03/2015 01:32:32

    
## v2.1.2
#### esformatter
- **Bug Fixes**
  - revert back the setting to force quotes - [47c1888]( https://github.com/royriojas/build-workflow/commit/47c1888 ), [royriojas](https://github.com/royriojas), 29/03/2015 03:37:00

    
## v2.1.1
#### lessify
- **Bug Fixes**
  - Handle escaping chars in less files - [e7d1810]( https://github.com/royriojas/build-workflow/commit/e7d1810 ), [royriojas](https://github.com/royriojas), 29/03/2015 03:15:38

    - files that contain the `\\`  character will be properly handled now.
    This is quite common when adding font-codes
    
#### esformatter
- **Enhancements**
  - esformatter quotes avoidEscape - [09051b7]( https://github.com/royriojas/build-workflow/commit/09051b7 ), [royriojas](https://github.com/royriojas), 29/03/2015 03:13:26

    Make sure we don’t accidentally break apps by changing double quotes to
    single quotes.
    
#### css-font
- **Bug Fixes**
  - Fix wrong prop for css-font task - [797f04b]( https://github.com/royriojas/build-workflow/commit/797f04b ), [royriojas](https://github.com/royriojas), 29/03/2015 03:11:21

    - Make it generic, so other fonts can be generated
      using this task
    - **BREAKING CHANGE**: Fix typo on property
    `opts.jsonCodesOutput` on the css-font task. (before it
    was `opts.jsonCodesOuput`
    
## v2.1.0
#### bundler
- **Refactoring**
  - Add a watch suffix for bundler tasks targets - [0c9bba3]( https://github.com/royriojas/build-workflow/commit/0c9bba3 ), [royriojas](https://github.com/royriojas), 26/03/2015 01:45:28

    In order to be consistent, and to provide a better api, bundler targets now
    won't use the `grunt.option('watch-task')` to especify which task to
    be run in watch mode. Instead now they can be called from the command line
    like this:
    
    ```bash
    grunt bundler:target:watch # the watch suffix will run this task in watch mode
    ```
    
## v2.0.8
#### check-valid tasks
- **Enhancements**
  - Honor the `--skip-cache` flag and provide consistent output - [58d33f9]( https://github.com/royriojas/build-workflow/commit/58d33f9 ), [royriojas](https://github.com/royriojas), 26/03/2015 00:59:11

    Running the tasks with
    
    ```bash
    grunt check-valid --skip-cache=true
    ```
    
    Will now delete the cache files. Subsequent calls to this task without that flag will use a new cache file.
    This is useful when a configuration file has changed and we want to destroy the cache that was created
    when using the previous configuration, since the files didn't change, the tasks would assume they are OK.
    
    TODO: Store the configuration as well as part of the cache, that way if the config change the task will destroy
    the cache automatically and create a new one for the next executions without actually having to use the `--skip-cache` flag. Fix <a target="_blank" class="info-link" href="https://github.com/royriojas/build-workflow/issues/5"><span>#5</span></a>
    
    Also in this commit. Normalized the output of the checkvalid tasks. Fix <a target="_blank" class="info-link" href="https://github.com/royriojas/build-workflow/issues/6"><span>#6</span></a>
    
## v2.0.7
#### esbeautifier
- **Build Scripts Changes**
  - updated dep to get better error reporting - [1059614]( https://github.com/royriojas/build-workflow/commit/1059614 ), [royriojas](https://github.com/royriojas), 25/03/2015 02:33:06

    
## v2.0.6
#### bundler
- **Enhancements**
  - add version number to dest file - [ea69fab]( https://github.com/royriojas/build-workflow/commit/ea69fab ), [royriojas](https://github.com/royriojas), 25/03/2015 00:48:26

    - Banner is added to not minified file
    - Version is added to the files automatically if the option
    `buildNumber` is set.
    - The minified version will be generated if the buildNumber is
    different from dev or if the grunt option `bundle-min` is provided.
    - a grunt option `console-filter` can be used to remove the
    `console.log` calls from the modules that not match the provided filter
    
## v2.0.5
#### bundler
- **Bug Fixes**
  - Use a new bundler per each task. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [57a78e4]( https://github.com/royriojas/build-workflow/commit/57a78e4 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:50:05

    
## v2.0.4
#### bundler
- **Bug Fixes**
  - Return after error in bundle. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [9994b79]( https://github.com/royriojas/build-workflow/commit/9994b79 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:40:14

    
## v2.0.3
#### bundler
- **Bug Fixes**
  - Call done when the uglify task finishes. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [4aa375b]( https://github.com/royriojas/build-workflow/commit/4aa375b ), [royriojas](https://github.com/royriojas), 24/03/2015 18:34:59

    
## v2.0.2
#### bundler
- **Bug Fixes**
  - Fixes issue with the generation of the minified version. Fix [#4](https://github.com/royriojas/build-workflow/issues/4) - [ae3c7b0]( https://github.com/royriojas/build-workflow/commit/ae3c7b0 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:12:51

    
## v1.0.24
#### bundler
- **Features**
  - browserify/watchify task with optional concatenation of old school files and an uglify step - [3e67554]( https://github.com/royriojas/build-workflow/commit/3e67554 ), [royriojas](https://github.com/royriojas), 24/03/2015 17:17:38

    The following options are available in the configuration object
    
    ```javascript
    bundler: {
      options: {
        shimixify: {
          deps: { // pass here the deps for browserify
            window: 'global.window',
            jQuery: 'global.jQuery',
            chrome: 'global.chrome',
            screen: 'global.screen',
            document: 'global.document',
            Worker: 'global.Worker',
            Promise: 'global.Promise',
            self: 'global.self'
          }
        },
        // name of module or text in the console
        // log to match. If found the console log
        // call is retained. Otherwise will be removed
        consoleFilter: '',
        // the modules to concat before the bundle
        // This feature is only needed if you want to concat
        // regular old school javascript modules
        concatBefore: [],
        // the modules to concat after the bundle
        // This feature is only needed if you want to concat
        // regular old school javascript modules
        concatAfter: [],
        // if true a minimized version of the bundle
        // will be created using the name of the
        uglify: false,
        // text to add to the minimized version
        banner: ''
      },
      myTarget: {
        src: 'path/to/entry/file',
        dest: 'path/to/output/file'
      }
    }
    ```
    
## v1.0.23
#### Changelog
- **Build Scripts Changes**
  - Add changelogx dep - [656bbbe]( https://github.com/royriojas/build-workflow/commit/656bbbe ), [royriojas](https://github.com/royriojas), 20/03/2015 19:11:12

    
## v1.0.22
#### esformatter/prepush
- **Build Scripts Changes**
  - Fail when the task grunt prepush is executed and files needed beautification. Fixes [#3](https://github.com/royriojas/build-workflow/issues/3) - [b42be54]( https://github.com/royriojas/build-workflow/commit/b42be54 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:52:18

    
## v1.0.21
#### hooks
- **Build Scripts Changes**
  - Add prepush tasks in package.json - [ee141f2]( https://github.com/royriojas/build-workflow/commit/ee141f2 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:26:54

    
- **Build Scripts Changes**
  - Udapted prepush dependency - [1e1e7a9]( https://github.com/royriojas/build-workflow/commit/1e1e7a9 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:25:36

    
#### npm scripts
- **Build Scripts Changes**
  - Add install hooks from npm scripts - [454b482]( https://github.com/royriojas/build-workflow/commit/454b482 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:00:13

    
#### jscs
- **Enhancements**
  - use the full path of the file in the reporter so IDEs like intellij IDEA can parse the output and link to the files - [1814421]( https://github.com/royriojas/build-workflow/commit/1814421 ), [royriojas](https://github.com/royriojas), 20/03/2015 17:58:32

    
## v1.0.20
#### karma helpers
- **Bug Fixes**
  - Fix issue when trying to use the karma helpers - [8e64ea6]( https://github.com/royriojas/build-workflow/commit/8e64ea6 ), [royriojas](https://github.com/royriojas), 19/03/2015 12:31:38

    
## v1.0.19
#### Build script cleanup
- **Refactoring**
  - Remove unused deps - [d5dd218]( https://github.com/royriojas/build-workflow/commit/d5dd218 ), [royriojas](https://github.com/royriojas), 18/03/2015 14:22:48

    
## v1.0.18
#### dotify
- **Build Scripts Changes**
  - Add browesrify-transform-tools as dep - [a7b4f24]( https://github.com/royriojas/build-workflow/commit/a7b4f24 ), [royriojas](https://github.com/royriojas), 18/03/2015 14:01:30

    
## v1.0.17
#### markdown-expander
- **Build Scripts Changes**
  - add marked as a dependency - [f6dcf84]( https://github.com/royriojas/build-workflow/commit/f6dcf84 ), [royriojas](https://github.com/royriojas), 18/03/2015 13:24:31

    
## v1.0.16
#### esbeautifier
- **Features**
  - keep lines before methods in objects - [10abf35]( https://github.com/royriojas/build-workflow/commit/10abf35 ), [royriojas](https://github.com/royriojas), 18/03/2015 13:18:06

    
## v1.0.14
- **Build Scripts Changes**
  - Remove peer dependencies, add missing deps - [9537e5b]( https://github.com/royriojas/build-workflow/commit/9537e5b ), [royriojas](https://github.com/royriojas), 18/03/2015 03:00:49

    
## v1.0.13
- **Build Scripts Changes**
  - Remove peer dependencies - [acb72e0]( https://github.com/royriojas/build-workflow/commit/acb72e0 ), [royriojas](https://github.com/royriojas), 18/03/2015 02:52:48

    
## v1.0.12
- **Enhancements**
  - Move eslint and eslint formatters to be dependencies of build-workflow - [cf2b486]( https://github.com/royriojas/build-workflow/commit/cf2b486 ), [royriojas](https://github.com/royriojas), 18/03/2015 02:48:10

    
## v1.0.11
- **Enhancements**
  - Replace esformatter with esbeautifier, and normalized log messages for jscs, eslint and esformatter - [bbeba72]( https://github.com/royriojas/build-workflow/commit/bbeba72 ), [royriojas](https://github.com/royriojas), 15/03/2015 03:17:07

    
## v1.0.10
- **Features**
  - create-pkg-json will extend the received pkg file - [f1af6f1]( https://github.com/royriojas/build-workflow/commit/f1af6f1 ), [royriojas](https://github.com/royriojas), 07/03/2015 04:24:19

    
## v1.0.9
- **Features**
  - Add cache for the jscs task - [2e5772c]( https://github.com/royriojas/build-workflow/commit/2e5772c ), [royriojas](https://github.com/royriojas), 06/03/2015 01:48:18

    
## v1.0.8
- **Bug Fixes**
  - skip-cache on eslint on errors too - [e223c1a]( https://github.com/royriojas/build-workflow/commit/e223c1a ), [royriojas](https://github.com/royriojas), 05/03/2015 13:37:35

    
## v1.0.7
- **Build Scripts Changes**
  - enabling eslint on a given file - [644207d]( https://github.com/royriojas/build-workflow/commit/644207d ), [royriojas](https://github.com/royriojas), 04/03/2015 02:07:22

    
## v1.0.6
- **undefined**
  - maxBuffer exceeded fixed. - [b17a55e]( https://github.com/royriojas/build-workflow/commit/b17a55e ), [royriojas](https://github.com/royriojas), 03/03/2015 10:46:54

    
## v1.0.5
- **Enhancements**
  - move log messages to grunt verbose - [8a09a7a]( https://github.com/royriojas/build-workflow/commit/8a09a7a ), [royriojas](https://github.com/royriojas), 03/03/2015 10:02:13

    
## v1.0.4
- **Features**
  - Adding cache and better error reporting for eslint - [6db574e]( https://github.com/royriojas/build-workflow/commit/6db574e ), [royriojas](https://github.com/royriojas), 03/03/2015 03:59:43

    
## v1.0.3
- **Build Scripts Changes**
  - Remove quote-props. Seems a bit dangerous - [aad5dee]( https://github.com/royriojas/build-workflow/commit/aad5dee ), [royriojas](https://github.com/royriojas), 02/03/2015 21:37:27

    
## v1.0.2
- **Documentation**
  - Add better configuration for esformatter-jsx - [71b261f]( https://github.com/royriojas/build-workflow/commit/71b261f ), [royriojas](https://github.com/royriojas), 02/03/2015 11:00:15

    
## v1.0.1
- **Refactoring**
  - configuration for esformatter-jsx - [472a206]( https://github.com/royriojas/build-workflow/commit/472a206 ), [royriojas](https://github.com/royriojas), 02/03/2015 02:01:18

    
## v1.1.0
- **Refactoring**
  - started to move functionality to their own repos - [c419cd3]( https://github.com/royriojas/build-workflow/commit/c419cd3 ), [royriojas](https://github.com/royriojas), 02/03/2015 01:44:11

    
## v0.1.16
- **Build Scripts Changes**
  - use esformatter-jsx instead of esformatter-jsx-ignore - [58e2a67]( https://github.com/royriojas/build-workflow/commit/58e2a67 ), [royriojas](https://github.com/royriojas), 27/02/2015 01:36:00

    
#### build-updates
- **Build Scripts Changes**
  - Update jsx-ignore to not use esprima from substack fork - [3a0ef45]( https://github.com/royriojas/build-workflow/commit/3a0ef45 ), [royriojas](https://github.com/royriojas), 26/02/2015 20:24:20

    
## v0.1.15
#### build-deps
- **Refactoring**
  - update dependencies - [6471b75]( https://github.com/royriojas/build-workflow/commit/6471b75 ), [royriojas](https://github.com/royriojas), 26/02/2015 19:46:53

    
## v0.1.14
#### new-validation
- **Refactoring**
  - (new-validation) - [b800785]( https://github.com/royriojas/build-workflow/commit/b800785 ), [royriojas](https://github.com/royriojas), 26/02/2015 18:55:17

    
## v0.1.12
- **Enhancements**
  - Update deps - [d2e4428]( https://github.com/royriojas/build-workflow/commit/d2e4428 ), [royriojas](https://github.com/royriojas), 26/02/2015 17:21:21

    
## v0.1.11
- **Enhancements**
  - make some rules warnings instead of deal breakers - [2f95848]( https://github.com/royriojas/build-workflow/commit/2f95848 ), [royriojas](https://github.com/royriojas), 26/02/2015 15:57:20

    
## v0.1.10
#### compatibility with 0.1.8
- **Bug Fixes**
  - fixed - [6ad713e]( https://github.com/royriojas/build-workflow/commit/6ad713e ), [royriojas](https://github.com/royriojas), 26/02/2015 15:00:03

    
## v0.1.9
- **Refactoring**
  - generalize the cache solution - [f2f89aa]( https://github.com/royriojas/build-workflow/commit/f2f89aa ), [royriojas](https://github.com/royriojas), 26/02/2015 13:56:28

    
  - use flat-cache from npm - [b91a5ef]( https://github.com/royriojas/build-workflow/commit/b91a5ef ), [royriojas](https://github.com/royriojas), 26/02/2015 13:06:33

    
  - Move to esformatter+eslint - [7c18053]( https://github.com/royriojas/build-workflow/commit/7c18053 ), [royriojas](https://github.com/royriojas), 25/02/2015 03:09:22

    
- **Build Scripts Changes**
  - Preparing for esformatter and eslint - [f457907]( https://github.com/royriojas/build-workflow/commit/f457907 ), [royriojas](https://github.com/royriojas), 24/02/2015 16:25:25

    
  - Preparing for esformatter - [d449e91]( https://github.com/royriojas/build-workflow/commit/d449e91 ), [royriojas](https://github.com/royriojas), 24/02/2015 15:18:25

    
#### better-changelog [#2](https://github.com/royriojas/build-workflow/issues/2)
- **Features**
  - Make sure the issues are recognized in the subject and body of commits - [c53480b]( https://github.com/royriojas/build-workflow/commit/c53480b ), [royriojas](https://github.com/royriojas), 22/02/2015 19:26:52

    
#### better changelog [#2](https://github.com/royriojas/build-workflow/issues/2)
- **Features**
  - Adding regex for Github issues - [ce5baf8]( https://github.com/royriojas/build-workflow/commit/ce5baf8 ), [royriojas](https://github.com/royriojas), 22/02/2015 19:25:53

    
  - Proper generation of the log recognizing the feature groups - [02e5bd0]( https://github.com/royriojas/build-workflow/commit/02e5bd0 ), [royriojas](https://github.com/royriojas), 22/02/2015 19:25:41

    This basically means that now a group will first contain a feature category. At the very least
    a feature group will be on each commit tag group. Commits that do not contain a feature will be
    grouped under the feature name 'Uncategorized'.
    
    This should fix <a target="_blank" class="info-link" href="https://github.com/royriojas/build-workflow/issues/2"><span>#2</span></a>
    
  - better parsing of the commit messages, for issue [#2](https://github.com/royriojas/build-workflow/issues/2) - [80f5cc1]( https://github.com/royriojas/build-workflow/commit/80f5cc1 ), [royriojas](https://github.com/royriojas), 22/02/2015 19:25:12

    
## v0.1.8
- **Enhancements**
  - Only run prepush if grunt is available - [30055d4]( https://github.com/royriojas/build-workflow/commit/30055d4 ), [royriojas](https://github.com/royriojas), 10/02/2015 11:50:49

    
## v0.1.7
- **Features**
  - Add console-filter - [4ecacc7]( https://github.com/royriojas/build-workflow/commit/4ecacc7 ), [royriojas](https://github.com/royriojas), 30/01/2015 02:55:57

    Usage
    
    ```bash
    grunt --console-filter=regular_expression
    ```
    
    where `regular_expression` can be any valid regular expression
    
    If a filter is provided all the console methods that match will be kept. The ones that do not match
    will be removed from the final output.
    
    A method will match if one its arguments (as text) matches the value of the filter. e.g.
    
    ```javascript
    console.log('some method');
    console.log('another method');
    ```
    And you run
    
    ```bash
    grunt --console-filter=some
    ```
    
    this will keep the `console.log('some method')` and will remove the other one.
    
    *Note*: It will also keep the console calls from a file with the name that matchs the filter
    
    In the previous example the filter will also keep console methods calls from a file called some.js
    or somexxxx.js file
    
- **Documentation**
  - Add missing `changelog.html` file - [d6aaa13]( https://github.com/royriojas/build-workflow/commit/d6aaa13 ), [royriojas](https://github.com/royriojas), 03/12/2014 07:09:58

    
  - docs improved - [184ec37]( https://github.com/royriojas/build-workflow/commit/184ec37 ), [royriojas](https://github.com/royriojas), 03/12/2014 07:01:40

    
  - Update docs - [b455946]( https://github.com/royriojas/build-workflow/commit/b455946 ), [royriojas](https://github.com/royriojas), 03/12/2014 06:14:45

    
## v0.1.6
- **Refactoring**
  - Add option to skip strictify transform on node_modules - [231b4fb]( https://github.com/royriojas/build-workflow/commit/231b4fb ), [royriojas](https://github.com/royriojas), 29/11/2014 04:04:40

    
## v0.1.5
- **Refactoring**
  - Remove need for test-helper.js - [2e021b8]( https://github.com/royriojas/build-workflow/commit/2e021b8 ), [royriojas](https://github.com/royriojas), 29/11/2014 02:43:54

    
  - Make sure we use single quotes for strings - [a538739]( https://github.com/royriojas/build-workflow/commit/a538739 ), [royriojas](https://github.com/royriojas), 29/11/2014 02:20:01

    
## v0.1.4
- **Refactoring**
  - Make sure we use single quotes - [7a22f5e]( https://github.com/royriojas/build-workflow/commit/7a22f5e ), [royriojas](https://github.com/royriojas), 29/11/2014 01:34:23

    
- **Other changes**
  - Update usage.md - [c4c2e7f]( https://github.com/royriojas/build-workflow/commit/c4c2e7f ), [Roy Riojas](https://github.com/Roy Riojas), 26/11/2014 03:29:34

    Fix docs
  - Update usage.md - [7315c8b]( https://github.com/royriojas/build-workflow/commit/7315c8b ), [Roy Riojas](https://github.com/Roy Riojas), 26/11/2014 03:26:33

    DOC: Fix docs markdown
## v0.1.3
- **Enhancements**
  - Add shimify in replace of browserify-shim - [51820e4]( https://github.com/royriojas/build-workflow/commit/51820e4 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:32:45

    
  - Replacement for browserify shim to avoid add configuration info to the package.json - [efa2eb3]( https://github.com/royriojas/build-workflow/commit/efa2eb3 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:19:48

    
  - Add consoleify transform - [eca6df5]( https://github.com/royriojas/build-workflow/commit/eca6df5 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:19:12

    
- **Refactoring**
  - remove the "demo" string from the demo-structure files - [2e16db6]( https://github.com/royriojas/build-workflow/commit/2e16db6 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:17:05

    
  - Add formatted files - [f5d28a4]( https://github.com/royriojas/build-workflow/commit/f5d28a4 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:10:51

    
- **Build Scripts Changes**
  - Add stringformat dep - [255ab33]( https://github.com/royriojas/build-workflow/commit/255ab33 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:14:40

    
- **Documentation**
  - Fix documenation - [0a07349]( https://github.com/royriojas/build-workflow/commit/0a07349 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:14:43

    
## v0.1.1
- **Build Scripts Changes**
  - Add demo structure - [67a4569]( https://github.com/royriojas/build-workflow/commit/67a4569 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:05:46

    
  - remove the scafold files - [ac232fe]( https://github.com/royriojas/build-workflow/commit/ac232fe ), [royriojas](https://github.com/royriojas), 25/11/2014 23:52:58

    
  - Formatted files - [8e67a67]( https://github.com/royriojas/build-workflow/commit/8e67a67 ), [royriojas](https://github.com/royriojas), 25/11/2014 00:45:18

    
  - Add template files - [f4a40e6]( https://github.com/royriojas/build-workflow/commit/f4a40e6 ), [royriojas](https://github.com/royriojas), 25/11/2014 00:43:27

    
- **Features**
  - Add protractor new config - [f069633]( https://github.com/royriojas/build-workflow/commit/f069633 ), [royriojas](https://github.com/royriojas), 25/11/2014 01:37:08

    
- **Enhancements**
  - Add default config for remove logging task - [0b381e4]( https://github.com/royriojas/build-workflow/commit/0b381e4 ), [royriojas](https://github.com/royriojas), 25/11/2014 00:43:08

    
  - Add example of prepushTasks - [af07125]( https://github.com/royriojas/build-workflow/commit/af07125 ), [royriojas](https://github.com/royriojas), 25/11/2014 00:42:48

    
  - cli improvements - [af80e85]( https://github.com/royriojas/build-workflow/commit/af80e85 ), [royriojas](https://github.com/royriojas), 25/11/2014 00:38:10

    - add option to install deps by groups
    - show help when the command is not found
    
  - Added codepainter task to prepush list - [bb337bd]( https://github.com/royriojas/build-workflow/commit/bb337bd ), [royriojas](https://github.com/royriojas), 03/11/2014 04:13:00

    
  - run codepainter - [9fd6535]( https://github.com/royriojas/build-workflow/commit/9fd6535 ), [royriojas](https://github.com/royriojas), 03/11/2014 04:09:59

    
  - Add yuidoc task - [80f4eb4]( https://github.com/royriojas/build-workflow/commit/80f4eb4 ), [royriojas](https://github.com/royriojas), 03/11/2014 03:56:10

    
  - added docco-husky-plus task - [2419a8c]( https://github.com/royriojas/build-workflow/commit/2419a8c ), [royriojas](https://github.com/royriojas), 03/11/2014 02:42:14

    
  - removed common-config.js - [76cd95d]( https://github.com/royriojas/build-workflow/commit/76cd95d ), [royriojas](https://github.com/royriojas), 03/11/2014 00:38:06

    
## v0.0.35
- **Enhancements**
  - Add common globlals to `.jshintrc` - [5dd09e2]( https://github.com/royriojas/build-workflow/commit/5dd09e2 ), [royriojas](https://github.com/royriojas), 25/10/2014 21:25:06

    
## v0.0.34
- **Features**
  - New `requireArr` transform - [2e3c369]( https://github.com/royriojas/build-workflow/commit/2e3c369 ), [royriojas](https://github.com/royriojas), 25/10/2014 21:05:43

    **Usage**
    
    **In your code**
    ```javascript
    // pass the path using `globs` like the ones grunt.file.expand method will accept
    // if you want to exclude a module, use the `!` prefix to exclude files from being required
    var modules = requireArr('./modules/**/*.js');
    var moreModules = requireArr('./modulesB/**/*.js', './modulesA/**/*.js', '!./modulesB/excluded.js');
    
    ```
    **In your grunt browserify config**
    ```javascript
    // in your grunt-browserify config
    options: {
      preBundleCB: function ( b ) {
        // this will register the transform
        b.transform( require( 'build-workflow/utils/require-arr' ));
        return b;
      }
    }
    ```
    
- **Build Scripts Changes**
  - Remove unneeded console log - [247d7a8]( https://github.com/royriojas/build-workflow/commit/247d7a8 ), [royriojas](https://github.com/royriojas), 10/10/2014 20:13:29

    
- **Bug Fixes**
  - Fix for undefined arguments inside the pre-push hook - [bfca07d]( https://github.com/royriojas/build-workflow/commit/bfca07d ), [royriojas](https://github.com/royriojas), 10/10/2014 20:12:23

    
## v0.0.33
- **Refactoring**
  - properly handle initialization errors - [6cb4e4f]( https://github.com/royriojas/build-workflow/commit/6cb4e4f ), [royriojas](https://github.com/royriojas), 09/10/2014 02:23:16

    
## v0.0.32
- **Enhancements**
  - properly show `common-config` load error - [9f8102b]( https://github.com/royriojas/build-workflow/commit/9f8102b ), [royriojas](https://github.com/royriojas), 09/10/2014 02:13:36

    
  - Improve `check-valid` and `pre-push` - [cc7f086]( https://github.com/royriojas/build-workflow/commit/cc7f086 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:11:39

    
  - Add option to not replace the pkg.version inside the grunt tasks - [03ef1eb]( https://github.com/royriojas/build-workflow/commit/03ef1eb ), [royriojas](https://github.com/royriojas), 08/10/2014 23:49:28

    
- **Features**
  - Fix twig generator task - [f2aa656]( https://github.com/royriojas/build-workflow/commit/f2aa656 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:10:31

    
## v0.0.30
- **Refactoring**
  - Remove not used code - [925444a]( https://github.com/royriojas/build-workflow/commit/925444a ), [royriojas](https://github.com/royriojas), 12/09/2014 12:12:14

    
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [805a18b]( https://github.com/royriojas/build-workflow/commit/805a18b ), [royriojas](https://github.com/royriojas), 12/09/2014 11:47:47

    
## v0.0.29
- **Enhancements**
  - Add Karma Helper to make easier to declare the preprocessors - [63fad82]( https://github.com/royriojas/build-workflow/commit/63fad82 ), [royriojas](https://github.com/royriojas), 12/09/2014 11:14:16

    
## v0.0.28
- **Enhancements**
  - Add test helper - [b49faf9]( https://github.com/royriojas/build-workflow/commit/b49faf9 ), [royriojas](https://github.com/royriojas), 12/09/2014 10:56:17

    
- **Documentation**
  - Remove confusing description from  documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [3ff3749]( https://github.com/royriojas/build-workflow/commit/3ff3749 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:44:05

    
## v0.0.27
- **Documentation**
  - Add more documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [11f2342]( https://github.com/royriojas/build-workflow/commit/11f2342 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:37:07

    
- **Enhancements**
  - changelog will load even when deps are not installed - [5e997d3]( https://github.com/royriojas/build-workflow/commit/5e997d3 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:23:21

    
## v0.0.26
- **Enhancements**
  - Specify custom tasks to run during prepush - [aef3acf]( https://github.com/royriojas/build-workflow/commit/aef3acf ), [royriojas](https://github.com/royriojas), 12/09/2014 00:11:00

    Now it is possible to specify other tasks apart from the validation
    ones (jsbeautifier, jshint, jscs, jsvalidate) to be executed during the
    pre push hook.
    
    in your `common-config.js` file add the following entry
    ```javascript
    prepushTasks: [ 'jsontlint' ],
    filesTovalidate : { … }
    ```
    
    The above can be used to execute other custom tasks during the pre push
    hook
    
- **Features**
  - Add twig task - [73c7ce5]( https://github.com/royriojas/build-workflow/commit/73c7ce5 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:07:28

    ## new Twig templates render
    
    Add a new file called twig.js in your configs folder with the following
    content
    
    ```javascript
    module.exports = function ( grunt, pkg ) {
      'use strict';
    
      return {
        'chrome-app': {
          opts: {
            // make the files be relative to this folder
            // so when copying the relative structures is honored
            cwd: 'src/pages/',
            // the data to be passed to the templates
            data: {}
          },
          // the files to be processed with twig extension
          src: ['src/pages/**/*.twig'],
          // the path where the files are going to be copied to
          dest: 'generated/pages/'
        }
      };
    };
    ```
    
## v0.0.25
- **Enhancements**
  - factorized prepush and check-valid - [c1b5069]( https://github.com/royriojas/build-workflow/commit/c1b5069 ), [royriojas](https://github.com/royriojas), 11/09/2014 12:08:51

    `check-valid` now can specify options in a config file.
    
    - useNewer: true. Whether to use grunt-newer to only check changed files
    - tasksToRun: 'jsbeautifier,jscs,jshint,jsvalidate' which tasks to run as part of the `check-valid` task
    - filesToValidate: what files to validate (an array of globs like: ['src/**/*.js']) By default will use the same files on the filesToValidate Object from common-config.js file.
    - forceBeautify: true. By default the files will be beatufied automatically. If this is set to false. The task will break on the first file that needed beautification.
    
    Same as `check-valid` but
    - useNewer: is false by deafult
    - forceBeautify: is false by default.
    
  - Use grunt-newer to improve speed of validation check - [0c83980]( https://github.com/royriojas/build-workflow/commit/0c83980 ), [royriojas](https://github.com/royriojas), 11/09/2014 11:45:31

    
  - Use grunt newer to validate valid files - [5868d99]( https://github.com/royriojas/build-workflow/commit/5868d99 ), [royriojas](https://github.com/royriojas), 11/09/2014 11:38:44

    
## v0.0.24
- **Documentation**
  - Add more documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [304413b]( https://github.com/royriojas/build-workflow/commit/304413b ), [royriojas](https://github.com/royriojas), 10/09/2014 09:48:04

    
## v0.0.23
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [50d6594]( https://github.com/royriojas/build-workflow/commit/50d6594 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:43:38

    
## v0.0.22
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [c403b34]( https://github.com/royriojas/build-workflow/commit/c403b34 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:11:20

    
- **Bug Fixes**
  - Fix missing title in exec:yuidoc task - [a473e0d]( https://github.com/royriojas/build-workflow/commit/a473e0d ), [royriojas](https://github.com/royriojas), 09/09/2014 16:30:53

    
  - Fix missing title in exec:yuidoc task - [9fd1183]( https://github.com/royriojas/build-workflow/commit/9fd1183 ), [royriojas](https://github.com/royriojas), 09/09/2014 16:21:49

    
## v0.0.21
- **Bug Fixes**
  - Fix missing title in exec:yuidoc task - [ffa86ad]( https://github.com/royriojas/build-workflow/commit/ffa86ad ), [royriojas](https://github.com/royriojas), 09/09/2014 16:22:55

    
## v0.0.20
- **Build Scripts Changes**
  - added script to install deps - [ffec355]( https://github.com/royriojas/build-workflow/commit/ffec355 ), [royriojas](https://github.com/royriojas), 08/09/2014 22:19:55

    
  - Added grunt-exec - [3b57df1]( https://github.com/royriojas/build-workflow/commit/3b57df1 ), [royriojas](https://github.com/royriojas), 08/09/2014 21:05:37

    
  - remove check-kwl and markdown-expander - [3dd1ff0]( https://github.com/royriojas/build-workflow/commit/3dd1ff0 ), [royriojas](https://github.com/royriojas), 08/09/2014 21:02:16

    
## v0.0.18
- **Enhancements**
  - Add i18n run target task - [6ccd3ee]( https://github.com/royriojas/build-workflow/commit/6ccd3ee ), [royriojas](https://github.com/royriojas), 08/09/2014 18:25:40

    run it calling
    
    `grunt run-i18n-targets`
    
## v0.0.16
- **Build Scripts Changes**
  - Include grunt-codepainter - [b9f06f3]( https://github.com/royriojas/build-workflow/commit/b9f06f3 ), [royriojas](https://github.com/royriojas), 08/09/2014 10:31:06

    
## v0.0.15
- **Build Scripts Changes**
  - Properly load the package.json of the host project - [dcc84c0]( https://github.com/royriojas/build-workflow/commit/dcc84c0 ), [royriojas](https://github.com/royriojas), 08/09/2014 02:11:22

    
## v0.0.14
- **Build Scripts Changes**
  - Fix Added JSON lint task - [b3c866b]( https://github.com/royriojas/build-workflow/commit/b3c866b ), [royriojas](https://github.com/royriojas), 08/09/2014 02:08:01

    
## v0.0.13
- **Build Scripts Changes**
  - Fix codepainter task - [0982b1c]( https://github.com/royriojas/build-workflow/commit/0982b1c ), [royriojas](https://github.com/royriojas), 08/09/2014 00:30:25

    
  - Fix codepainter - [0b1b2b5]( https://github.com/royriojas/build-workflow/commit/0b1b2b5 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:27:33

    
## v0.0.12
- **Build Scripts Changes**
  - Added grunt-bump - [d9919c8]( https://github.com/royriojas/build-workflow/commit/d9919c8 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:21:07

    
- **Enhancements**
  - Properly made docco-husky to work - [2585fba]( https://github.com/royriojas/build-workflow/commit/2585fba ), [royriojas](https://github.com/royriojas), 08/09/2014 00:18:08

    
## v0.0.11
- **Refactoring**
  - Removed wrong jscs package - [c36f7d5]( https://github.com/royriojas/build-workflow/commit/c36f7d5 ), [royriojas](https://github.com/royriojas), 05/09/2014 22:28:09

    
- **Enhancements**
  - Update to latest dependency - [8c530b5]( https://github.com/royriojas/build-workflow/commit/8c530b5 ), [royriojas](https://github.com/royriojas), 05/09/2014 22:26:24

    
## v0.0.10
- **Enhancements**
  - Generate API docs and annotated docs - [3f25b37]( https://github.com/royriojas/build-workflow/commit/3f25b37 ), [royriojas](https://github.com/royriojas), 05/09/2014 17:03:58

    - annotated docs generated with `docco`
    - API docs using yuidoc
    
- **Bug Fixes**
  - Fix yuidoc configuration - [d7e67f7]( https://github.com/royriojas/build-workflow/commit/d7e67f7 ), [royriojas](https://github.com/royriojas), 05/09/2014 16:47:27

    
  - Fix docco documentation generator - [573863f]( https://github.com/royriojas/build-workflow/commit/573863f ), [royriojas](https://github.com/royriojas), 05/09/2014 16:33:10

    
## v0.0.9
- **Enhancements**
  - Structural changes - [4739fe6]( https://github.com/royriojas/build-workflow/commit/4739fe6 ), [royriojas](https://github.com/royriojas), 05/09/2014 15:05:49

    
- **Build Scripts Changes**
  - Initial commit - [2b88dc9]( https://github.com/royriojas/build-workflow/commit/2b88dc9 ), [Roy Riojas](https://github.com/Roy Riojas), 05/09/2014 04:09:02

    
