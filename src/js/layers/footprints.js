import addLayer from '../add-layer.js';
import color from '../index.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Eliot%20Building%20Footprints/FeatureServer/0';

var render = (feature) => {
  return {
    color: color.getValue('white'),
    stroke: 0,
    fillOpacity: 1
  }
}

export default addLayer(url,render);
