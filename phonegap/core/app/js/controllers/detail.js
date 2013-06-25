'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('detailController', function ($scope, geolocation, camera, device, localStorageService, points) {

    $scope.point = points.currentPhoto;
});
