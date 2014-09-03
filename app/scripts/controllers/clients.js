'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ClientsCtrl', function($scope) {

        console.log('asd')
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
