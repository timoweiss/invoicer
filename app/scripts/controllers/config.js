'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:ConfigCtrl
 * @description
 * # ConfigCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ConfigCtrl', function($scope, $state) {
        console.log(require('nw.gui'));
        $scope.login = function() {
            win.width = 1000;
            win.height = 723;
            $state.go('main');
        };
    });
