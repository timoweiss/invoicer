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

        var win = global.app.gui.Window.get();
        win.on('close', function() {
            saveConfig().then(function() {
                console.log('successfully saved');
                win.close(true);
            }).fail(function(err) {
                console.log(err);
            });
        });

        function saveConfig() {
            global.configData.hiddenPreferences.windowSize = [win.width, win.height];
            return global.config(global.configData);
        }

    };

});
