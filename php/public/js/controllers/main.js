'use strict';
angular.module('App.controllers',  ['google-maps', 'LocalStorageModule', 'App.services'])
.controller('main', ['$scope', 'localStorageService', 'points', function ($scope, localStorageService, points) {

    $(".leaflet-container img").fadeIn(10);


    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map', {
        center: [49,14],
        zoom: 3,
        minZoom: 3,
        whenReady: function(){
            console.log("map ready");
            return this;
        }

    })

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png').addTo(map);

    //if (navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(function(g){
    //      map.setView([g.coords.latitude, g.coords.longitude], 3);
    //  });
    //}

    L.marker([52.518898,13.40714]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div></div>');

    L.marker([35.666501,139.695969]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([47.662613,-117.43629]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([40.780866,-73.965712]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([51.510078,-0.135291]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([-34.603824,-58.379288]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([41.869561,12.524414]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([59.327936,18.06427]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([55.751849,37.614441]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([-22.974831,-43.211975]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([21.943046,79.145508]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    L.marker([48.858278,2.294126]).addTo(map).bindPopup('<div class="pic-container"><div class="pic-title"><h2>Avenida del Libertador 3360</h2><p>Monumento de los Españoles</p></div><img src="../img/sample-art.jpg" alt="" /></div>');

    // add a marker in the given location, attach some popup content to it and open the popup


}]);


