# The CoffeeMaker example as commonJS modules

## Overview

This is a demo of using CommonJS modules + Browserify to achieve what Angular DI helps to bring to javascript with its injector. 
Basically been able to make the code broken into modular pieces that are loosely coupled and can be replaced by mocks during testing.

The goal is to prove that, even when Angular DI is a very brilliant piece of code, it might be not useful if you're already using
CommonJS modules + Browserify.

This will also be the demo project for `build-workflow` a npm module that can help you to manage the common tasks related to 
frontend development, based on grunt, it provides some useful tasks to make the frontend development a little bit easier.

## building it

```bash
npm i
grunt
```

## Running the tests

```bash
grunt karma:one
```

