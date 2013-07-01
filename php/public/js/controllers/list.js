'use strict';
angular.module('App.controllers')
.controller('list', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {

    $scope.wait = false;
    $scope.update =function(){
        $scope.wait = true;
        points.search($scope.q, function (points) {
            $scope.points = points;
            $scope.wait = false;
        });
    };


}]);
