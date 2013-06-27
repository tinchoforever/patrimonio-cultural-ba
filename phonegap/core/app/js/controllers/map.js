'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('mapController', function ($scope, geolocation, camera, device, localStorageService, points) {

	$scope.mapLocation = function() {
		$scope.loaderShow = true;
	   geolocation.getCurrentPosition(function (position) {
	   	$scope.loaderShow = false;
	     $scope.position = position;
	      $scope.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + position.coords.latitude  + ',' +position.coords.longitude + "&zoom=10&size=400x600&maptype=mapnik&markers="+ position.coords.latitude + ',' +position.coords.longitude +",lightblue1";
	      points.setLocation(position.coords);

	   });


	 };
	 $scope.mapLocation();


});
