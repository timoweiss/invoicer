'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ClientsCtrl', function($scope, $rootScope, ClientsService, $state, $materialDialog, $materialToast) {
        $rootScope.headerTitle = 'Kunden';
        $scope.clients = [];
        $scope.formdata = {};

        $scope.updateClients = function() {
            return ClientsService.getClients().then(function(resp) {
                if (resp.status === 200 || resp.status === 304) {
                    $scope.clients = resp.data;
                }
                return resp;
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
                $scope.tabs[1].title = 'Kunde anlegen';
            });

        };

        $scope.editClient = function(clientId) {
            $scope.tabs[1].title = 'Kunde bearbeiten';
            $scope.selectedIndex = 1;
            angular.forEach($scope.clients, function(val) {
                if (val.id === clientId) {
                    $scope.formdata = val;
                }
            });
        };

        $scope.removeDialog = function(e, id) {
            var removeClient = $scope.removeClient;
            var updateClients = $scope.updateClients;
            var complexToastIt = $scope.complexToastIt;
            var _id = id || null;
            $materialDialog({
                templateUrl: '/views/dialogs/removeDialog.html',
                targetEvent: e,
                controller: ['$scope', '$hideDialog',
                    function($scope, $hideDialog) {
                        $scope.clientId = _id;
                        $scope.close = function() {
                            $hideDialog();
                        };
                        $scope.removeClient = function(clientId) {
                            if (!clientId) {
                                return;
                            }
                            ClientsService.removeClient(clientId)
                                .then(complexToastIt)
                                .then(function() {
                                    updateClients();
                                    $scope.close();
                                });
                        };
                    }
                ]
            });
        };

        $scope.complexToastIt = function() {
            console.log(arguments);
            $materialToast({
                controller: function($scope, $hideToast) {
                    $scope.closeToast = function() {
                        $hideToast();
                    };
                },
                templateUrl: 'views/toasts/success-save.html',
                duration: 2000,
                position: 'bottom left'
            });
        };

        $scope.tabs = [{
            title: 'Kunde',
            active: true,
            disabled: false
        }, {
            title: 'Kunde anlegen',
            active: false,
            disabled: false
        }];

        $scope.selectedIndex = 0;
        $scope.twoDisabled = false;

    });
