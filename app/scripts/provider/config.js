'use strict';

// show devtools
//nwGui.Window.get().showDevTools();

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.provider('config', function() {
    var win = global.app.gui.Window.get();
    this.$get = function() {
        return conf;
    };
    this.resizeWindow = function() {
        var winSize = global.configData.hiddenPreferences.windowSize;
        win.resizeTo(winSize[0], winSize[1]);
    };
    this.moveWindow = function() {
        var winPos = global.configData.hiddenPreferences.windowPos;
        console.log('moveTo', winPos[0], winPos[1]);
        win.moveTo(winPos[0], winPos[1]);
    };

});
