// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  center: [45.539, -122.671],
  zoom: 16
})

var baseLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/86e05ccc48f4eb1bc6e5b11531870916:1429636411308.12/{z}/{x}/{y}.png')
baseLayer.addTo(map);

import Zoning from './layers/zoning.js'
Zoning.addTo(map)

var referenceLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/f37074a8ebf44b62f5528a77731b6394:1429640791228.1301/{z}/{x}/{y}.png')
referenceLayer.addTo(map);

var referencePane = map._createPane('leaflet-reference-pane', map.getPanes().mapPane);
referencePane.appendChild(referenceLayer.getContainer());
referenceLayer.setZIndex(9);