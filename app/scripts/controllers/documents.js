'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('DocumentsCtrl', function ($scope, $rootScope, InvoiceService, ClientsService) {
        $rootScope.headerTitle = 'Dokumente';
        $scope.invoices = [];

        $scope.toggleInvoice = function ($event) {
            var el = $event.currentTarget;
            $(el).find('.items').toggleClass('show');
        };

        $scope.tabs = [{
            title: 'Rechnungen',
            active: true
        }, {
            title: 'Rechnung anlegen',
            active: false
        }];

        $scope.selectedIndex = 0;

        $scope.editInvoice = function (id) {
            debugger;
            angular.forEach($scope.invoices, function (value, key) {
                if (value.id === id) {
                    $scope.formdata = value;
                    $scope.selectedIndex = 1;
                }
            });
        };

        $scope.addItem = function () {
            $scope.formdata.invoiceContent.push({
                itemName: '',
                itemDescription: '',
                itemUnitcosts: '',
                itemQuantity: ''
            });
        };

        $scope.saveInvoice = function () {

            InvoiceService.saveInvoice($scope.formdata).then(function () {
                $scope.formdata = {};
                $scope.selectedIndex = 0;
                $scope.tabs[1].title = 'Rechnung anlegen';
            });


        };

        $scope.deleteInvoice = function (id) {
            InvoiceService.deleteInvoice(id).then(function () {
                getInvoices();
            });
        };

        function getInvoices() {
            InvoiceService.getInvoices().then(function (respInvoices) {
                ClientsService.getClients().then(function (respClients) {
                    if (respInvoices.status === 200 || respInvoices.status === 304) {
                        $scope.invoices = respInvoices.data;
                        angular.forEach($scope.invoices, function (i) {
                            angular.forEach(respClients.data, function (c) {
                                if (c.id === i.client) {
                                    i.client = c;
                                }
                            });

                        });
                    }
                });

            });
        }
        getInvoices();

    });