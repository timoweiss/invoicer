'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('DocumentsCtrl', function($scope, InvoiceService) {
        $scope.invoices = [];
        InvoiceService.getInvoices().then(function(resp) {
            if (resp.status === 200) {
                $scope.invoices = resp.data;
            }
        });



    });
