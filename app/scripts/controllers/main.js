'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('MainCtrl', function($scope, $rootScope, $state) {
        $rootScope.headerTitle = 'Übersicht';
        // redirect to config if not already set
        if (!global.noConfig) {
            $state.go('config');
        }
    });
