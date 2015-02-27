// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false
}).setView([45.539, -122.671], 17);

// Map Palette
import Color from './color.js';

var colorConfig = {
  black: '#000000',
  white: '#ffffff',
  green: '#A6E22E'
};

var color = new Color(colorConfig);
export default color;

// Map layers
import contours from './layers/contours.js';
contours.addTo(map);

import zoning from './layers/zoning.js';
zoning.addTo(map);

import footprints from './layers/footprints.js';
footprints.addTo(map);

