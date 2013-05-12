
'use strict';

angular.module('App', ['App.services','App.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .when('/gallery', {
        templateUrl: 'views/art-list.html',
        controller: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular.module('App.controllers', [])
//   .controller('home', function () {
//     $scope.property = true;
//   });

// angular.module('App', ['App.controllers'])
//   .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'home'});
//   }]);