angular.module('lowerAlbinaApp.services', [])

.value('version', '0.1')

.service('colorService', function() {
  var pallette = {
    "yellow": {
      "name": "yellow",
      "colorspace": "lab",
      "range": [
        [92, 0, 31]                   // paleYellow
      ]
    },
    "orange": {
      "name": "orange",
      "colorspace": "lab",
      "range": [
        [77, 22, 61],                 // lightOrange
        [40, 39, 43]                 // darkOrange
      ]
    },
    "green": {
      "name": "green",
      "colorspace": "lab",
      "range": [
        [78, -28, 10],                // lightGreen
        [48, -25, 9]                  // darkGreen
      ]
    },
    "blue": {
      "name": "blue",
      "colorspace": "lab",
      "range": [
        [47, -2, -15],                // lightBlue
        [32, -2, -15]                 // darkBlue
      ]
    },
    "gray": {
      "name": "gray",
      "colorspace": "hsb",
      "range": [
        [0, 0, 100],                  // white
        [0, 0, 0]                     // black
      ]
    }
  };

  return {
    palletteService: function(colorset, stops) {
      var start = chroma(pallette[colorset].range[0], pallette[colorset].colorspace);
      var stop  = chroma(pallette[colorset].range[1], pallette[colorset].colorspace);
      var scale = chroma.scale([start, stop]).domain([0, stops], 'log').correctLightness(true);
      return scale;
    },

    fill: function(feature, renderer) {
      var field        = renderer.field;
      var vals         = renderer.vals;
      var weight       = 0; //default
      var opacity      = 0; //default
      var fillOpacity  = 0; //default
      var scale        = this.palletteService(renderer.colorSet, renderer.vals.length);

      if (renderer.strokeWeight) {
        weight = renderer.strokeWeight;
      }
      if (renderer.strokeOpacity) {
        opacity = renderer.strokeOpacity;
      }
      if (renderer.fillOpacity) {
        fillOpacity  = renderer.fillOpacity;
      }

      for (var i = 0; i < vals.length; i++) {
        if (field == vals[i]) {
          console.log(scale(i));
          return {
            color: scale(i),
            weight: weight,
            opacity: opacity,
            fillOpacity: fillOpacity,
          };
        }
      }
    },

    stroke: function(feature, field, val, colorset) {

    },
  };
});
