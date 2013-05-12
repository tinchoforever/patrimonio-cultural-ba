'use strict';
var initApp = angular.module('initApp.controllers',  ['LocalStorageModule']);

initApp.controller('pointController', function ($scope, geolocation, camera, device, localStorageService, points) {

  $scope.refreshLocation = function() {
   geolocation.getCurrentPosition(function (position) {
     $scope.position = position;
     var a =  "";
     $scope.map = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," +
                    position.coords.longitude + "&zoom=20&size=500x300&markers=color:blue|label:S|" +
                    position.coords.latitude + ',' + position.coords.longitude;
      points.setLocation(position.coords);
   });
 };

 $scope.takepic = function() {
  camera.getPicture(function (image) {
    points.setPhoto(image);
    $scope.photo = points.photo;
    window.location.hash ="take-photo";
  });
};



$scope.wait = false;
$scope.submitPoint = function() {
  $scope.wait = true;
  points.setTag($scope.tag);
  points.submit(function(){
    window.location.hash ="finish";
  });
};



$scope.refreshLocation();
$scope.photo = points.photo;

});
