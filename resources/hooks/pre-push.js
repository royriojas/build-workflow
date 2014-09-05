#!/usr/bin/env node

var exec = require( 'child_process' ).exec;
var utils = require( './lib/util.js' );
var prepushCfg = require('./lib/prepush-cfg.json');
var path = require( 'path' );

var createStream = utils.createStream;
var showErrorBlock = utils.showErrorBlock;
var showTitleBlock = utils.showTitleBlock;
var showSuccessBlock = utils.showSuccessBlock;

// hooks are always executed from the root
// directory of the git repo (the one where .git/ lives in)
process.chdir( prepushCfg.pathToSource );

console.log( prepushCfg.pathToSource );

showTitleBlock( 'Validation Hook Started' );

var cp = exec( 'grunt prepush', function ( err, stdout, stderr ) {
  if ( err ) {

    var regex = /was\snot\sbeautified/g;

    showErrorBlock( 'Review your errors and try again', 'VALIDATION FAILED :' );

    process.exit( 1 );
    return;
  }

  showSuccessBlock( 'Validation Hook Completed!.' );

//  var cp2 = exec( 'grunt jshint:js-check jscs:js-check jsvalidate:js-check', function ( err, stdout, stderr ) {
//    if ( err ) {
//
//      showErrorBlock( 'Review your errors and try again', 'VALIDATION FAILED :' );
//      process.exit( 1 );
//    }
//
//    showSuccessBlock( 'Validation Hook Completed!.' );
//
//  } );
//
//  cp2.stdout.pipe( createStream());
} );

cp.stdout.pipe( createStream());
