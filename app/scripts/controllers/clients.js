'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ClientsCtrl', function($scope, ClientsService, $state) {

        $scope.clients = [];
        $scope.formdata = {};

        $scope.updateClients = function() {
            ClientsService.getClients().then(function(resp) {
                if (resp.status === 200) {
                    $scope.clients = resp.data;
                }
            });
        };
        $scope.updateClients();

        $scope.saveClient = function() {
            var formData = {};
            formData.name = $scope.formdata.name;
            formData.firstname = $scope.formdata.firstname;
            formData.companyName = $scope.formdata.companyName;
            formData.contactData = $scope.formdata.contactData;
            formData.country = $scope.formdata.country;
            formData.zip = $scope.formdata.zip;
            formData.mail = $scope.formdata.mail;
            formData.id = $scope.formdata.id;
            formData.createDate = Date.now();
            ClientsService.saveClient(formData).then(function() {
                $scope.formdata = {};
                $scope.selectedIndex = 0;
                $scope.updateClients();
            });

        };

        $scope.editClient = function(clientId) {
            console.log(clientId);
            $scope.selectedIndex = 1;
            angular.forEach($scope.clients, function(val) {
                if (val.id === clientId) {
                    $scope.formdata = val;
                }
            });
        };

        var tabs = [{
            title: 'Kunde',
            active: true,
            disabled: false
        }, {
            title: 'Kunde bearbeiten',
            active: false,
            disabled: false
        }];

        $scope.selectedIndex = 0;
        $scope.twoDisabled = false;
        $scope.tabs = [].concat(tabs);

    });
