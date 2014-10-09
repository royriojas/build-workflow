#!/usr/bin/env node

var fs = require( 'fs' );
var utils = require( './lib/util' );
var path = require( 'path' );

var showErrorBlock = utils.showErrorBlock;
var showTitleBlock = utils.showTitleBlock;
var showSuccessBlock = utils.showSuccessBlock;

var commitMessageFile = process.argv[ 2 ];

showTitleBlock( 'Checking commit message' );

var cfg = require( './lib/hooks-cfg.json' );

var content = fs.readFileSync( commitMessageFile, {
  encoding: 'utf8'
} );

var checkMessage = function ( lines ) {

  var commitTitleMaxLength = cfg.commitTitleMaxLength;

  var line = lines[ 0 ];
  var line1 = lines[ 1 ] || '';
  var errorFns = [];

  if ( line1.trim() !== '' ) {
    errorFns.push(function () {
      utils.showError( 'Must leave an empty line after the subject' );
    } );
  }

  if ( !/^(BLD|BUG|DOC|FEAT|REF|STY|TST|ENH)\:\s/g.test( line )) {
    errorFns.push(function () {
      utils.showError( 'Please provide a valid tag' );
      utils.showError( 'message provided', '>>>' );
      console.log( line );
    } );
  }
  if ( line.length > commitTitleMaxLength ) {
    errorFns.push(function () {
      utils.showError( 'Please make sure the first line of your message is less than 140 characters long.' );
      console.log( '>>> length:', line.length, line, '\n' );
    } );
  }
  return errorFns;
};

var lines = content.split( '\n' ).filter(function ( line ) {
  return ( line[ 0 ] !== '#' );
} );

var errors = checkMessage( lines );

if ( errors.length === 0 ) {
  console.log( 'All good!' );
  showSuccessBlock( 'Commit message is acceptable' );
} else {

  var text = fs.readFileSync( path.resolve( __dirname, './lib/commit-msg-error.txt' ), {
    encoding: 'utf8'
  } );

  console.error( text + '\n' );

  errors.forEach(function ( fn ) {
    fn();
  } );

  showErrorBlock( 'Commit message is not acceptable. See message above' );
  process.exit( 1 );
}
