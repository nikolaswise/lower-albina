// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false
}).setView([45.537, -122.672], 16);

// Map layers
import contours from './layers/contours.js';
contours.addTo(map);

import zoning from './layers/zoning.js';
zoning.addTo(map);

import footprints from './layers/footprints.js';
footprints.addTo(map);

