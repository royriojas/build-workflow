module.exports = function ( parameters ) {
  var grunt = require( 'grunt' );

  var validationTasks = parameters.validationTasks;
  var onSet = parameters.beforeSetConfiguration;
  var filter = parameters.filter;

  var jsTasks = filter || validationTasks.tasks || [];

  var check = require( './check' );
  var tasksToRun = [];

  jsTasks.forEach( function ( task ) {

    var name, src;

    if ( check.typeOf( task ) === 'string' ) {
      name = task;
      src = validationTasks.src || [];
    } else {
      name = task.name;
      src = task.src || validationTasks.src;
    }

    if ( src.length > 0 ) {
      var tConfig = {
        src: src
      };
      onSet && onSet( name, tConfig );

      var target = 'validation';

      grunt.config.set( [
        name,
        target
      ], tConfig );

      tasksToRun.push( task + ':' + target );
    }
  } );

  return tasksToRun;
};
