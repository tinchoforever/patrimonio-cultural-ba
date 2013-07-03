'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('showMapController',function ($scope, geolocation, camera, points) {

    $scope.refreshLocation = function() {
       geolocation.getCurrentPosition(function (position) {
         $scope.position = position;
          $scope.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + position.coords.latitude  + ',' +position.coords.longitude + "&zoom=10&size=300x200&maptype=mapnik&markers="+ position.coords.latitude + ',' +position.coords.longitude +",lightblue1";
          points.setLocation(position.coords);
       });
     };
    $scope.refreshLocation();
     $scope.photo = points.photo;
});