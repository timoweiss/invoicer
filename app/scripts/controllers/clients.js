'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ClientsCtrl', function ($scope, ClientsService) {

        $scope.clients = [];
        ClientsService.getClients().then(function (resp) {
            if (resp.status === 200) {
                $scope.clients = resp.data;
            }
        });


        var tabs = [
            {
                title: 'Clients',
                active: true,
                disabled: false,
                content: "Polymer practices are great!"
            },
            {
                title: 'Create Client',
                active: false,
                disabled: false,
                content: "Material Design practices are better!"
            }
    ];

        $scope.selectedIndex = 0;
        $scope.twoDisabled = true;

    });