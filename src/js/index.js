var chroma = require( "chroma-js" );

// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false
}).setView([45.539, -122.671], 16);

// Map Palette
import Color from './color.js';

var colorConfig = {
  paleYellow:  chroma([92, 0, 31], 'lab'),
  lightOrange: chroma([77, 22, 61], 'lab'),
  darkOrange:  chroma([40, 39, 43], 'lab'),
  lightGreen:  chroma([78, -28, 10], 'lab'),
  darkGreen:   chroma([48, -25, 9], 'lab'),
  lightBlue:   chroma([97, -2, -15], 'lab'),
  darkBlue:    chroma([7, -2, -15], 'lab'),
  white:       chroma([0, 0, 100], 'hsl'),
  black:       chroma([0, 0, 0],   'hsl')
};

var color = new Color(colorConfig);
// console.log(color)
export default color;

// Map layers
import contours from './layers/contours.js';
contours.addTo(map);

import zoning from './layers/zoning.js';
zoning.bindPopup(function(features){
  return "Zone: " + features.properties.ZONE;
});
zoning.addTo(map);

import footprints from './layers/footprints.js';
footprints.addTo(map);
