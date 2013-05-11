'use strict';
var initApp = angular.module('initApp.controllers',  ['google-maps', 'LocalStorageModule']);

initApp.controller('mainController', function ($scope, localStorageService,points ) {



   points.getall(function(points){
        $scope.points = points;
        var markers =[];
        for(var i=0; i < points.length; i++){
            markers.push(
            {
                latitude: points[i].latitude,
                longitude: points[i].longitude,

            });
        }
        console.log(markers);
        $scope.markersProperty = markers;
        $scope.zoomProperty = 12;
        $scope.centerProperty= {
            latitude: -34.603723,
            longitude: -58.381593};

    });

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

});
