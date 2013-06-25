'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('takePhotoController', function ($scope, camera,  points) {

camera.getPicture(function (image) {
    points.setPhoto(image);
    $scope.photo = points.photo;
    // points.submit(function(){
      window.location.hash ="confirm-photo";
    // });
  });
});
