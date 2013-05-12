'use strict';
angular.module('App.controllers')
.controller('list', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {
    points.getall(function (points) {
        for(var i=0; i<points.length;i++){
            var point = points[i];
            point.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + point.latitude + ',' +point.longitude + "&zoom=20&size=300x200&maptype=mapnik&markers="+ point.latitude + ',' +point.longitude +",lightblue1";

        }
        $scope.points = points;
    });
}]);
