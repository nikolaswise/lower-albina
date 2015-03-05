import addLayer from '../add-layer.js';
import color from '../index.js';
import Renderer from '../renderer.js';
var objectAssign = require('object-assign');

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Streets/FeatureServer/0'

var defaults = {
  fillColor: false,
  color: color.getValue('white'),
  fillOpacity: 0,
  weight: 3,
  opacity: 1
};

var render = (feature) => {
  if (feature.properties.STREETNAME == 'LARRABEE AVE-BROADWAY BRG') {
    return Renderer(defaults)

  } else if (feature.properties.STREETNAME == 'BROADWAY-WEIDLER ST') {
    return Renderer(defaults)

  } else if (feature.properties.STREETNAME == 'INTERSTATE AVE-LARRABEE AVE') {
    return Renderer(defaults)

  } else if (feature.properties.FTYPE == 'FWY' || feature.properties.FTYPE == 'RAMP') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      weight: 6
    })
    return Renderer(styles);

  } else if (feature.properties.FTYPE == 'BRG' && feature.properties.STREETNAME == 'FREMONT' ) {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      weight: 6
    })
    return Renderer(styles);

  } else if (feature.properties.STREETNAME == 'HWY 30' ) {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      weight: 6
    })
    return Renderer(styles);

  } else {
    return Renderer(defaults);
  }
}

export default addLayer(url,render);
