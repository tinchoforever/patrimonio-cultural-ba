
  'use strict';
  angular.module('initApp', ['initApp.services','initApp.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'pointController'
    }).when('/take-photo', {
      templateUrl: 'views/take-photo.html',
      controller: 'takePhotoController'
    }).when('/confirm-photo', {
      templateUrl: 'views/take-photo.html',
      controller: 'takePhotoController'
    })
    .when('/show-map', {
      templateUrl: 'views/show-map.html',
      controller: 'showMapController'
    })
     .when('/tag', {
      templateUrl: 'views/tag-point.html',
      controller: 'tagController'
    })
    .when('/finish', {
      templateUrl: 'views/finish.html',
      controller: 'pointController'
    })
    .when('/discover', {
      templateUrl: 'views/discover.html',
      controller: 'discoverController'
    })
    .when('/detail', {
      templateUrl: 'views/detail.html',
      controller: 'detailController'
    })
    .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'mapController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }).filter('fromNow', function() {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow()
    };
});

