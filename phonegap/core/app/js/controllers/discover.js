'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('discoverController', function ($scope, geolocation, camera, device, localStorageService, points) {

    var geo = {};

    points.getAllNear(geo, function(points){
        $scope.points = points;
    });
    $scope.showDetail =function(point){
        points.selectPhoto(point);
        window.location.hash ="detail";
    }
});
