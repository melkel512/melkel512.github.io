// This array contains the coordinates for all bus stops on the IUPUI Jagline Crimson Line
const busStops = [
  [-86.16828, 39.77444], 
  [-86.17056, 39.77449], 
  [-86.17439, 39.77462], 
  [-86.17880, 39.77463], 
  [-86.18220, 39.77474], 
  [-86.18425, 39.77500], 
  [-86.18529, 39.77389], 
  [-86.18362, 39.77268], 
  [-86.17890, 39.77174], 
  [-86.17569, 39.77170], 
  [-86.17139, 39.77149], 
  [-86.16856, 39.77295], ];
  // Add your own access token for mapbox
  mapboxgl.accessToken = 'pk.eyJ1IjoibWVsa2VsIiwiYSI6ImNsN3doM2R4czBsangzb3BqdzR1dGp4MmMifQ.os_eothyNG5LINntCfbJDQ';
  // This is the map instance
let map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [-86.17687, 39.77390], 
  zoom: 14.5, 
});
  // Marker added to the map at the first coordinates in the array busStops. 
var marker = new mapboxgl.Marker()
  .setLngLat([-86.16828, 39.77444])
  .addTo(map);
  // counter here represents the index of the current bus stop
let counter = 0;
    // Marker should move on the map every 1000ms (1 sec). 
    //The function marker.setLngLat() updates the marker coordinates
    // The counter is used to access bus stops in the array busStops
    // Call move() after counter is incremented.
function move() {
  setTimeout(() =>{ 
    if (counter >= busStops.length) return;  
    marker.setLngLat(busStops[counter]); 
    counter++; 
    move(); 
  }, 1500); 
}
  
  // Do not edit code past this point
if (typeof module !== 'undefined') { module.exports = { move }; }