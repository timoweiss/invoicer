'use strict';

var utils = require('./helper');

/**
 * @ngdoc function
 * @name invoicePocApp.controller:ConfigCtrl
 * @description
 * # ConfigCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('ConfigCtrl', function($scope, $rootScope) {
        $rootScope.headerTitle = 'Einstellungen';
        var configObj = {};

        global.config().then(function(data) {
            console.log(data);
            $scope.config = data;
            $scope.$apply();
        });
        $scope.tabs = [{
            title: 'Profil',
            active: true
        }, {
            title: 'Einstellungen',
            active: false
        }, {
            title: 'Benachrichtungen',
            active: false
        }];

        $scope.selectedIndex = 0;
    });
