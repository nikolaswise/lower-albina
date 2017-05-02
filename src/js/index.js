// Build the map

var map = L.map('map', {
  scrollWheelZoom: true,
  doubleClickZoom: false,
  zoomControl: false,
  dragging: true,
  center: [45.539, -122.669],
  zoom: 16
})

map.createPane('contours')
import contours from './layers/contours.js'
contours.addTo(map)

map.createPane('taxlots')
import Taxlots from './layers/taxlots.js'
Taxlots.addTo(map)


// // Create the Study Layers
map.createPane('zoning')
import Zoning from './layers/zoning.js'
Zoning.addTo(map)


map.createPane('footprints')
import Footprints from './layers/footprints.js'
Footprints.addTo(map)

// // Create the Reference Layers
map.createPane('river')
import River from './layers/river.js'
River.addTo(map)


map.createPane('streets')
import Streets from './layers/streets.js'
Streets.addTo(map)


// contours.addTo(map)
// Taxlots.addTo(map)
// Zoning.addTo(map)
// Footprints.addTo(map)
// River.addTo(map)
// Streets.addTo(map)

export default map