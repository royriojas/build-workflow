module.exports = {
  doCheck: function ( grunt, opts ) {
    var key = 'js-check';

    var jsTasks = opts.tasksToRun;

    jsTasks = jsTasks.split( ',' );

    var tasksToRun = [];

    var prepush = opts.filesToValidate || {};

    jsTasks.forEach( function ( task ) {
      var files = prepush[ task ] || [];

      if ( files.length > 0 ) {
        var tConfig = {
          src: files
        };

        if ( !opts.forceBeautify &&
          (task === 'jsbeautifier' && !grunt.option( 'pp-force-beautify' ))
        ) {
          tConfig.options = {
            mode: 'VERIFY_ONLY',
            onVerificationFailed: function ( result, args ) {
              grunt.fail.fatal( 'File needed beautification: ' + args.file );
            }
          };
        }

        grunt.config.set( [
          task,
          key
        ], tConfig );
        tasksToRun.push( task );
      }
    } );

    var useNewer = opts.useNewer;
    if ( grunt.option( 'check-valid-use-newer' ) === false ) {
      useNewer = false;
    }

    tasksToRun = tasksToRun.map( function ( task ) {
      return (useNewer ? 'newer:' : '') + task + ':' + key;
    } );

    return tasksToRun;
  }
};
