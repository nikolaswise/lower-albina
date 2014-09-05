angular.module('lowerAlbinaApp.services', [])

.value('version', '0.1')

.service('colorService', function() {

  // Zoning Colors
  var paleYellow       = chroma([92, 0, 31], 'lab');

  var lightOrange      = chroma([77, 22, 61], 'lab');
  var darkOrange       = chroma([40, 39, 43], 'lab');

  var lightGreen       = chroma([78, -28, 10], 'lab');
  var darkGreen        = chroma([48, -25, 9], 'lab');

  var lightBlue        = chroma([47, -2, -15], 'lab');
  var darkBlue         = chroma([32, -2, -15], 'lab');

  var white       = chroma([0, 0, 100], 'hsb');
  var black       = chroma([0, 0, 0],   'hsb');

  return {
    getColor: function(type) {
      var color;
      switch (type) {
        case 'residential' :
          color = lightBlue;
          return color;
        case 'commercial' :
          color = lightOrange;
          return color;
        case 'industrial' :
          color = darkOrange;
          return color;
        case 'employment' :
          color = lightOrange;
          return color;
        case 'open' :
          color = lightGreen;
          return color;
      }
    },
    getScale: function(type, stops) {
      var scale;
      switch (type) {
        case 'residential' :
          scale = chroma.scale([lightBlue, darkBlue]).domain([0, stops], 'log').correctLightness(true);
          // scale = chroma.scale([white, black]).domain([0, 9], 'log').correctLightness(true);
          // console.log(scale());
          return scale;
        case 'commercial' :
          scale = chroma.scale([lightBlue, darkBlue]).domain([0, stops], 'log').correctLightness(true);
          return scale;
        case 'industrial' :
          scale = chroma.scale([lightGreen, darkGreen]).domain([0, stops], 'log').correctLightness(true);
          return scale;
        case 'employment' :
          scale = chroma.scale(['lightyellow', 'navy']).domain([0, stops], 'log').correctLightness(true);
          return color;
        case 'open' :
          color = paleYellow;
          return color;
      }
    }
  };
});
