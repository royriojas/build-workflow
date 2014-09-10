/**
 * Simple wrapper around try catch
 *
 * IMPORTANT: V8 does not optimize code that contains try/catch blocks.
 * By limiting the place where we use the try catch, we ensure V8 does its
 * best to optimize the js code.
 *
 * @method tryCatch
 * @param cb {Function} the function to wrap in the try catch sentence
 * @param [err] {Function} the function to call if something is catched
 * @param [finallyFn] {Function} the function to call as the finally block for the try/catch
 */
module.exports = function tryCatch( cb, err, finallyFn ) {
  try {
    cb && cb();
  } catch ( ex ) {
    err && err( ex );
  } finally {
    finallyFn && finallyFn();
  }
};
