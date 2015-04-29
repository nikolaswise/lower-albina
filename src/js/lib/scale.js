
let getScale = function(map) {
  var centerLatLng = map.getCenter();                    // get map center

  var pointC = map.latLngToContainerPoint(centerLatLng); // convert to containerpoint (pixels)
  var pointX = [pointC.x + 1, pointC.y];                 // add one pixel to x
  var pointY = [pointC.x, pointC.y + 1];                 // add one pixel to y

                                                         // convert containerpoints to latlng's
  var latLngC = map.containerPointToLatLng(pointC);
  var latLngX = map.containerPointToLatLng(pointX);
  var latLngY = map.containerPointToLatLng(pointY);

  var distanceX = latLngC.distanceTo(latLngX);           // calculate distance between c and x (latitude)
  var distanceY = latLngC.distanceTo(latLngY);           // calculate distance between c and y (longitude)

  var times = [distanceX, distanceY]

  var sum = times.reduce(function(distanceX, distanceY) { return distanceX + distanceY; })
  var avg = sum / times.length

  var meters       = avg                                 // meters per meter : 1
  var kilometer    = avg / 1000                          // meters per kilometer : 1000
  var feet         = avg * 3.2804                        // feet per meter : 3.2804
  var mile         = feet / 5280                         // feet per mile : 5280
  var nauticalMile = avg / 1852                          // meters per nautical mile

  var scale = {
    'pixel': {
      'toMeters': meters.toFixed(3),
      'toKilometer': kilometer.toFixed(3),
      'toFeet': feet.toFixed(3),
      'toMile': mile.toFixed(3),
      'toNauticalMile': nauticalMile.toFixed(3)
    },
    'meter' : {
      'toPixel': 1 / meters
    },
    'kilometer' : {
      'toPixel': 1 / kilometer
    },
    'feet' : {
      'toPixel': 1 / feet
    },
    'mile' : {
      'toPixel': 1 / mile
    },
    'nauticalMile' : {
      'toPixel': 1 / nauticalMile
    }
  }

  console.log(scale)
  return scale
}



export default getScale
