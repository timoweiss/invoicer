'use strict';

/**
 * @ngdoc overview
 * @name invoicePocApp
 * @description
 * # invoicePocApp
 *
 * Main module of the application.
 */
angular
    .module('invoicePocApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/documents', {
                templateUrl: 'views/documents.html',
                controller: 'DocumentsCtrl'
            })
            .when('/clients', {
                templateUrl: 'views/clients.html',
                controller: 'ClientsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
