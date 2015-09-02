import addLayer from '../add-layer.js';
import color from '../color.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Taxlots,%20Lower%20Albina%20Plus/FeatureServer/0';

var render = (feature) => {
  return {
    color: color.palette.black,
    weight: 0.25,
    opacity: 0.4,
    fillOpacity: 0
  }
}

export default addLayer(url, render, 'taxlots');