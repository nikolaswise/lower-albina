import styleLayer from './style-layer.js';

var addLayer = (url, config) => {
  let style = styleLayer(config);

  let layer = L.esri.featureLayer(url, {
    style : style
  });

  return layer;
}

export default addLayer;