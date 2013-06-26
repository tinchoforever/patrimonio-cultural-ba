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

    L.marker([52.518898,13.40714]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9QrAidirlJ/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([35.666501,139.695969]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9XIL1Uu2BJ/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([47.662613,-117.43629]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9v7iEtYa6Y/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([40.780866,-73.965712]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9dMTTzvmnY/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([51.510078,-0.135291]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9XUIiXnt9F/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([-34.603824,-58.379288]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/bEjnhIVXWXq/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([41.869561,12.524414]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9wM722n5pw/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([59.327936,18.06427]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/bEtXDAg6Xxb/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([55.751849,37.614441]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/bEYwl5DMBA3/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([-22.974831,-43.211975]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/bEtiTYmYQUh/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([21.943046,79.145508]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9hHvXQl9Pj/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    L.marker([48.858278,2.294126]).addTo(map).bindPopup('<iframe class="vine-embed" src="https://vine.co/v/b9PwPrFij1H/embed/simple" width="320" height="320" frameborder="0"></iframe>');

    // add a marker in the given location, attach some popup content to it and open the popup


}]);


