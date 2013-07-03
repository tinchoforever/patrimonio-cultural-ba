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
                point.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + point.latitude + ',' +point.longitude + "&zoom=20&size=300x200&maptype=mapnik&markers="+ point.latitude + ',' +point.longitude +",lightblue1";

            };
            self.points = data;
            successCallback(data);
          });
       },
       search: function (q,successCallback) {
          self = this;
          $http.get('/api/v1/points/search?q=' + q ).success(function (data) {
            for (var i = 0;i <data.length; i++) {
                var point = data[i];
                point.map = "http://staticmap.openstreetmap.de/staticmap.php?center=" + point.latitude + ',' +point.longitude + "&zoom=20&size=300x200&maptype=mapnik&markers="+ point.latitude + ',' +point.longitude +",lightblue1";

            };
            self.points = data;
            successCallback(data);
          });
       }
     };
    }
  ]);

