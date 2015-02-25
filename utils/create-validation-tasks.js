module.exports = function (grunt, validationTasksConfig, onSet) {
  var jsTasks = validationTasksConfig.tasks || [];
  var check = require('./check');
  var tasksToRun = [];

  jsTasks.forEach(function ( task ) {

    var name, src;

    if (check.typeOf(task) === 'string') {
      name = task;
      src = validationTasksConfig.src || [];
    }
    else {
      name = task.name;
      src =  task.src || validationTasksConfig.src
    }

    if ( src.length > 0 ) {
      var tConfig = {
        src: src
      };
      onSet && onSet(tConfig);
      grunt.config.set( [ task, name ], tConfig );
      tasksToRun.push( task );
    }
  } );

  return tasksToRun;
};