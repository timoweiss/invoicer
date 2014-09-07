'use strict';

var nwGui = require('nw.gui');

// show devtools
nwGui.Window.get().showDevTools();

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.service('ConfigService', function() {
    return conf;
});
