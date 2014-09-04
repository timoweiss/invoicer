'use strict';

angular.module('invoicePocApp')

.service('ClientsService', function($http) {
    return {
        getClients: function() {
            return $http.get('http://localhost:2403/clients');
        }
    };
});
