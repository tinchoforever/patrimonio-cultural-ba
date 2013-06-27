'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('discoverController', function ($scope, geolocation, points) {

    var geo = {};
    alert("discoverController");
    points.getAllNear(geo, function(points){
        alert("getAllNear");
        $scope.points = points;
    });

    $scope.mapLocation = function() {
	   geolocation.getCurrentPosition(function (position) {
        alert("mapLocation");
	     $scope.position = position;
	      $scope.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + position.coords.latitude  + ',' +position.coords.longitude + "&zoom=10&size=300x200&maptype=mapnik&markers="+ position.coords.latitude + ',' +position.coords.longitude +",lightblue1";
	      points.setLocation(position.coords);
	   });
	 };

	$scope.showDetail =function(point){
	    points.selectPhoto(point);
	    window.location.hash ="detail";
	}

	$scope.mapLocation();

});
