'use strict';

var nwGui = require('nw.gui');

var conf = require('node-webkit-config');

angular.module('invoicePocApp')

.service('ConfigService', function () {
    return conf;
});