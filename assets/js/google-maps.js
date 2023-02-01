function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -30.312440406652428, lng: 30.739717738442295};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Rocklyn Drive, Park Rynie' // Title Location
    });
}