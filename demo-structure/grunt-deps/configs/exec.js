module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  var lib = opts.lib;

  return {
    'hello-world': {
      cmd: function ( name ) {
        return lib.format( 'echo "Hello World, {0}"', name || 'unknown user' );
      }
    }
  };
};
