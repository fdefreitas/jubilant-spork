'use strict';

/**
 * @ngdoc overview
 * @name runpathAppApp
 * @description
 * # runpathAppApp
 *
 * Main module of the application.
 */
angular
  .module('runpathAppApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
