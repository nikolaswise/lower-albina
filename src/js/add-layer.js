import styleLayer from './style-layer.js';

var addLayer = (url, render) => {
  let layer = L.esri.featureLayer(url, {
    style : render
  });
  return layer;
}

export default addLayer;