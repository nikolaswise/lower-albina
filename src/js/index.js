import events from './lib/pub-sub'

// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  dragging: false,
  center: [45.539, -122.669],
  zoom: 16
})

var baseLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/86e05ccc48f4eb1bc6e5b11531870916:1429636411308.12/{z}/{x}/{y}.png')
baseLayer.addTo(map);

import Overlay from './layers/zone-overlay.js'
Overlay.addTo(map)

import Zoning from './layers/zoning.js'
Zoning.addTo(map)

import Footprints from './layers/footprints.js'

var referenceLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/1058662162db119fc8bc42aa1d3ef080:1429741486907.6099/{z}/{x}/{y}.png')
referenceLayer.addTo(map);

var referencePane = map._createPane('leaflet-reference-pane', map.getPanes().mapPane);
referencePane.appendChild(referenceLayer.getContainer());
referenceLayer.setZIndex(9);

map.whenReady(function() {
  events.emit('map:ready', map)
})

setTimeout(function(){
  Footprints.addTo(map)
}, 200)


// cartodb.createLayer(map, 'https://nikolaswise.cartodb.com/api/v2/viz/b227929a-e848-11e4-a6e2-0e9d821ea90d/viz.json')
//   .addTo(map)
//   .on('done', function(layer) {
//     //do stuff
//   })
//   .on('error', function(err) {
//     alert("some error occurred: " + err);
//   });