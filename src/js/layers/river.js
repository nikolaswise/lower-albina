import addLayer from '../add-layer.js';
import color from '../index.js';
import Renderer from '../renderer.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Summarize%20Map%20Notes_Areas%20within%20USA%20Detailed%20Water%20Bodies/FeatureServer/0'

var defaults = {
  fillColor: '#fefefe',
  stroke: null,
  fillOpacity: 1
};

var render = (feature) => {
  return Renderer(defaults)
}

export default addLayer(url, render);
