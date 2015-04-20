var chroma = require( "chroma-js" )
var VectorTile = require('vector-tile').VectorTile;

console.log(VectorTile)

// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  center: [45.539, -122.671],
  zoom: 16,

})

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

var color = new Color(colorConfig)
export default color

// Map layers

L.tileLayer('https://{s}.tiles.mapbox.com/v4/nikolaswise.65959181/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmlrb2xhc3dpc2UiLCJhIjoieVJJcE1QUSJ9.f8co32wYW_YTeh_KM6PGLA#15').addTo(map);

// import Zoning from './layers/zoning.js';
// Zoning.addTo(map);

// import River from './layers/river.js';
// import Streets from './layers/streets.js';
// var overlay = L.layerGroup([River, Streets])
// overplay.addTo(ma)

// import Footprints from './layers/footprints.js';
// var footprints = L.layerGroup(Footprints)

// var webmap = L.layerGroup([zoning, footprints])

// webmap.addTo(map);
