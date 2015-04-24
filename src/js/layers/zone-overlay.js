import addLayer from '../add-layer.js';
import color from '../color.js'
import Renderer from '../renderer.js';
var objectAssign = require('object-assign');


var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Lower%20Albina%20-%20Zoning%20Data/FeatureServer/0';

var field = 'OVRLY';

var defaults = {
  fillColor: color.getValue('white'),
  fillOpacity: 0
};

var render = (feature) => {
  let fObj = feature.properties[field]

  if (fObj == 'a') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.1
    })
    return Renderer(styles);
  } else if (fObj == 'd') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.2
    })
    return Renderer(styles);
  } else if (fObj == 's') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.3
    })
    return Renderer(styles);
  } else if (fObj == 'i') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.4
    })
    return Renderer(styles);
  } else if (fObj == 'ad') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.5
    })
    return Renderer(styles);
  } else if (fObj == 'dg') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.6
    })
    return Renderer(styles);
  } else if (fObj == 'ds') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.7
    })
    return Renderer(styles);
  } else if (fObj == 'is') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('black'),
      fillOpacity: 0.8
    })
    return Renderer(styles);
  } else {
    return Renderer(defaults);
  }
}

export default addLayer(url, render);
