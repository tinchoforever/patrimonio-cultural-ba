'use strict';
angular.module('App.controllers',  ['google-maps', 'LocalStorageModule', 'App.services'])
.controller('main', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {

    angular.extend($scope, {

        /** the initial center of the map */
        centerProperty: {
            latitude: 45,
            longitude: -73
        },

        /** the initial zoom level of the map */
        zoomProperty: 8,

        /** list of markers to put in the map */
        markersProperty: [ {
                latitude: 45,
                longitude: -74
            },
             {
                latitude: 45,
                longitude: -73
            }],

        // These 2 properties will be set when clicking on the map
        clickedLatitudeProperty: null,
        clickedLongitudeProperty: null,
    });

    points.getall(function(markers){
        $scope.markersProperty = markers;
        $scope.centerProperty = {
            latitude: -34.603723,
            longitude: -58.381593
        };
    });

}]);
