'use strict';

/* Services */
angular.module('App.services', ['LocalStorageModule', 'ngResource'])
  .value('version', '0.1')
  .service('points', [
    '$rootScope',
    '$http',
    'localStorageService',
    '$resource',
    function ($rootScope, $http, localStorageService, $resource) {
      return {
        points: [],
        getall: function (successCallback) {
          self = this;
          $http.get('/api/v1/points/geo/all/').success(function (data) {
            for (var i = 0;i <data.length; i++) {
                var point = data[i];
                point.map = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + point.latitude + "," +
                        point.longitude + "&zoom=17&size=300x300&markers=color:blue|label:S|" +
                        point.latitude + ',' + point.longitude;
            };
            self.points = data;
            successCallback(data);
          });
       }
     };
    }
  ]);

