'use strict';
angular.module('invoicePocApp')

.provider('shortcut', function () {

    this.$get = function () {
        Mousetrap.bind('command+shift+i', function () {
            require('nw.gui').Window.get().showDevTools();
        });
    };

});