import styleLayer from './style-layer.js';

var addLayer = (url, render) => {
  if (Object.keys(render).length) {
    let layer = L.esri.featureLayer(url, {
      style : render
    });
    return layer;
  }
  return L.esri.featureLayer(url);
}

export default addLayer;
