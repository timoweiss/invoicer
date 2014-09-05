'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('DocumentsCtrl', function($scope, InvoiceService, ClientsService) {
        $scope.invoices = [];
        InvoiceService.getInvoices().then(function(respInvoices) {
            ClientsService.getClients().then(function(respClients) {
                if (respInvoices.status === 200 || respInvoices.status === 304) {
                    $scope.invoices = respInvoices.data;
                    angular.forEach($scope.invoices, function(i) {
                        angular.forEach(respClients.data, function(c) {
                            if (c.id === i.client) {
                                i.client = c;
                            }
                        });

                    });
                }
            });

        });

    });
