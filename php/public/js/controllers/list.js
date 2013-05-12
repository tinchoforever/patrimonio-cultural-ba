'use strict';
angular.module('App.controllers')
.controller('list', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {
    points.getall(function (points) {
        $scope.points = points;
    });
}]);
