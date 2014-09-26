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
        var prof = global.configData.profile;
        $scope.userName = prof.firstname + ' ' + prof.surname;
        win = global.app.gui.Window.get();
        $scope.logout = function() {
            win.width = 400;
            win.height = 600;
            $state.go('login');
        };
    });
