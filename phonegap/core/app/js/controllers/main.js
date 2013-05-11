'use strict';
var initApp = angular.module('initApp.controllers',  ['LocalStorageModule']);

initApp.controller('pointController', function ($scope, geolocation, camera, device, localStorageService, points) {

  $scope.refreshLocation = function() {
   geolocation.getCurrentPosition(function (position) {
     $scope.position = position;
     $scope.map = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," +
                    position.coords.longitude + "&zoom=20&size=300x200&markers=color:blue|label:S|" +
                    position.coords.latitude + ',' + position.coords.longitude;
   });
 };

 $scope.takepic = function() {
  camera.getPicture(function (image) {
    $scope.photo = image;
  });

};

$scope.submitPoint = function() {
  points.submit($scope.photo, $scope.position,function(){
    alert("YES!");
  });
};



$scope.refreshLocation();


});
