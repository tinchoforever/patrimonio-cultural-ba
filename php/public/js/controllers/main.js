'use strict';
var initApp = angular.module('initApp.controllers',  ['LocalStorageModule']);

initApp.controller('mainController', function ($scope, localStorageService,points ) {



 points.getall(function(points){
    $scope.points = points;
  });

});
