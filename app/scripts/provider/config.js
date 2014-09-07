'use strict';

var nwGui = require('nw.gui');

// show devtools
nwGui.Window.get().showDevTools();

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.provider('config', function() {
    this.nwGui = nwGui;
    this.$get = function() {
        conf.init(nwGui);
        return conf;
    };

});
