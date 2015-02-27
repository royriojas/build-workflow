module.exports = function () {
  var exec = require( 'child_process' ).exec;
  var utils = require( './util.js' );
  var cfg = require( './hooks-cfg.json' );

  var nodeProcess = require( './process' );
  var console = require( './console' );

  var createStream = utils.createStream;
  var showErrorBlock = utils.showErrorBlock;
  var showTitleBlock = utils.showTitleBlock;
  var showSuccessBlock = utils.showSuccessBlock;

  // hooks are always executed from the root
  // directory of the git repo (the one where .git/ lives in)
  nodeProcess.chdir( cfg.pathToSource );

  exec( 'which grunt', function ( err, stdout /*, stderr */ ) {
    if ( err ) {
      console.log( 'grunt not found. Prepush hook will be ignored', err );
      return;
    }
    if ( stdout && stdout.length > 0 ) { // grunt exits

      showTitleBlock( 'Validation Hook Started' );

      var cp = exec( 'grunt prepush', function ( _err /*, stdout, stderr*/ ) {
        if ( _err ) {

          console.error( _err );

          showErrorBlock( 'Review your errors and try again', 'VALIDATION FAILED :' );

          nodeProcess.exit( 1 );
          return;
        }

        showSuccessBlock( 'Validation Hook Completed!.' );
      } );

      cp.stdout.pipe( createStream() );
    } else {
      console.log( 'It seems you don\'t have `grunt` in your system. No checks will be done. Pray you don\'t break things, and the build goes green' );
    }
  } );
};
