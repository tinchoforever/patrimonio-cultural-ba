
'use strict';
var initApp = angular.module('initApp.controllers');

initApp.controller('tagController', function ($scope, geolocation, camera, points) {


    $scope.wait = false;
    $scope.error = false;

    $scope.submitPoint = function() {

    $scope.myForm.$invalid;
      if ($scope.myForm.$valid){

        $scope.wait = true;
        points.setTag($scope.tag);
        points.submit(function(data){
            if(!data){
                $scope.$apply(function(){
                    $scope.wait = false;
                });
            }
            else {
             window.location.hash ="finish";
            }
        });

      }else{
        $scope.error = true;
      }
    };
     $scope.photo = points.photo;

});
