import events from './lib/pub-sub'

// Build the map
var map = L.map('map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  dragging: false,
  center: [45.539, -122.669],
  zoom: 13
})

map.whenReady(function() {
  events.emit('map:ready', map)
})

// Create the Base Layers
map.createPane('contours')
import Contours from './layers/contours.js'


map.createPane('taxlots')
// import Taxlots from './layers/taxlots.js'
// Taxlots.addTo(map)

// Create the Study Layers
map.createPane('zoning')
// import Zoning from './layers/zoning.js'
// Zoning.addTo(map)

map.createPane('footprints')
// import Footprints from './layers/footprints.js'
// Footprints.addTo(map)


// Create the Reference Layers
map.createPane('river')
// import River from './layers/river.js'
// River.addTo(map)

map.createPane('streets')
// import Streets from './layers/streets.js'
// Streets.addTo(map)


// Create Other Goodies

// Like the Scalebar
import Scalebar from './lib/scale'
import imperialTemplate from './templates/imperialScale.js'
import metricTemplate from './templates/metricScale.js'

let scalebar = new Scalebar(map)
scalebar.custom('scalebar-miles', imperialTemplate)

export default map