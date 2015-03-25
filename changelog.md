
# Build Workflow - Changelog
## v2.0.5
- **Build Scripts Changes**
  - Release v2.0.5 - [538ff82]( https://github.com/royriojas/build-workflow/commit/538ff82 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:51:11

    
#### bundler
- **Bug Fixes**
  - Use a new bundler per each task. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [57a78e4]( https://github.com/royriojas/build-workflow/commit/57a78e4 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:50:05

    
## v2.0.4
- **Build Scripts Changes**
  - Release v2.0.4 - [c24e0bc]( https://github.com/royriojas/build-workflow/commit/c24e0bc ), [royriojas](https://github.com/royriojas), 24/03/2015 18:40:29

    
#### bundler
- **Bug Fixes**
  - Return after error in bundle. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [9994b79]( https://github.com/royriojas/build-workflow/commit/9994b79 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:40:14

    
## v2.0.3
- **Build Scripts Changes**
  - Release v2.0.3 - [8e4621d]( https://github.com/royriojas/build-workflow/commit/8e4621d ), [royriojas](https://github.com/royriojas), 24/03/2015 18:38:33

    
#### bundler
- **Bug Fixes**
  - Call done when the uglify task finishes. Related to [#4](https://github.com/royriojas/build-workflow/issues/4) - [4aa375b]( https://github.com/royriojas/build-workflow/commit/4aa375b ), [royriojas](https://github.com/royriojas), 24/03/2015 18:34:59

    
#### Changelog
- **Documentation**
  - generated changelog - [d031e6f]( https://github.com/royriojas/build-workflow/commit/d031e6f ), [royriojas](https://github.com/royriojas), 24/03/2015 18:13:44

    
## v2.0.2
- **Build Scripts Changes**
  - Release v2.0.2 - [9b1ecff]( https://github.com/royriojas/build-workflow/commit/9b1ecff ), [royriojas](https://github.com/royriojas), 24/03/2015 18:13:03

    
#### bundler
- **Bug Fixes**
  - Fixes issue with the generation of the minified version. Fix [#4](https://github.com/royriojas/build-workflow/issues/4) - [ae3c7b0]( https://github.com/royriojas/build-workflow/commit/ae3c7b0 ), [royriojas](https://github.com/royriojas), 24/03/2015 18:12:51

    
#### Changelog
- **Documentation**
  - generated changelog - [e43249d]( https://github.com/royriojas/build-workflow/commit/e43249d ), [royriojas](https://github.com/royriojas), 24/03/2015 17:49:14

    
## v2.0.1
- **Build Scripts Changes**
  - Release v2.0.1 - [84c04a8]( https://github.com/royriojas/build-workflow/commit/84c04a8 ), [royriojas](https://github.com/royriojas), 24/03/2015 17:48:51

    
#### Changelog
- **Documentation**
  - generated changelog - [749a234]( https://github.com/royriojas/build-workflow/commit/749a234 ), [royriojas](https://github.com/royriojas), 24/03/2015 17:48:29

    
## v2.0.0
- **Build Scripts Changes**
  - Release v2.0.0 - [3376355]( https://github.com/royriojas/build-workflow/commit/3376355 ), [royriojas](https://github.com/royriojas), 24/03/2015 17:18:18

    
## v1.0.24
- **Build Scripts Changes**
  - Release v1.0.24 - [4f7d667]( https://github.com/royriojas/build-workflow/commit/4f7d667 ), [royriojas](https://github.com/royriojas), 24/03/2015 17:17:50

    
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
    
#### Changelog
- **Documentation**
  - generated changelog - [1a3ce31]( https://github.com/royriojas/build-workflow/commit/1a3ce31 ), [royriojas](https://github.com/royriojas), 20/03/2015 19:13:29

    
## v1.0.23
- **Build Scripts Changes**
  - Release v1.0.23 - [9b521d0]( https://github.com/royriojas/build-workflow/commit/9b521d0 ), [royriojas](https://github.com/royriojas), 20/03/2015 19:11:36

    
#### Changelog
- **Build Scripts Changes**
  - Add changelogx dep - [656bbbe]( https://github.com/royriojas/build-workflow/commit/656bbbe ), [royriojas](https://github.com/royriojas), 20/03/2015 19:11:12

    
## v1.0.22
- **Build Scripts Changes**
  - Release v1.0.22 - [02d413c]( https://github.com/royriojas/build-workflow/commit/02d413c ), [royriojas](https://github.com/royriojas), 20/03/2015 18:52:49

    
#### esformatter/prepush
- **Build Scripts Changes**
  - Fail when the task grunt prepush is executed and files needed beautification. Fixes [#3](https://github.com/royriojas/build-workflow/issues/3) - [b42be54]( https://github.com/royriojas/build-workflow/commit/b42be54 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:52:18

    
## v1.0.21
- **Build Scripts Changes**
  - Release v1.0.21 - [fa28888]( https://github.com/royriojas/build-workflow/commit/fa28888 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:27:24

    
  - Udapted prepush dependency - [1e1e7a9]( https://github.com/royriojas/build-workflow/commit/1e1e7a9 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:25:36

    
#### hooks
- **Build Scripts Changes**
  - Add prepush tasks in package.json - [ee141f2]( https://github.com/royriojas/build-workflow/commit/ee141f2 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:26:54

    
#### npm scripts
- **Build Scripts Changes**
  - Add install hooks from npm scripts - [454b482]( https://github.com/royriojas/build-workflow/commit/454b482 ), [royriojas](https://github.com/royriojas), 20/03/2015 18:00:13

    
#### jscs
- **Enhancements**
  - use the full path of the file in the reporter so IDEs like intellij IDEA can parse the output and link to the files - [1814421]( https://github.com/royriojas/build-workflow/commit/1814421 ), [royriojas](https://github.com/royriojas), 20/03/2015 17:58:32

    
## v1.0.20
- **Build Scripts Changes**
  - Release v1.0.20 - [0d21ac3]( https://github.com/royriojas/build-workflow/commit/0d21ac3 ), [royriojas](https://github.com/royriojas), 19/03/2015 12:32:09

    
#### karma helpers
- **Bug Fixes**
  - Fix issue when trying to use the karma helpers - [8e64ea6]( https://github.com/royriojas/build-workflow/commit/8e64ea6 ), [royriojas](https://github.com/royriojas), 19/03/2015 12:31:38

    
## v1.0.19
- **Build Scripts Changes**
  - Release v1.0.19 - [21aeffe]( https://github.com/royriojas/build-workflow/commit/21aeffe ), [royriojas](https://github.com/royriojas), 18/03/2015 14:22:57

    
#### Build script cleanup
- **Refactoring**
  - Remove unused deps - [d5dd218]( https://github.com/royriojas/build-workflow/commit/d5dd218 ), [royriojas](https://github.com/royriojas), 18/03/2015 14:22:48

    
## v1.0.18
- **Build Scripts Changes**
  - Release v1.0.18 - [fae9324]( https://github.com/royriojas/build-workflow/commit/fae9324 ), [royriojas](https://github.com/royriojas), 18/03/2015 14:01:37

    
#### dotify
- **Build Scripts Changes**
  - Add browesrify-transform-tools as dep - [a7b4f24]( https://github.com/royriojas/build-workflow/commit/a7b4f24 ), [royriojas](https://github.com/royriojas), 18/03/2015 14:01:30

    
## v1.0.17
- **Build Scripts Changes**
  - Release v1.0.17 - [089bf27]( https://github.com/royriojas/build-workflow/commit/089bf27 ), [royriojas](https://github.com/royriojas), 18/03/2015 13:25:30

    
#### markdown-expander
- **Build Scripts Changes**
  - add marked as a dependency - [f6dcf84]( https://github.com/royriojas/build-workflow/commit/f6dcf84 ), [royriojas](https://github.com/royriojas), 18/03/2015 13:24:31

    
## v1.0.16
- **Build Scripts Changes**
  - Release v1.0.16 - [6d097ca]( https://github.com/royriojas/build-workflow/commit/6d097ca ), [royriojas](https://github.com/royriojas), 18/03/2015 13:18:13

    
#### esbeautifier
- **Features**
  - keep lines before methods in objects - [10abf35]( https://github.com/royriojas/build-workflow/commit/10abf35 ), [royriojas](https://github.com/royriojas), 18/03/2015 13:18:06

    
## v1.0.15
- **Build Scripts Changes**
  - Release v1.0.15 - [a6f1c2d]( https://github.com/royriojas/build-workflow/commit/a6f1c2d ), [royriojas](https://github.com/royriojas), 18/03/2015 03:01:29

    
## v1.0.14
- **Build Scripts Changes**
  - Release v1.0.14 - [1dae660]( https://github.com/royriojas/build-workflow/commit/1dae660 ), [royriojas](https://github.com/royriojas), 18/03/2015 03:01:06

    
  - Remove peer dependencies, add missing deps - [9537e5b]( https://github.com/royriojas/build-workflow/commit/9537e5b ), [royriojas](https://github.com/royriojas), 18/03/2015 03:00:49

    
## v1.0.13
- **Build Scripts Changes**
  - Release v1.0.13 - [919115e]( https://github.com/royriojas/build-workflow/commit/919115e ), [royriojas](https://github.com/royriojas), 18/03/2015 02:52:58

    
  - Remove peer dependencies - [acb72e0]( https://github.com/royriojas/build-workflow/commit/acb72e0 ), [royriojas](https://github.com/royriojas), 18/03/2015 02:52:48

    
## v1.0.12
- **Build Scripts Changes**
  - Release v1.0.12 - [632ea37]( https://github.com/royriojas/build-workflow/commit/632ea37 ), [royriojas](https://github.com/royriojas), 18/03/2015 02:48:46

    
- **Enhancements**
  - Move eslint and eslint formatters to be dependencies of build-workflow - [cf2b486]( https://github.com/royriojas/build-workflow/commit/cf2b486 ), [royriojas](https://github.com/royriojas), 18/03/2015 02:48:10

    
## v1.0.11
- **Build Scripts Changes**
  - Release v1.0.11 - [958813c]( https://github.com/royriojas/build-workflow/commit/958813c ), [royriojas](https://github.com/royriojas), 15/03/2015 03:17:20

    
- **Enhancements**
  - Replace esformatter with esbeautifier, and normalized log messages for jscs, eslint and esformatter - [bbeba72]( https://github.com/royriojas/build-workflow/commit/bbeba72 ), [royriojas](https://github.com/royriojas), 15/03/2015 03:17:07

    
## v1.0.10
- **Build Scripts Changes**
  - Release v1.0.10 - [fcd3d23]( https://github.com/royriojas/build-workflow/commit/fcd3d23 ), [royriojas](https://github.com/royriojas), 07/03/2015 04:24:29

    
- **Features**
  - create-pkg-json will extend the received pkg file - [f1af6f1]( https://github.com/royriojas/build-workflow/commit/f1af6f1 ), [royriojas](https://github.com/royriojas), 07/03/2015 04:24:19

    
## v1.0.9
- **Build Scripts Changes**
  - Release v1.0.9 - [ea21ec7]( https://github.com/royriojas/build-workflow/commit/ea21ec7 ), [royriojas](https://github.com/royriojas), 06/03/2015 01:57:04

    
- **Features**
  - Add cache for the jscs task - [2e5772c]( https://github.com/royriojas/build-workflow/commit/2e5772c ), [royriojas](https://github.com/royriojas), 06/03/2015 01:48:18

    
## v1.0.8
- **Build Scripts Changes**
  - Release v1.0.8 - [9cf7cb3]( https://github.com/royriojas/build-workflow/commit/9cf7cb3 ), [royriojas](https://github.com/royriojas), 05/03/2015 13:38:01

    
- **Bug Fixes**
  - skip-cache on eslint on errors too - [e223c1a]( https://github.com/royriojas/build-workflow/commit/e223c1a ), [royriojas](https://github.com/royriojas), 05/03/2015 13:37:35

    
## v1.0.7
- **Build Scripts Changes**
  - Release v1.0.7 - [1ae4352]( https://github.com/royriojas/build-workflow/commit/1ae4352 ), [royriojas](https://github.com/royriojas), 04/03/2015 02:07:35

    
  - enabling eslint on a given file - [644207d]( https://github.com/royriojas/build-workflow/commit/644207d ), [royriojas](https://github.com/royriojas), 04/03/2015 02:07:22

    
## v1.0.6
- **Build Scripts Changes**
  - Release v1.0.6 - [bab8c6d]( https://github.com/royriojas/build-workflow/commit/bab8c6d ), [royriojas](https://github.com/royriojas), 03/03/2015 10:47:50

    
- **undefined**
  - maxBuffer exceeded fixed. - [b17a55e]( https://github.com/royriojas/build-workflow/commit/b17a55e ), [royriojas](https://github.com/royriojas), 03/03/2015 10:46:54

    
## v1.0.5
- **Build Scripts Changes**
  - Release v1.0.5 - [9c972ef]( https://github.com/royriojas/build-workflow/commit/9c972ef ), [royriojas](https://github.com/royriojas), 03/03/2015 10:02:21

    
- **Enhancements**
  - move log messages to grunt verbose - [8a09a7a]( https://github.com/royriojas/build-workflow/commit/8a09a7a ), [royriojas](https://github.com/royriojas), 03/03/2015 10:02:13

    
## v1.0.4
- **Build Scripts Changes**
  - Release v1.0.4 - [874ce92]( https://github.com/royriojas/build-workflow/commit/874ce92 ), [royriojas](https://github.com/royriojas), 03/03/2015 04:00:10

    
- **Features**
  - Adding cache and better error reporting for eslint - [6db574e]( https://github.com/royriojas/build-workflow/commit/6db574e ), [royriojas](https://github.com/royriojas), 03/03/2015 03:59:43

    
## v1.0.3
- **Build Scripts Changes**
  - Release v1.0.3 - [a6e2e68]( https://github.com/royriojas/build-workflow/commit/a6e2e68 ), [royriojas](https://github.com/royriojas), 02/03/2015 21:38:48

    
  - Remove quote-props. Seems a bit dangerous - [aad5dee]( https://github.com/royriojas/build-workflow/commit/aad5dee ), [royriojas](https://github.com/royriojas), 02/03/2015 21:37:27

    
## v1.0.2
- **Build Scripts Changes**
  - Release v1.0.2 - [09d3a44]( https://github.com/royriojas/build-workflow/commit/09d3a44 ), [royriojas](https://github.com/royriojas), 02/03/2015 11:00:28

    
- **Documentation**
  - Add better configuration for esformatter-jsx - [71b261f]( https://github.com/royriojas/build-workflow/commit/71b261f ), [royriojas](https://github.com/royriojas), 02/03/2015 11:00:15

    
## v1.0.1
- **Build Scripts Changes**
  - Release v1.0.1 - [f286c3f]( https://github.com/royriojas/build-workflow/commit/f286c3f ), [royriojas](https://github.com/royriojas), 02/03/2015 02:01:31

    
- **Refactoring**
  - configuration for esformatter-jsx - [472a206]( https://github.com/royriojas/build-workflow/commit/472a206 ), [royriojas](https://github.com/royriojas), 02/03/2015 02:01:18

    
## v1.0.0
- **Build Scripts Changes**
  - Release v1.0.0 - [fd5e20d]( https://github.com/royriojas/build-workflow/commit/fd5e20d ), [royriojas](https://github.com/royriojas), 02/03/2015 01:48:00

    
## v1.1.0
- **Build Scripts Changes**
  - Release v1.1.0 - [6d09d94]( https://github.com/royriojas/build-workflow/commit/6d09d94 ), [royriojas](https://github.com/royriojas), 02/03/2015 01:44:38

    
  - Release v1.0.0 - [34d97db]( https://github.com/royriojas/build-workflow/commit/34d97db ), [royriojas](https://github.com/royriojas), 02/03/2015 01:43:09

    
- **Refactoring**
  - started to move functionality to their own repos - [c419cd3]( https://github.com/royriojas/build-workflow/commit/c419cd3 ), [royriojas](https://github.com/royriojas), 02/03/2015 01:44:11

    
## v0.1.16
- **Build Scripts Changes**
  - Release v0.1.16 - [d594839]( https://github.com/royriojas/build-workflow/commit/d594839 ), [royriojas](https://github.com/royriojas), 27/02/2015 01:36:22

    
  - use esformatter-jsx instead of esformatter-jsx-ignore - [58e2a67]( https://github.com/royriojas/build-workflow/commit/58e2a67 ), [royriojas](https://github.com/royriojas), 27/02/2015 01:36:00

    
#### build-updates
- **Build Scripts Changes**
  - Update jsx-ignore to not use esprima from substack fork - [3a0ef45]( https://github.com/royriojas/build-workflow/commit/3a0ef45 ), [royriojas](https://github.com/royriojas), 26/02/2015 20:24:20

    
## v0.1.15
- **Build Scripts Changes**
  - Release v0.1.15 - [8f4acec]( https://github.com/royriojas/build-workflow/commit/8f4acec ), [royriojas](https://github.com/royriojas), 26/02/2015 19:47:03

    
#### build-deps
- **Refactoring**
  - update dependencies - [6471b75]( https://github.com/royriojas/build-workflow/commit/6471b75 ), [royriojas](https://github.com/royriojas), 26/02/2015 19:46:53

    
## v0.1.14
- **Build Scripts Changes**
  - Release v0.1.14 - [7cd38f5]( https://github.com/royriojas/build-workflow/commit/7cd38f5 ), [royriojas](https://github.com/royriojas), 26/02/2015 18:56:35

    
#### new-validation
- **Refactoring**
  - (new-validation) - [b800785]( https://github.com/royriojas/build-workflow/commit/b800785 ), [royriojas](https://github.com/royriojas), 26/02/2015 18:55:17

    
## v0.1.13
- **Build Scripts Changes**
  - Release v0.1.13 - [93930e0]( https://github.com/royriojas/build-workflow/commit/93930e0 ), [royriojas](https://github.com/royriojas), 26/02/2015 17:27:41

    
## v0.1.12
- **Build Scripts Changes**
  - Release v0.1.12 - [3daf226]( https://github.com/royriojas/build-workflow/commit/3daf226 ), [royriojas](https://github.com/royriojas), 26/02/2015 17:27:06

    
- **Enhancements**
  - Update deps - [d2e4428]( https://github.com/royriojas/build-workflow/commit/d2e4428 ), [royriojas](https://github.com/royriojas), 26/02/2015 17:21:21

    
## v0.1.11
- **Build Scripts Changes**
  - Release v0.1.11 - [9b519b6]( https://github.com/royriojas/build-workflow/commit/9b519b6 ), [royriojas](https://github.com/royriojas), 26/02/2015 15:59:02

    
- **Enhancements**
  - make some rules warnings instead of deal breakers - [2f95848]( https://github.com/royriojas/build-workflow/commit/2f95848 ), [royriojas](https://github.com/royriojas), 26/02/2015 15:57:20

    
## v0.1.10
- **Build Scripts Changes**
  - Release v0.1.10 - [00eedc4]( https://github.com/royriojas/build-workflow/commit/00eedc4 ), [royriojas](https://github.com/royriojas), 26/02/2015 15:00:12

    
#### compatibility with 0.1.8
- **Bug Fixes**
  - fixed - [6ad713e]( https://github.com/royriojas/build-workflow/commit/6ad713e ), [royriojas](https://github.com/royriojas), 26/02/2015 15:00:03

    
## v0.1.9
- **Build Scripts Changes**
  - Release v0.1.9 - [cf62b80]( https://github.com/royriojas/build-workflow/commit/cf62b80 ), [royriojas](https://github.com/royriojas), 26/02/2015 13:57:27

    
  - Preparing for esformatter and eslint - [f457907]( https://github.com/royriojas/build-workflow/commit/f457907 ), [royriojas](https://github.com/royriojas), 24/02/2015 16:25:25

    
  - Preparing for esformatter - [d449e91]( https://github.com/royriojas/build-workflow/commit/d449e91 ), [royriojas](https://github.com/royriojas), 24/02/2015 15:18:25

    
- **Refactoring**
  - generalize the cache solution - [f2f89aa]( https://github.com/royriojas/build-workflow/commit/f2f89aa ), [royriojas](https://github.com/royriojas), 26/02/2015 13:56:28

    
  - use flat-cache from npm - [b91a5ef]( https://github.com/royriojas/build-workflow/commit/b91a5ef ), [royriojas](https://github.com/royriojas), 26/02/2015 13:06:33

    
  - Move to esformatter+eslint - [7c18053]( https://github.com/royriojas/build-workflow/commit/7c18053 ), [royriojas](https://github.com/royriojas), 25/02/2015 03:09:22

    
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
- **Build Scripts Changes**
  - Release v0.1.8 - [b26f9d5]( https://github.com/royriojas/build-workflow/commit/b26f9d5 ), [royriojas](https://github.com/royriojas), 10/02/2015 11:51:02

    
- **Enhancements**
  - Only run prepush if grunt is available - [30055d4]( https://github.com/royriojas/build-workflow/commit/30055d4 ), [royriojas](https://github.com/royriojas), 10/02/2015 11:50:49

    
## v0.1.7
- **Build Scripts Changes**
  - Release v0.1.7 - [9185a1c]( https://github.com/royriojas/build-workflow/commit/9185a1c ), [royriojas](https://github.com/royriojas), 30/01/2015 03:03:56

    
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
- **Build Scripts Changes**
  - Release v0.1.6 - [c243d94]( https://github.com/royriojas/build-workflow/commit/c243d94 ), [royriojas](https://github.com/royriojas), 29/11/2014 04:04:47

    
- **Refactoring**
  - Add option to skip strictify transform on node_modules - [231b4fb]( https://github.com/royriojas/build-workflow/commit/231b4fb ), [royriojas](https://github.com/royriojas), 29/11/2014 04:04:40

    
## v0.1.5
- **Build Scripts Changes**
  - Release v0.1.5 - [8908820]( https://github.com/royriojas/build-workflow/commit/8908820 ), [royriojas](https://github.com/royriojas), 29/11/2014 02:48:48

    
- **Refactoring**
  - Remove need for test-helper.js - [2e021b8]( https://github.com/royriojas/build-workflow/commit/2e021b8 ), [royriojas](https://github.com/royriojas), 29/11/2014 02:43:54

    
  - Make sure we use single quotes for strings - [a538739]( https://github.com/royriojas/build-workflow/commit/a538739 ), [royriojas](https://github.com/royriojas), 29/11/2014 02:20:01

    
## v0.1.4
- **Build Scripts Changes**
  - Release v0.1.4 - [f78ee51]( https://github.com/royriojas/build-workflow/commit/f78ee51 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:35:53

    
- **Refactoring**
  - Make sure we use single quotes - [7a22f5e]( https://github.com/royriojas/build-workflow/commit/7a22f5e ), [royriojas](https://github.com/royriojas), 29/11/2014 01:34:23

    
- **Other changes**
  - Update usage.md - [c4c2e7f]( https://github.com/royriojas/build-workflow/commit/c4c2e7f ), [Roy Riojas](https://github.com/Roy Riojas), 26/11/2014 03:29:34

    Fix docs
  - Update usage.md - [7315c8b]( https://github.com/royriojas/build-workflow/commit/7315c8b ), [Roy Riojas](https://github.com/Roy Riojas), 26/11/2014 03:26:33

    DOC: Fix docs markdown
## v0.1.3
- **Build Scripts Changes**
  - Release v0.1.3 - [d5db9bb]( https://github.com/royriojas/build-workflow/commit/d5db9bb ), [royriojas](https://github.com/royriojas), 29/11/2014 01:33:13

    
  - Add stringformat dep - [255ab33]( https://github.com/royriojas/build-workflow/commit/255ab33 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:14:40

    
- **Enhancements**
  - Add shimify in replace of browserify-shim - [51820e4]( https://github.com/royriojas/build-workflow/commit/51820e4 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:32:45

    
  - Replacement for browserify shim to avoid add configuration info to the package.json - [efa2eb3]( https://github.com/royriojas/build-workflow/commit/efa2eb3 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:19:48

    
  - Add consoleify transform - [eca6df5]( https://github.com/royriojas/build-workflow/commit/eca6df5 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:19:12

    
- **Refactoring**
  - remove the "demo" string from the demo-structure files - [2e16db6]( https://github.com/royriojas/build-workflow/commit/2e16db6 ), [royriojas](https://github.com/royriojas), 29/11/2014 01:17:05

    
  - Add formatted files - [f5d28a4]( https://github.com/royriojas/build-workflow/commit/f5d28a4 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:10:51

    
- **Documentation**
  - Fix documenation - [0a07349]( https://github.com/royriojas/build-workflow/commit/0a07349 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:14:43

    
## v0.1.2
- **Build Scripts Changes**
  - Release v0.1.2 - [b505f24]( https://github.com/royriojas/build-workflow/commit/b505f24 ), [royriojas](https://github.com/royriojas), 26/11/2014 03:08:29

    
## v0.1.1
- **Build Scripts Changes**
  - Release v0.1.1 - [264bcab]( https://github.com/royriojas/build-workflow/commit/264bcab ), [royriojas](https://github.com/royriojas), 26/11/2014 03:05:56

    
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
- **Build Scripts Changes**
  - Release v0.0.35 - [ddd568d]( https://github.com/royriojas/build-workflow/commit/ddd568d ), [royriojas](https://github.com/royriojas), 25/10/2014 21:25:21

    
- **Enhancements**
  - Add common globlals to `.jshintrc` - [5dd09e2]( https://github.com/royriojas/build-workflow/commit/5dd09e2 ), [royriojas](https://github.com/royriojas), 25/10/2014 21:25:06

    
## v0.0.34
- **Build Scripts Changes**
  - Release v0.0.34 - [a411bee]( https://github.com/royriojas/build-workflow/commit/a411bee ), [royriojas](https://github.com/royriojas), 25/10/2014 21:08:12

    
  - Remove unneeded console log - [247d7a8]( https://github.com/royriojas/build-workflow/commit/247d7a8 ), [royriojas](https://github.com/royriojas), 10/10/2014 20:13:29

    
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
    
- **Bug Fixes**
  - Fix for undefined arguments inside the pre-push hook - [bfca07d]( https://github.com/royriojas/build-workflow/commit/bfca07d ), [royriojas](https://github.com/royriojas), 10/10/2014 20:12:23

    
## v0.0.33
- **Build Scripts Changes**
  - Release v0.0.33 - [2270ad2]( https://github.com/royriojas/build-workflow/commit/2270ad2 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:23:23

    
- **Refactoring**
  - properly handle initialization errors - [6cb4e4f]( https://github.com/royriojas/build-workflow/commit/6cb4e4f ), [royriojas](https://github.com/royriojas), 09/10/2014 02:23:16

    
## v0.0.32
- **Build Scripts Changes**
  - Release v0.0.32 - [a6488d2]( https://github.com/royriojas/build-workflow/commit/a6488d2 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:15:48

    
- **Enhancements**
  - properly show `common-config` load error - [9f8102b]( https://github.com/royriojas/build-workflow/commit/9f8102b ), [royriojas](https://github.com/royriojas), 09/10/2014 02:13:36

    
  - Improve `check-valid` and `pre-push` - [cc7f086]( https://github.com/royriojas/build-workflow/commit/cc7f086 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:11:39

    
  - Add option to not replace the pkg.version inside the grunt tasks - [03ef1eb]( https://github.com/royriojas/build-workflow/commit/03ef1eb ), [royriojas](https://github.com/royriojas), 08/10/2014 23:49:28

    
- **Features**
  - Fix twig generator task - [f2aa656]( https://github.com/royriojas/build-workflow/commit/f2aa656 ), [royriojas](https://github.com/royriojas), 09/10/2014 02:10:31

    
## v0.0.31
- **Build Scripts Changes**
  - Release v0.0.31 - [5d423b8]( https://github.com/royriojas/build-workflow/commit/5d423b8 ), [royriojas](https://github.com/royriojas), 08/10/2014 23:48:24

    
## v0.0.30
- **Build Scripts Changes**
  - Release v0.0.30 - [3c10c16]( https://github.com/royriojas/build-workflow/commit/3c10c16 ), [royriojas](https://github.com/royriojas), 12/09/2014 12:12:41

    
- **Refactoring**
  - Remove not used code - [925444a]( https://github.com/royriojas/build-workflow/commit/925444a ), [royriojas](https://github.com/royriojas), 12/09/2014 12:12:14

    
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [805a18b]( https://github.com/royriojas/build-workflow/commit/805a18b ), [royriojas](https://github.com/royriojas), 12/09/2014 11:47:47

    
## v0.0.29
- **Build Scripts Changes**
  - Release v0.0.29 - [603b542]( https://github.com/royriojas/build-workflow/commit/603b542 ), [royriojas](https://github.com/royriojas), 12/09/2014 11:15:00

    
- **Enhancements**
  - Add Karma Helper to make easier to declare the preprocessors - [63fad82]( https://github.com/royriojas/build-workflow/commit/63fad82 ), [royriojas](https://github.com/royriojas), 12/09/2014 11:14:16

    
## v0.0.28
- **Build Scripts Changes**
  - Release v0.0.28 - [82adf8a]( https://github.com/royriojas/build-workflow/commit/82adf8a ), [royriojas](https://github.com/royriojas), 12/09/2014 10:56:48

    
- **Enhancements**
  - Add test helper - [b49faf9]( https://github.com/royriojas/build-workflow/commit/b49faf9 ), [royriojas](https://github.com/royriojas), 12/09/2014 10:56:17

    
- **Documentation**
  - Remove confusing description from  documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [3ff3749]( https://github.com/royriojas/build-workflow/commit/3ff3749 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:44:05

    
## v0.0.27
- **Build Scripts Changes**
  - Release v0.0.27 - [c3d67be]( https://github.com/royriojas/build-workflow/commit/c3d67be ), [royriojas](https://github.com/royriojas), 12/09/2014 00:37:59

    
- **Documentation**
  - Add more documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [11f2342]( https://github.com/royriojas/build-workflow/commit/11f2342 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:37:07

    
- **Enhancements**
  - changelog will load even when deps are not installed - [5e997d3]( https://github.com/royriojas/build-workflow/commit/5e997d3 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:23:21

    
## v0.0.26
- **Build Scripts Changes**
  - Release v0.0.26 - [9708015]( https://github.com/royriojas/build-workflow/commit/9708015 ), [royriojas](https://github.com/royriojas), 12/09/2014 00:11:22

    
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
- **Build Scripts Changes**
  - Release v0.0.25 - [57cbabf]( https://github.com/royriojas/build-workflow/commit/57cbabf ), [royriojas](https://github.com/royriojas), 11/09/2014 12:15:09

    
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
- **Build Scripts Changes**
  - Release v0.0.24 - [02845e4]( https://github.com/royriojas/build-workflow/commit/02845e4 ), [royriojas](https://github.com/royriojas), 10/09/2014 09:48:19

    
- **Documentation**
  - Add more documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [304413b]( https://github.com/royriojas/build-workflow/commit/304413b ), [royriojas](https://github.com/royriojas), 10/09/2014 09:48:04

    
## v0.0.23
- **Build Scripts Changes**
  - Release v0.0.23 - [b29f954]( https://github.com/royriojas/build-workflow/commit/b29f954 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:43:50

    
  - Release v0.0.22 - [d550074]( https://github.com/royriojas/build-workflow/commit/d550074 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:12:06

    
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [50d6594]( https://github.com/royriojas/build-workflow/commit/50d6594 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:43:38

    
## v0.0.22
- **Build Scripts Changes**
  - Release v0.0.22 - [fd473ff]( https://github.com/royriojas/build-workflow/commit/fd473ff ), [royriojas](https://github.com/royriojas), 10/09/2014 03:11:26

    
  - Release v0.0.21 - [9c4c4a7]( https://github.com/royriojas/build-workflow/commit/9c4c4a7 ), [royriojas](https://github.com/royriojas), 09/09/2014 16:30:53

    
- **Documentation**
  - Added documentation [[#1](https://github.com/royriojas/build-workflow/issues/1)] - [c403b34]( https://github.com/royriojas/build-workflow/commit/c403b34 ), [royriojas](https://github.com/royriojas), 10/09/2014 03:11:20

    
- **Bug Fixes**
  - Fix missing title in exec:yuidoc task - [a473e0d]( https://github.com/royriojas/build-workflow/commit/a473e0d ), [royriojas](https://github.com/royriojas), 09/09/2014 16:30:53

    
  - Fix missing title in exec:yuidoc task - [9fd1183]( https://github.com/royriojas/build-workflow/commit/9fd1183 ), [royriojas](https://github.com/royriojas), 09/09/2014 16:21:49

    
## v0.0.21
- **Build Scripts Changes**
  - Release v0.0.21 - [23b176d]( https://github.com/royriojas/build-workflow/commit/23b176d ), [royriojas](https://github.com/royriojas), 09/09/2014 16:30:34

    
- **Bug Fixes**
  - Fix missing title in exec:yuidoc task - [ffa86ad]( https://github.com/royriojas/build-workflow/commit/ffa86ad ), [royriojas](https://github.com/royriojas), 09/09/2014 16:22:55

    
## v0.0.20
- **Build Scripts Changes**
  - Release v0.0.20 - [d0efd3f]( https://github.com/royriojas/build-workflow/commit/d0efd3f ), [royriojas](https://github.com/royriojas), 08/09/2014 22:22:20

    
  - added script to install deps - [ffec355]( https://github.com/royriojas/build-workflow/commit/ffec355 ), [royriojas](https://github.com/royriojas), 08/09/2014 22:19:55

    
  - Added grunt-exec - [3b57df1]( https://github.com/royriojas/build-workflow/commit/3b57df1 ), [royriojas](https://github.com/royriojas), 08/09/2014 21:05:37

    
  - remove check-kwl and markdown-expander - [3dd1ff0]( https://github.com/royriojas/build-workflow/commit/3dd1ff0 ), [royriojas](https://github.com/royriojas), 08/09/2014 21:02:16

    
## v0.0.19
- **Build Scripts Changes**
  - Release v0.0.19 - [96a00ae]( https://github.com/royriojas/build-workflow/commit/96a00ae ), [royriojas](https://github.com/royriojas), 08/09/2014 18:26:57

    
  - Release v0.0.18 - [ab8d9d1]( https://github.com/royriojas/build-workflow/commit/ab8d9d1 ), [royriojas](https://github.com/royriojas), 08/09/2014 18:26:44

    
## v0.0.18
- **Build Scripts Changes**
  - Release v0.0.18 - [c8fe64a]( https://github.com/royriojas/build-workflow/commit/c8fe64a ), [royriojas](https://github.com/royriojas), 08/09/2014 18:25:48

    
- **Enhancements**
  - Add i18n run target task - [6ccd3ee]( https://github.com/royriojas/build-workflow/commit/6ccd3ee ), [royriojas](https://github.com/royriojas), 08/09/2014 18:25:40

    run it calling
    
    `grunt run-i18n-targets`
    
## v0.0.17
- **Build Scripts Changes**
  - Release v0.0.17 - [6a3afd8]( https://github.com/royriojas/build-workflow/commit/6a3afd8 ), [royriojas](https://github.com/royriojas), 08/09/2014 10:32:36

    
  - Release v0.0.16 - [3b4791c]( https://github.com/royriojas/build-workflow/commit/3b4791c ), [royriojas](https://github.com/royriojas), 08/09/2014 10:32:01

    
## v0.0.16
- **Build Scripts Changes**
  - Release v0.0.16 - [068c888]( https://github.com/royriojas/build-workflow/commit/068c888 ), [royriojas](https://github.com/royriojas), 08/09/2014 10:31:23

    
  - Include grunt-codepainter - [b9f06f3]( https://github.com/royriojas/build-workflow/commit/b9f06f3 ), [royriojas](https://github.com/royriojas), 08/09/2014 10:31:06

    
## v0.0.15
- **Build Scripts Changes**
  - Release v0.0.15 - [90fe760]( https://github.com/royriojas/build-workflow/commit/90fe760 ), [royriojas](https://github.com/royriojas), 08/09/2014 02:11:36

    
  - Properly load the package.json of the host project - [dcc84c0]( https://github.com/royriojas/build-workflow/commit/dcc84c0 ), [royriojas](https://github.com/royriojas), 08/09/2014 02:11:22

    
## v0.0.14
- **Build Scripts Changes**
  - Release v0.0.14 - [c335ccd]( https://github.com/royriojas/build-workflow/commit/c335ccd ), [royriojas](https://github.com/royriojas), 08/09/2014 02:08:12

    
  - Fix Added JSON lint task - [b3c866b]( https://github.com/royriojas/build-workflow/commit/b3c866b ), [royriojas](https://github.com/royriojas), 08/09/2014 02:08:01

    
## v0.0.13
- **Build Scripts Changes**
  - Release v0.0.13 - [12d7ed5]( https://github.com/royriojas/build-workflow/commit/12d7ed5 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:30:56

    
  - Fix codepainter task - [0982b1c]( https://github.com/royriojas/build-workflow/commit/0982b1c ), [royriojas](https://github.com/royriojas), 08/09/2014 00:30:25

    
  - Fix codepainter - [0b1b2b5]( https://github.com/royriojas/build-workflow/commit/0b1b2b5 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:27:33

    
## v0.0.12
- **Build Scripts Changes**
  - Release v0.0.12 - [85538a2]( https://github.com/royriojas/build-workflow/commit/85538a2 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:21:15

    
  - Added grunt-bump - [d9919c8]( https://github.com/royriojas/build-workflow/commit/d9919c8 ), [royriojas](https://github.com/royriojas), 08/09/2014 00:21:07

    
- **Enhancements**
  - Properly made docco-husky to work - [2585fba]( https://github.com/royriojas/build-workflow/commit/2585fba ), [royriojas](https://github.com/royriojas), 08/09/2014 00:18:08

    
## v0.0.11
- **Build Scripts Changes**
  - Release v0.0.11 - [43140cf]( https://github.com/royriojas/build-workflow/commit/43140cf ), [royriojas](https://github.com/royriojas), 05/09/2014 22:51:06

    
- **Refactoring**
  - Removed wrong jscs package - [c36f7d5]( https://github.com/royriojas/build-workflow/commit/c36f7d5 ), [royriojas](https://github.com/royriojas), 05/09/2014 22:28:09

    
- **Enhancements**
  - Update to latest dependency - [8c530b5]( https://github.com/royriojas/build-workflow/commit/8c530b5 ), [royriojas](https://github.com/royriojas), 05/09/2014 22:26:24

    
## v0.0.10
- **Build Scripts Changes**
  - Release v0.0.10 - [2f42547]( https://github.com/royriojas/build-workflow/commit/2f42547 ), [royriojas](https://github.com/royriojas), 05/09/2014 17:04:33

    
- **Enhancements**
  - Generate API docs and annotated docs - [3f25b37]( https://github.com/royriojas/build-workflow/commit/3f25b37 ), [royriojas](https://github.com/royriojas), 05/09/2014 17:03:58

    - annotated docs generated with `docco`
    - API docs using yuidoc
    
- **Bug Fixes**
  - Fix yuidoc configuration - [d7e67f7]( https://github.com/royriojas/build-workflow/commit/d7e67f7 ), [royriojas](https://github.com/royriojas), 05/09/2014 16:47:27

    
  - Fix docco documentation generator - [573863f]( https://github.com/royriojas/build-workflow/commit/573863f ), [royriojas](https://github.com/royriojas), 05/09/2014 16:33:10

    
## v0.0.9
- **Build Scripts Changes**
  - Release v0.0.9 - [1c8f461]( https://github.com/royriojas/build-workflow/commit/1c8f461 ), [royriojas](https://github.com/royriojas), 05/09/2014 15:06:27

    
  - Initial commit - [2b88dc9]( https://github.com/royriojas/build-workflow/commit/2b88dc9 ), [Roy Riojas](https://github.com/Roy Riojas), 05/09/2014 04:09:02

    
- **Enhancements**
  - Structural changes - [4739fe6]( https://github.com/royriojas/build-workflow/commit/4739fe6 ), [royriojas](https://github.com/royriojas), 05/09/2014 15:05:49

    
