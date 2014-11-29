/** NO_OVERRIDE_CONSOLE **/
/**
 * Super simple module to remove logs/debugs from the app
 */
var oldConsole = global.console;
var noop = Function.prototype;

var consoleKeys = [
  'log',
  'debug',
  'info',
  'dir',
  'warn',
  'error',
  'trace',
  'group',
  'groupCollapsed',
  'groupEnd',
  'profile',
  'profileEnd',
  'time',
  'timeEnd'
];

var consoleWrapper = {
  create: function ( moduleName ) {
    var consoleObj = {};
    var me = this;

    consoleKeys.forEach(function ( method ) {

      var methodFound = oldConsole[ method ];

      if ( !me.enabled ) {
        consoleObj[ method ] = noop;
        return;
      }

      consoleObj[ method ] =  moduleName ? methodFound.bind( oldConsole, moduleName + ':' ) : methodFound.bind( oldConsole );
    } );
    return consoleObj;
  },

  restoreConsole: function () {
    global.console = oldConsole;
  },

  getOriginalConsoleObject: function() {
    return oldConsole;
  },

  overrideConsole: function () {
    global.console = this.create();
  },

  enabled: true
};

module.exports = consoleWrapper;
