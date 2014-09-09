'use strict';
angular.module('invoicePocApp')

.provider('shortcut', function () {

    this.$get = function () {
        Mousetrap.bind('command+alt+i', function () {
            require('nw.gui').Window.get().showDevTools();
        });
    };

});