
$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([51.505, -0.09], 15);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', maxZoom: 18}
                ).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([51.505, -0.09]).addTo(map)
    	.bindPopup('Inicio')
    	.openPopup();

    map.locate({setView: true});


    function clickMap(e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        .bindPopup(e.latlng.lat +", "+ e.latlng.lng)
        .openPopup();
    }

    map.on('click', clickMap);


    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(map)
          .bindPopup("You are within " + radius + " meters from this point").openPopup();

      L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);



});
