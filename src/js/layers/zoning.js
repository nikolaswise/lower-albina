import addLayer from '../add-layer.js';
import color from '../color.js'
import Renderer from '../renderer.js';
var objectAssign = require('object-assign');

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Lower%20Albina%20-%20Zoning%20Data/FeatureServer/0';
var field = 'ZONE';

var categories = [
  {
    category: 'residential',
    values: ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR']
  },
  {
    category: 'commercial',
    values: ['CN1', 'CN2', 'CO1', 'CO2', 'CM', 'CS', 'CG', 'CX']
  },
  {
    category: 'industrial',
    values: ['IG1', 'EG1', 'IG2', 'EG2', 'IH', 'EX']
  },
  {
    category: 'open',
    values: ['OS']
  }
]
var getCategory = (feature) => {
  let featurePosition
  categories.forEach(cat => {
    let position = cat.values.indexOf(feature.properties[field])
    let contains = position > -1
    if (contains == true ) {
      featurePosition = {
        category: cat.category,
        position: position,
        within: cat.values.length
      }

    }
  });
  return featurePosition
}

var defaults = {
  fillColor: color.getValue('black'),
  color: color.getValue('white'),
  fillOpacity: 0.1
};

var render = (feature) => {

  let fObj = getCategory(feature)

  if (fObj && fObj.category) {} else { console.log(feature); }

  if (fObj.category == 'residential') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getRamp('lightBlue', 'darkBlue', fObj.position, fObj.within)
    })
    return Renderer(styles);

  } else if (fObj.category == 'commercial') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('paleYellow'),
      fillOpacity: 0.2
    })
    return Renderer(styles);

  } else if (fObj.category == 'industrial') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getRamp('lightOrange', 'darkOrange', fObj.position, fObj.within),
    })
    return Renderer(styles);

  } else if (fObj.category == 'open') {
    let styles = objectAssign({}, defaults);
    objectAssign(styles, {
      fillColor: color.getValue('lightGreen'),
      fillOpacity: 0.2
    })
    return Renderer(styles);

  } else {
    return Renderer(defaults);
  }
};

export default addLayer(url, render);
