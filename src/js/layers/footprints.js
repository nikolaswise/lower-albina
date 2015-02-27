import addLayer from '../add-layer.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Eliot%20Building%20Footprints/FeatureServer/0';

var render = function (feature) {
  return {
    color: '#ffffff',
    stroke: 0,
    fillOpacity: 1
  };
};

export default addLayer(url,render);
