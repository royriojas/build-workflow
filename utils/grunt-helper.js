module.exports = function ( grunt ) {
  return {
    registerTasks: function ( gruntTasks ) {
      Object.keys( gruntTasks ).forEach( function ( tName ) {

        var task = gruntTasks[ tName ],
          multiTask = task.multiTask,
          description = task.description || 'Task with name ' + tName;

        if ( typeof multiTask === 'function' ) {
          grunt.registerMultiTask( tName, description, multiTask );
        } else {
          grunt.registerTask( tName, task );
        }
      } );
    }
  };
};
