import addLayer from '../add-layer.js';

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Zoning_Data/FeatureServer/3';

let types = {
  'residential': {
    values: ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR'],
    ramp: [[47, -2, -15],[32, -2, -15]],
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
}

var config = {
  field: 'ZONE',
  types: types,
  weight: 0.5,
  opacity: 0.3,
  // fillOpacity: 0.05
};

export default addLayer(url, config);
