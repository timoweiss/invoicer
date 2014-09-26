'use strict';
angular.module('invoicePocApp')

.provider('event', function() {

    this.$get = function() {
        Mousetrap.bind('command+alt+i', function() {
            require('nw.gui').Window.get().showDevTools();
        });

        Mousetrap.bind('command+r', function() {
            console.info('yo');
            if (location) {
                location.reload();
            }

        });

    };

});
