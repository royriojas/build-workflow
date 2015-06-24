var logMethods = [
  {
    method: 'log',
    color: 'white'
  },
  {
    method: 'subtle',
    color: 'gray'
  },
  {
    method: 'ok',
    color: 'green'
  },
  {
    method: 'warn',
    color: 'yellow'
  },
  {
    method: 'error',
    color: 'red'
  }
];

var customConsole = { };

var chalk = require( 'chalk' );

logMethods.forEach( function ( item ) {
  customConsole[ item.method ] = function () {
    var text = [ ].slice.call( arguments ).join( ' ' );
    text = chalk.gray( text );

    if ( item.method === 'error' ) {
      console.error( text );
    } else {
      console.log( text );
    }
  };
} );

module.exports = customConsole;
