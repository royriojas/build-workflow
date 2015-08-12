var format = require( 'stringformat' );
var executor = require( 'shell-executor' ).create();
var log = require( 'clix-logger' )( { coloredOutput: true } );

var validate = process.argv.indexOf( '--check' ) > -1;
var skipCache = process.argv.indexOf( '--skip-cache' ) > -1;

var wrap = function ( arr ) {
  return arr.map( function ( ele ) {
    return '\'' + ele + '\'';
  } ).join( ' ' );
};

var js = [
  'configs/**/*.js',
  'demo-structure/**/*.js',
  'grunt-deps/**/*.js',
  'mocha-helpers/**/*.js',
  'resources/**/*.js',
  'specs/**/*.js',
  'tasks/**/*.js',
  'test-helpers/**/*.js',
  'utils/**/*.js',
  '*.js'
];

var jsSources = wrap( js );

var commands = [
  format( 'esbeautifier {0} {1} {2}', validate ? '-k' : '', skipCache ? ' --no-use-cache' : '', jsSources ) + ' && '
    + format( 'eslinter {0} {1}', skipCache ? ' --no-use-cache' : '', jsSources )
];

executor.runCmds( commands );

executor.on( 'command:error', function ( e, err ) {
  console.error( err );
  process.exit( 1 ); //eslint-disable-line
} );

var totalCommands = commands.length;

executor.on( 'command:exit', function ( e, args ) {
  totalCommands--;
  if ( args.exitCode !== 0 ) {
    executor.stopAll();
    log.error( args.cmd + ' exit code: ', args.exitCode );
    process.exit( 1 ); //eslint-disable-line
  }

  if ( totalCommands === 0 ) {
    log.ok( 'Check done!' );
  }
} );
