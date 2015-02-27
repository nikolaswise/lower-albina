import addLayer from '../add-layer.js';
import color from '../index.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Zoning_Data/FeatureServer/3';

var field = 'ZONE';

var types = {
  'residential': {
    values: ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR'],
    // ramp: [[47, -2, -15],[32, -2, -15]],
  },
  'commercial': {
    values: ['CN1', 'CN2', 'CO1', 'CO2', 'CM', 'CS', 'CG', 'CX'],
    // ramp: 'yellow',
  },
  'industrial': {
    values: ['IG1', 'EG1', 'IG2', 'EG2', 'IH', 'EX'],
    // ramp: 'red',
  },
  'open': {
    values: ['OS'],
    // ramp: 'green',
  }
};

var featurePlacement = (category, feature) => {
  return types[category].values.indexOf(feature.properties[field]) ;
};

var style = {
  stroke: true,
  color: color.getValue('white'),
  weight: 1,
  opacity: 0.5,
  fill: true,
  fillColor: color.getValue('white'),
  fillOpacity: 0.1,
  dashArray: null,
  lineCap: null,
  lineJoin: null,
  clickable: true,
  pointerEvents: null,
  className: ''
};

var render = (feature) => {
  if (featurePlacement('residential', feature) > -1) {
    style.fillColor = color.getValue('lightBlue');
    return style;
  } else if (featurePlacement('commercial', feature) > -1) {
    style.fillColor = color.getValue('paleYellow');
    return style;
  } else if (featurePlacement('industrial', feature) > -1) {
    style.fillColor = color.getValue('lightOrange');
    console.log(featurePlacement('industrial', feature));
    return style;
  } else {
    return style;
  }
};


export default addLayer(url, render);
