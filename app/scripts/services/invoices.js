'use strict';

angular.module('invoicePocApp')

.service('InvoiceService', function($http) {
    return {
        getInvoices: function() {
            return $http.get('http://localhost:2403/invoices');
        }
    };
});
