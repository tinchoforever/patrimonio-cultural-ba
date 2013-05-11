

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('initApp.services', ['LocalStorageModule', 'ngResource'])
.value('version', '0.1')
.service('points', function ($rootScope, $http, localStorageService, $resource) {
  return {
    points: [],
    getall:function (successCallback)
    {
        self = this;
      $http.get("/api/v1/points/all").success(function(data){
        self.points = data;
        console.log(data);
        successCallback(data);

      });
   }
 };
});

