var launcher = module.exports = {
  init: function () {
    require('./app').start();
  }
};

launcher.init();