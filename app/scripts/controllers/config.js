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
    .controller('ConfigCtrl', function($scope, $rootScope, $state, ConfigService) {
        $rootScope.headerTitle = 'Einstellungen';
        var configObj = {};
        ConfigService.getConfig(null, function(err, content) {
            if (!err) {
                try {
                    configObj = JSON.parse(content);
                    console.log(configObj);
                    $scope.config = configObj;
                    $scope.$apply();
                } catch (e) {
                    window.alert(e);
                }

            }
        });
        console.log(utils);
    });
