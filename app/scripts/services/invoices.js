'use strict';

angular.module('invoicePocApp')

.service('InvoiceService', function ($http) {
    return {
        getInvoices: function () {
            return $http.get('http://localhost:2403/invoices');
        },
        saveInvoice: function (invoice) {
            if (!invoice.id) {
                return $http.post('http://localhost:2403/invoices', invoice);
            } else {
                return $http.put('http://localhost:2403/invoices', invoice);
            }

        },
        deleteInvoice: function (id) {
            return $http.delete('http://localhost:2403/invoices/' + id);
        }
    };
});