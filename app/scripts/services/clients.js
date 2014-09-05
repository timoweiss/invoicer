'use strict';

angular.module('invoicePocApp')

.service('ClientsService', function($http, $q) {
    var clientsCache = {};
    var _lastPoll = 0;
    var cacheIntervall = 10000;

    function cacheInterceptor() {
        if (!clientsCache.data || (Date.now() - _lastPoll > cacheIntervall)) {
            console.log('doing the request');
            _lastPoll = Date.now();
            var req = $http.get('http://localhost:2403/clients');
            req.then(function(resp) {
                clientsCache = resp;
            });
            return req;
        } else {
            console.log('delivering the cached stuff');
            var def = $q.defer();
            clientsCache.status = 304;
            def.resolve(clientsCache);
            return def.promise;
        }

    }
    return {
        getClients: function() {
            return cacheInterceptor();
        },
        saveClient: function(formData) {
            _lastPoll = 0;
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
