# `changelog` task

The `changelog` grunt task allows you to generate changelog in html format like this one: [changelog.html](report-demo/changelog.html).

It depends on the git metadata in order to achieve this. In some sense it is pretty similar to [conventional-changelog](https://github.com/ajoslin/conventional-changelog),
so if your project is not using git, this task might not be useful for you.

This is a multi task, so several targets can be defined. Usually you only need one though.
 
## Conventions/Assumptions

- You are tagging your releases with a tag format that is consistent over the time
- Your commits follow the following set of rules
  - Commit subject format: 
    
    ```bash
    TAG: Some **short** and _relevant_ message that can use markdown [ISSUE_ID]
    # empty line
    A longer description that can also use **markdown** and can also link to the ISSUE_ID.
    This is pretty handy if you want to include some info about the change, like how to use your new change in code
    or how will this affect config files, etc.
    ```
    
    **IMPORTANT**: The current implementation has one limitation. It assumes you have only one issue per commit. The time
    proved this assumption to be wrong, so a future improvement will be to add an option to provide a function to parse the 
    id issues so it can be extended to support multiple ones
    
    **TAG**
    
    **ISSUE_ID** 
    
    Between brackets, this is the **issue id** on your issue tracker. This implementation assumes you are using rally 
    or other issue tracker system that provide a unique id for defects and a url to navigate to them. 
