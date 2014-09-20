'use strict';

// show devtools
//nwGui.Window.get().showDevTools();

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.provider('config', function() {
    this.$get = function() {
        return conf;
    };

});
