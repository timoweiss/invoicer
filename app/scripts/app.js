'use strict';

/**
 * @ngdoc overview
 * @name invoicePocApp
 * @description
 * # invoicePocApp
 *
 * Main module of the application.
 */
global.app = {
    gui: require('nw.gui')
};

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
    .config(function($stateProvider, $urlRouterProvider) {

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
            })
            .state('config', {
                url: '/config',
                templateUrl: 'views/config.html',
                controller: 'ConfigCtrl'
            });
    })
    .config(function(configProvider) {
        var _configMock = {
            'profile': {
                'firstname': 'John',
                'surname': 'Doe',
                'email': 'john@doe.com',
                'timezone': '',
                'image': ''
            },
            'preferences': {
                'askBeforeDelete': true,
                'undoredo': true
            },
            'notifications': {
                'otherUserOnline': true,
                'otherUserOffline': true,
                'updateAvailable': true,
                'changes': true
            },
            'hiddenPreferences': {
                'windowWith': 1000,
                'windowHeight': 700,
                'windowPosition': {
                    'top': 300,
                    'left': 300
                }
            }
        };

        global.config = configProvider.$get();
        global.config().then(function(data) {
            global.noConfig = true;
            global.configData = data;
            configProvider.resizeWindow();
        }).fail(function(err) {
            if (err.errno === -2) {
                global.config(_configMock).then(function() {
                    global.noConfig = false;
                });
            }
        });

    })
    .config(function(eventProvider) {
        var shortcut = eventProvider.$get();
    });
