'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('MainCtrl', function($scope, $rootScope) {
        $rootScope.headerTitle = 'Übersicht';
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
