'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ClientsCtrl', function($scope, ClientsService) {

        $scope.clients = [];
        ClientsService.getClients().then(function(resp) {
            if (resp.status === 200) {
                $scope.clients = resp.data;
            }
        });
    });
