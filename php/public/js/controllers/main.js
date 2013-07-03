'use strict';
angular.module('App.controllers',  ['google-maps', 'LocalStorageModule', 'App.services'])
.controller('main', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {

    $(".leaflet-container img").fadeIn(10);


    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map', {
        //center: [49,14],
        center: [-34.603824,-58.379288],
        minZoom: 12,
        zoom: 15,
        whenReady: function(){
            console.log("map ready");
            return this;
        }
    });

    //icon marker
    var myIcon = L.icon({
        iconUrl: '../img/marker-icon.png',
        iconSize: [40, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });


    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png').addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(g){
          map.setView([g.coords.latitude, g.coords.longitude], 3);
      });
    }

    L.marker([-34.603824,-58.379288]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');
    L.marker([-34.605731,-58.434992]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');
    L.marker([-34.574218,-58.412418]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');
    L.marker([-34.61887,-58.370533]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');


    map.setZoom(12);



   // add a marker in the given location, attach some popup content to it and open the popup


}]);


