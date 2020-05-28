export const mainContact = () => {
  mapbox();
}

const mapbox = () => {
  let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
  mapboxgl.accessToken = 'pk.eyJ1IjoidGhpYmF1dGRtOTgzMCIsImEiOiJjazNvZXB6aWcwa2tmM3BxZXBxZXVyam00In0.KhbUklIWzPRMVVMuJvpNzg';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [3.668691, 51.087530],
    zoom: 8
  });
  
  let marker = new mapboxgl.Marker()
    .setLngLat([3.668691, 51.087530])
    .addTo(map);
}