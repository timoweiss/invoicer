'use strict';

// show devtools
//nwGui.Window.get().showDevTools();

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.provider('config', function() {
    this.$get = function() {
        return conf;
    };
    this.resizeWindow = function() {
        var win = global.app.gui.Window.get();
        var winSize = global.configData.hiddenPreferences.windowSize;
        win.resizeTo(winSize[0], winSize[1]);
    };

});
