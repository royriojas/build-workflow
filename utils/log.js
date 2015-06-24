module.exports = function ( grunt ) {
  var chalk = require( 'chalk' );

  return {
    ok: function () {
      var args = [ ].slice.call( arguments );

      args = args.map( function ( arg ) {
        return chalk.green( arg );
      } );

      grunt.log.ok( args.join( ' ' ) );
    },
    important: function () {
      var args = [ ].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.yellow( arg );
      } );

      grunt.log.writeln( args.join( ' ' ) );
    },
    warn: function () {
      var args = [ ].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.yellow( arg );
      } );

      grunt.warn( args.join( ' ' ) );
    },
    error: function () {
      var args = [ ].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.red( arg );
      } );

      grunt.fatal( args.join( ' ' ) );
    },
    log: function () {

      var args = [ ].slice.call( arguments );
      args.unshift( chalk.white( '>>' ) );

      grunt.verbose.writeln( args.join( ' ' ) );
    },
    subtle: function () {
      var args = [ ].slice.call( arguments );
      args.unshift( '>>' );

      args = args.map( function ( arg ) {
        return chalk.gray( arg );
      } );

      grunt.log.writeln( args.join( ' ' ) );
    }
  };
};
