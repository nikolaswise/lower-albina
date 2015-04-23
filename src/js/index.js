// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  dragging: false,
  center: [45.539, -122.671],
  zoom: 16
})

var baseLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/86e05ccc48f4eb1bc6e5b11531870916:1429636411308.12/{z}/{x}/{y}.png')
baseLayer.addTo(map);

import Zoning from './layers/zoning.js'
Zoning.addTo(map)

import Footprints from './layers/footprints.js'
Footprints.addTo(map)

var referenceLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/1058662162db119fc8bc42aa1d3ef080:1429741486907.6099/{z}/{x}/{y}.png')
referenceLayer.addTo(map);

var referencePane = map._createPane('leaflet-reference-pane', map.getPanes().mapPane);
referencePane.appendChild(referenceLayer.getContainer());
referenceLayer.setZIndex(9);

//http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/1058662162db119fc8bc42aa1d3ef080:1429741486907.6099/{z}/{x}/{y}.png
//  http://a.ashbu.cartocdn.com/nikolaswise/api/v1/map/1058662162db119fc8bc42aa1d3ef080:1429741486907.6099/16/10436/23434.png


// cartodb.createLayer(map, 'https://nikolaswise.cartodb.com/api/v2/viz/a98e1bc6-e93e-11e4-921b-0e4fddd5de28/viz.json')
//   .addTo(map)
//   .on('done', function(layer) {
//     //do stuff
//   })
//   .on('error', function(err) {
//     alert("some error occurred: " + err);
//   });
