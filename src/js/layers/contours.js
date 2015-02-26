import addLayer from '../add-layer.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Contours_5ft_pdx_(1)/FeatureServer/0';

var config = {
  color: 'black',
  weight: 1,
  opacity: 0.1
};

export default addLayer(url, config);

