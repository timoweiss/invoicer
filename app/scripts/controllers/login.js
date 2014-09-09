'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('LoginCtrl', function($scope, $state) {
        console.log(require('nw.gui'));
        $scope.login = function() {
            $state.go('main');
        };
    });
