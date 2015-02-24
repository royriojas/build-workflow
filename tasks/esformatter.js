module.exports = function (grunt, pkg, opts) {
  'use strict';

  var gruntTaskUtils = opts.gruntTaskUtils;

  gruntTaskUtils.registerTasks({
    'esformatter': {
      description: 'automate the generation of a changelog using git',
      multiTask: function () {
        var path = require('path');
        var esformatter = require('esformatter');

        var me = this;

        if (!me.filesSrc.length) {
          grunt.log.ok('No files to format');
          return;
        }

        var opts = me.options({
          esformatterOpts: {},
          beforeStart: null
        });

        var cfg = {};
        if (opts.config) {
          cfg = grunt.file.readJSON(path.resolve(opts.config));
        }

        var extend = require('../utils/extend');
        cfg = extend(true, cfg, opts.esformatterOpts);

        var plugins = cfg.plugins;

        if (plugins && plugins.length > 0) {
          // plugins will be auto register again, during transform,
          // setting them here will fix this issue in esformatter
          // https://github.com/millermedeiros/esformatter/issues/245
          var tryCatch = require('../utils/try-catch');
          plugins.forEach(function (plugin) {
            tryCatch(function () {
              esformatter.register(require(plugin));
            }, function (ex) {
              grunt.verbose.writeln('\nError: ' + ex.message);
              grunt.fail.warn('Error loading esformatter plugin : ' + plugin);
            });
          });
        }

        if (opts.beforeStart) {
          // handy to add more plugins programatically if required
          opts.beforeStart(esformatter);
        }

        me.filesSrc.forEach(function (fIn) {
          var output = esformatter.format(grunt.file.read(fIn), cfg);
          grunt.file.write(fIn, output);
          grunt.log.ok('formatted file ' + fIn);
        });
      }
    }
  });
};