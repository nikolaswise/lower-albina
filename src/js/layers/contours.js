import addLayer from '../add-layer.js';
import color from '../index.js';
console.log(color);

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Contours_5ft_pdx_(1)/FeatureServer/0';

var render = (feature) => {
  return {
    color: color.getValue('black'),
    weight: 1,
    opacity: 0.1
  }
}

export default addLayer(url, render);

