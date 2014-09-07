'use strict';

angular.module('invoicePocApp')

.service('HeaderService', function() {

    return {
        getUserImage: function() {
            return require('nw.gui').App.dataPath + '/userimage.png';
        }
    };
});
