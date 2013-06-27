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
    getAllNear: function(point, callback){
      this.points = [];
      var self = this;
      // var service = 'http://localhost:1984/api/v1/points/take/10';
      var service ='http://192.168.1.233:1984/api/v1/points/take/10';
      $http.get(service).success(function(data){
        self.points = data;
        callback(self.points);
      });


    },
    submit:function (callback){
       // var service = 'http://localhost:1984/api/v1/points/create';
      var service ='http://192.168.1.233:1984/api/v1/points/create';
      // var dataURL = canvas.toDataURL("image/png")
      var fail, ft, options, params, win;

    // callback if the photo fails to upload successfully.
     var fail= function(error) {

        alert("Ups, no hemos podido transferir la foto. Intentalo de nuevo! ");
        callback(false);
      };
      options = new FileUploadOptions();


      // parameter name of file:
      options.fileKey = "image";
      options.fileName = this.photo.substr(this.photo.lastIndexOf('/') + 1);
      options.mimeType="image/png";
      options.chunkedMode=true;

      //Parameters
      options.params =  {
        latitude: this.location.latitude,
        longitude : this.location.longitude,
        tag : this.tag
      };
      console.log(options.params );

      // send file
      ft = new FileTransfer();
      ft.upload(this.photo, service, callback, fail, options);


    }
  };
});

