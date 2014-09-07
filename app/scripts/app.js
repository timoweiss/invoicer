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
        'ui.router',
        'ngMaterial'
    ])
    .config(function($stateProvider, $urlRouterProvider, configProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('documents', {
                url: '/documents',
                templateUrl: 'views/documents.html',
                controller: 'DocumentsCtrl'
            })
            .state('clients', {
                url: '/clients',
                templateUrl: 'views/clients.html',
                controller: 'ClientsCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            });
    }).config(function(configProvider) {
        var config = configProvider.$get();
        var confDir = config.createConfigDir('myConfig');
        config.getConfig(confDir, function() {
            console.log(arguments);
        })
        console.log(confDir);
    });
