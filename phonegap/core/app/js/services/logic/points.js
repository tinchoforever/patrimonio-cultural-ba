'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('initApp.services', ['LocalStorageModule', 'ngResource'])
.value('version', '0.1')
.service('points', function ($rootScope, $http, localStorageService, $resource,device) {
  return {
    currentPhoto: {},
    points: [],
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
    selectPhoto: function(photo){
      this.currentPhoto= photo;
    },
    //TODO: Merge to the point.
    getAllNear: function(point, callback){
      this.points = [];
      for (var i = 0; i < 10; i++) {
        var p ={
          id: i,
          photo: "http://lorempixel.com/800/800/cats/" + i,
          neightbour: "Palermo",
          tags: "tags tags tags" + i,
          description: "description description" + i,
          username: "username",
          timestamp: 1372169316
        }
        this.points.push(p);
      }
      callback(this.points);
    },
    submit:function (callback){
      var service ='http://localhost:1984/api/v1/points/create';
      // var dataURL = canvas.toDataURL("image/png")
      var fail, ft, options, params, win;

    // callback if the photo fails to upload successfully.
     var fail= function(error) {

        alert("An error has occurred: Code = " + error.code);
      };
      options = new FileUploadOptions();
      // parameter name of file:
      options.fileKey = "image";
      // name of the file:
      options.fileName = this.photo.substr(this.photo.lastIndexOf('/') + 1);
      // mime type:
      options.mimeType="image/png";
      options.chunkedMode=true;
      params = {
        latitude: 1, //this.location.latitude,
        longitude : 2,// this.location.longitude,
        tag : this.tag
      };
      options.params = params;
      ft = new FileTransfer();
      ft.upload(this.photo, service, callback, fail, options);


    }
  };
});

