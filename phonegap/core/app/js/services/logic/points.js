'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('initApp.services', ['LocalStorageModule', 'ngResource'])
.value('version', '0.1')
.service('points', function ($rootScope, $http, localStorageService, $resource,device) {
  return {
    photo: '',
    location: {},
    setLocation: function (location) {
      this.location = location;
    },
     setPhoto: function (photo) {
      this.photo = photo;
    },
    submit:function (callback){

      var service ="http://localhost:1984/api/v1/points/create";
      var newpoint ={};
      $http.post(service, newpoint ).success(function(data) {
         callback();
      });
    }
  };
});

