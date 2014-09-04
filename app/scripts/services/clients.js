'use strict';

angular.module('invoicePocApp')

.service('ClientsService', function($http) {
    return {
        getClients: function() {
            return $http.get('http://localhost:2403/clients');
        },
        saveClient: function(formData) {
            if (!formData) {
                throw new TypeError('formData not defined');
            }
            if (!formData.id) {
                return $http.post('http://localhost:2403/clients', formData);
            } else {
                return $http.put('http://localhost:2403/clients', formData);
            }

        },
        removeClient: function(clientId) {
            if (!clientId) {
                throw new TypeError('clientId not defined');
            }

            return $http.delete('http://localhost:2403/clients/' + clientId);


        }
    };
});
