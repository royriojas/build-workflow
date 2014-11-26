# Usage

1. **install the module**. Execute the following command

  ```sh
  npm i -D grunt build-workflow
  ```

2. **Install the deps**

  ```sh
  node node_modules/build-workflow/bw.js --cmd=install-deps
  ```

3. **Create the folder structure**. 
  
  **Please note**: _If you already have some code, maybe you just need to copy the `grunt-deps` folder._
  
  ```sh
  cp -rv node_modules/build-workflow/demo-structure/ .
  ```

4. **Rename the *.demo.* files if required.

  If you already have some of them, just make sure they have the same content as the demo ones.
  
  For example:
  ```sh
  mv Gruntfile.demo.js Gruntfile.js
  ``

  **Make sure the browserify-shim section is added to your package.json**:
  
  ```json
  "browserify-shim": {
      "window": "global:window",
      "jQuery": "global:jQuery",
      "chrome": "global:chrome",
      "screen": "global:screen",
      "document": "global:document",
      "Worker": "global:Worker",
      "Promise": "global:Promise",
      "self": "global:self"
    }
  ```
  
5. **Run grunt** 

  ```sh
  grunt dev 
  
  # or
  
  grunt build
  ```

  If everything went fine you should have a repo with the following tasks already configured:
  
  - **browserify**. So you can write your code in commonJS style, including a couple of useful transforms like `browserify-shim` and `require-arr`
  - **build-workflow**. (files to format, validate and tasks to be executed during prepush hook)
  - **bump**. To increase the version number
  - **changelog**. To generate a nice changelog in html format, from git commits.
  - **clean**. To clean the generated folders
  - **docco-husky-plus**. To generate annotated documentation
  - **exec**. To run shell commands from a grunt workflow
  - **ez-frontend**. To easily create css files from less ones / and js files that are minimized 
    and with the right version number on the filename, based on the value of the `--build-number` grunt flag.
  - **http-server**. To easily serve some content from a local server during a grunt workflow.
  - **install-hooks**. A task to make sure the code is validated before prepush and to ensure commit messages follow a given standard.
  - **karma**. A karma configuration that allows you to test your files using commonJS format, with coverage.
  - **protractor**. To easily create protractor e2e tests
  - **yuidoc**. To generate API documentation.

