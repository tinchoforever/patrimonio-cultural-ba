'use strict';
var initApp = angular.module('initApp.controllers',  ['google-maps', 'LocalStorageModule']);

initApp.controller('listController', function ($scope, localStorageService,points ) {

   points.getall(function(points){
        $scope.points = points;
    });
});
