'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('takePhotoController', function ($scope, camera,  points) {




$scope.takepic = function() {
  camera.getPicture(function (image) {
    points.setPhoto(image);
    $scope.photo = points.photo;
  });
};

    $scope.showMap = function(){
        window.location.hash ="show-map";
    };

$scope.takepic();

});