var mapContainer = document.getElementById('map');
var map;
function init() {
  //Google map settings (zoom level, map type etc.)
  var mapOptions = {zoom: 16,
    disableDefaultUI: true, 
    mapTypeId: google.maps.MapTypeId.ROADMAP};
  //map will be drawn inside the mapContainer
  map = new google.maps.Map(mapContainer, mapOptions);
  detectLocation();
}
function detectLocation(){
  var options = { enableHighAccuracy: true, 
    maximumAge: 1000, timeout: 30000};
  //check if the browser supports geolocation
  if (window.navigator.geolocation) {
    //get current position
    window.navigator.geolocation.getCurrentPosition(
      drawLocationOnMap, 
      handleGeoloacteError, 
      options);
  } else {
    alert("Sorry, your browser doesn't seem to support geolocation :-(");
  }
}
//callback function of getCurrentPosition(), pinpoints location
//on Google map
function drawLocationOnMap(position) {
  //get latitude/longitude from Position object
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var msg = "Delivery Location: Latitude "+lat+", Longitude "+lon;
  var pos = new google.maps.LatLng(lat, lon);
  var infoBox = new google.maps.InfoWindow({map: map, 
    position:pos, 
    content: msg});
  map.setCenter(pos);
  return;
}
function handleGeoloacteError() {
  alert("Sorry, couldn't get your location :-(");
}
window.onload = init;