

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
        for (var i = 0;i <data.length; i++) {
            var point = data[i];
            point.map = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + point.latitude + "," +
                    point.longitude + "&zoom=19&size=300x300&markers=color:blue|label:S|" +
                    point.latitude + ',' + point.longitude;
        };


        self.points = data;
        successCallback(data);

      });
   }
 };
});

