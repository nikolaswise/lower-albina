angular.module('lowerAlbinaApp.controllers', [])

.controller('mapController', ['$scope', 'colorService', function($scope, Color) {
  console.log('controller on');

  var white       = chroma([0, 0, 100], 'hsv');
  var black       = chroma([0, 0, 0],   'hsv');

  var greyscale = chroma.scale([black, white]).domain([0, 10], 'log').correctLightness(true);
  for (var j = 10; j > 0; j--){
    console.log(greyscale(j).hsv()[2]);
  }

  var map = L.map('map', {
    // dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    zoomControl: false
  }).setView([45.537, -122.672], 16);

  var contours = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Contours_5ft_pdx_(1)/FeatureServer/0', {
    style: function (feature) {
      return {
        color: 'black',
        weight: 1,
        opacity: 0.1
      };
    }
  });
  contours.addTo(map);

  var zoning = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Zoning_Data/FeatureServer/3', {
    style: function (feature) {

      // var fill;
      var targetField = feature.properties.ZONE;
      var targetVals  = ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR'];
      // var colorSet    = palletteService(blue);



      // colorService.fill(feature, targetField, targetVals, colorSet);
      // colorService.stroke(feature, targetField, targetVals, colorSet);

      // symbolService.marker(feature, targetField, targetVals, colorSet);
      // symbolService.line(feature, targetField, targetVals, colorSet);

      // var residential = ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR'];
      // lives in colorService

      for (var i = 0; i < targetVals.length; i++) {
        fill = Color.getScale('residential', targetVals.length);
        if (targetField == targetVals[i]) {
          return {
            color: fill(i),
            weight: 0.5,
            opacity: 0.3,
            fillOpacity: 0.13
          };
        }
      }


      var residential = ['R5','R3','R2.5','R2','R1' ,'RX','RH','IR'];
      for (var i = 0; i < residential.length; i++) {
        fill = Color.getScale('residential', residential.length);
        if (targetField == residential[i]) {
          return {
            color: fill(i),
            weight: 0.5,
            opacity: 0.3,
            fillOpacity: 0.13
          };
        }
      }

      var commercial = [ 'CN1', 'CN2', 'CO1', 'CO2', 'CM', 'CS', 'CG', 'CX'];
      for (var i = 0; i < commercial.length; i++) {
        fill = Color.getColor('commercial', commercial.length);
        if (targetField == commercial[i]) {
          return {
            color: fill,
            weight: 0.5,
            opacity: 0.3,
            fillOpacity: 0.13
          };
        }
      }

      var industrial = ['IG1', 'EG1', 'IG2', 'EG2', 'IH', 'EX'];
      for (var i = 0; i < industrial.length; i++) {
        fill = Color.getColor('industrial', industrial.length);
        if (targetField == industrial[i]) {
          return {
            color: fill,
            weight: 0.5,
            opacity: 0.3,
            fillOpacity: 0.13
          };
        }
      }
      if (targetField == 'OS') {
        fill = Color.getColor('open');
        return {
          color: fill,
          weight: 0.5,
          opacity: 0.3,
          fillOpacity: 0.05
        };
      }
    }
  });
  zoning.addTo(map);

  var streets = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Streets/FeatureServer/0', {
    style: function (feature) {
      if (feature.properties.STREETNAME == 'INTERSTATE AVE-LARRABEE AVE' ) {
        return { color: '#fefefe', weight: 4, opacity: 1};
      } else if (feature.properties.STREETNAME == 'LARRABEE AVE-BROADWAY BRG' ) {
        return { color: '#fefefe', weight: 4, opacity: 1};
      } else if (feature.properties.STREETNAME == 'BROADWAY-WEIDLER ST' ) {
        return { color: '#fefefe', weight: 4, opacity: 1};
      } else if (feature.properties.FTYPE == 'FWY' || feature.properties.FTYPE == 'RAMP'){
        // console.log(feature.properties);
        return { color: '#fefefe', weight: 6, opacity: 1};
      } else if (feature.properties.FTYPE == 'BRG' && feature.properties.STREETNAME == 'FREMONT' ) {
        return { color: '#fefefe', weight: 6, opacity: 1};
      } else if (feature.properties.STREETNAME == 'HWY 30' ) {
        return { color: '#fefefe', weight: 6, opacity: 1};
      } else {
        return { color: '#fefefe', weight: 4, opacity: 1};
      }
    }
  });
  streets.addTo(map);

  var neighborhoods = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Neighborhoods/FeatureServer/0', {
    style: function (feature) {
      if (feature.properties.NAME !== 'ELIOT') {
        return {
          color: '#fefefe',
          opacity: 0,
          fillOpacity: 0.537
        };
      } else {
        return {
          opacity: 0,
          fillOpacity: 0
        };
      }
    }
  });
  neighborhoods.addTo(map);

  var footprints = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Eliot%20Building%20Footprints/FeatureServer/0', {
    style: function (feature) {
      return {
        color: '#fefefe',
        opacity: 0,
        fillOpacity: 1
      };
    }
  });
  footprints.addTo(map);


}])

.controller('MyCtrl2', ['$scope', function($scope) {

}]);
