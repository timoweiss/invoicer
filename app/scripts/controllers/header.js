// 'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('HeaderCtrl', function($scope, $state, HeaderService) {
        $scope.userImagePath = HeaderService.getUserImage();
        console.log(HeaderService.getUserImage());
        console.log(require('nw.gui'));
        win = require('nw.gui').Window.get();
        $scope.logout = function() {
            win.width = 400;
            win.height = 600;
            $state.go('login');
        };
    });
