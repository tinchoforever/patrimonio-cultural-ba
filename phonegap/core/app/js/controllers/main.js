'use strict';
var initApp = angular.module('initApp.controllers',  ['LocalStorageModule']);

initApp.controller('pointController', function ($scope, geolocation, camera, points) {

  $scope.refreshLocation = function() {
   geolocation.getCurrentPosition(function (position) {
     $scope.position = position;
      $scope.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + position.coords.latitude  + ',' +position.coords.longitude + "&zoom=10&size=300x200&maptype=mapnik&markers="+ position.coords.latitude + ',' +position.coords.longitude +",lightblue1";
      points.setLocation(position.coords);
   });
 };

 $scope.takepic = function() {
  camera.getPicture(function (image) {
    points.setPhoto(image);
    $scope.photo = points.photo;
    // points.submit(function(){
      window.location.hash ="confirm-photo";
    // });
  });
};



$scope.wait = false;
$scope.submitPoint = function() {
  $scope.wait = true;
  points.setTag($scope.tag);
  points.submit(function(data){
    if (!data){
        $scope.$apply(function(){
          $scope.wait = false;

        });
    }
    else{
      alert(JSON.stringify(data, null, 4));
      window.location.hash ="finish";
    }

  });
};



$scope.refreshLocation();
$scope.photo = points.photo;

});
