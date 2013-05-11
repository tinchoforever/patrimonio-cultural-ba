
  'use strict';

  angular.module('initApp', ['initApp.services','initApp.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'pointController'
    }).when('/take-photo', {
      templateUrl: 'views/take-photo.html',
      controller: 'pointController'
    })
    .when('/show-map', {
      templateUrl: 'views/show-map.html',
      controller: 'pointController'
    })
    .when('/finish', {
      templateUrl: 'views/finish.html',
      controller: 'pointController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

