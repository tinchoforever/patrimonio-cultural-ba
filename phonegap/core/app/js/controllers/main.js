'use strict';
var initApp = angular.module('initApp.controllers',  ['LocalStorageModule']);

initApp.controller('pointController', function ($scope, geolocation, camera, points) {

    if (points.photo){
        $scope.photo = points.photo;
    }

});
