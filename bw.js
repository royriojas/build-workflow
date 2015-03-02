var commands = require( './commands' );

var argv = require( 'minimist' )( process.argv.slice( 2 ) );

var showHelp = function () {
  console.error( 'Please tell me something to do: \n' );
  console.log( 'Usage: bw.js --cmd=[SOME_ACTION]\n\nWhere [SOME_ACTION] could be:\n\n- install-deps:   To install all the npm dependencies\n- init-structure: To create the folder structure required for this module\n\nExample\n\nnode bw.js --cmd=install-deps\n\n\n' );
};

var method = commands[ argv.cmd ];

if ( !argv.cmd || !method ) {
  showHelp();
} else {
  method.apply( commands, [
    argv
  ] );
}
