import events from './lib/pub-sub'

// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: true,
  dragging: false,
  center: [45.539, -122.669],
  zoom: 16
})

map.whenReady(function() {
  events.emit('map:ready', map)
})

// Create the Base Layers
map.createPane('contours')
import Contours from './layers/contours.js'
Contours.addTo(map)

map.createPane('taxlots')


// Create the Study Layers
map.createPane('zoning')
import Zoning from './layers/zoning.js'
console.log(Zoning)
// Zoning.addTo(map)

map.createPane('footprints')
import Footprints from './layers/footprints.js'
// Footprints.addTo(map)


// Create the Reference Layers
map.createPane('streets')
map.createPane('river')


// Create Other Goodies

// Like the Scalebar
import Scalebar from './lib/scale'
import imperialTemplate from './templates/imperialScale.js'
import metricTemplate from './templates/metricScale.js'

let scalebar = new Scalebar(map)
scalebar.custom('scalebar-miles', imperialTemplate)
