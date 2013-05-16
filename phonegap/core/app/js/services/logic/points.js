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

      var service ='http://192.168.1.102:1984/api/v1/points/create';


     // var dataURL = canvas.toDataURL("image/png");
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

