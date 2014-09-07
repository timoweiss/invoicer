'use strict';

/**
 * @ngdoc function
 * @name invoicePocApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the invoicePocApp
 */
angular.module('invoicePocApp')
    .controller('HeaderCtrl', function($scope, HeaderService) {
        $scope.userImagePath = HeaderService.getUserImage();
        console.log(HeaderService.getUserImage());
    });
