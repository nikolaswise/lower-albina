import addLayer from '../add-layer.js';

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

var style = {
  stroke: true,
  color: '#FAFAFA',
  weight: 1,
  opacity: 0.5,
  fill: true,
  fillColor: '#FAFAFA',
  fillOpacity: 0.66,
  dashArray: null,
  lineCap: null,
  lineJoin: null,
  clickable: true,
  pointerEvents: null,
  className: ''
};

var render = (feature) => {
  if (types.residential.values.indexOf(feature.properties[field]) > -1) {
    style.fillColor ='#F2E6E0';
    return style;
  } else if (types.commercial.values.indexOf(feature.properties[field]) > -1) {
    style.fillColor ='#FEF4E7';
    return style;
  } else if (types.industrial.values.indexOf(feature.properties[field]) > -1) {
    style.fillColor ='#E5E8EB';
    return style;
  } else {
    return style;
  }
};


export default addLayer(url, render);
