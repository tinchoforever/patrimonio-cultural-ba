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
    tag: '',
     setTag: function (tag) {
      this.tag = tag;
    },
    setLocation: function (location) {
      this.location = location;
    },
     setPhoto: function (photo) {
      this.photo = photo;
    },
    submit:function (callback){

      callback();
    }
  };
});

