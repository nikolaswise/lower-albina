var chroma = require( "chroma-js" )
import addLayer from '../add-layer.js'
import color from '../color.js'

var data = 'pdx-contours.geojson'
var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Contours_5ft_pdx_(1)/FeatureServer/0';

var field = 'ELEVATION'
var minElevation =  20
var maxElevation = 250

var scale = chroma.scale([color.palette.white, color.palette.black]).domain([minElevation, maxElevation], 'log')

console.log(scale(0).hex())

var render = (feature) => {
  // console.log(feature.properties[field])
  return {
    color: scale(feature.properties[field]).hex(),
    weight: 1,
    opacity: 0.3
  }
}

export default addLayer(data, render, 'contours');