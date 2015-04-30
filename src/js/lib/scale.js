import hogan from 'hogan.js'
import $ from './$.js'
import diffdom from 'diff-dom'

class Scalebar extends L.control.scale {
  constructor(map) {
    super()
    this.map = map
  }
  getScale() {
    let map = this.map
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
      'pixelTo': {
        'meters': meters.toFixed(3),
        'kilometer': kilometer.toFixed(3),
        'feet': feet.toFixed(3),
        'mile': mile.toFixed(3),
        'nauticalMile': nauticalMile.toFixed(3)
      },
      'pixelFrom': {
        'meter' : 1 / meters,
        'kilometer' : 1 / kilometer,
        'halfKilometer' : 0.5 / kilometer,
        'quarterKilometer' : 0.25 / kilometer,
        'eigthKilometer' : 0.125 / kilometer,
        'feet' : 1 / feet,
        'mile' : 1 / mile,
        'halfMile': 0.5 / mile,
        'quarterMile': 0.25 / mile,
        'eigthMile': 0.125 / mile,
        'nauticalMile' : 1 / nauticalMile
      }
    }
    return scale
  }

  draw(element, template) {
    let render = () => {
      let scale = this.getScale()
      let tmp = hogan.compile(template);
      let dd = new diffdom()

      let compileHTML = function (scale) {
        return tmp.render({scale: scale});
      };

      let el1 = $(`#${element}`)[0]
      let el2 = el1.cloneNode()
      el2.insertAdjacentHTML('afterbegin', compileHTML(scale))

      let diff = dd.diff(el1, el2)
      dd.apply(el1, diff)
    }

    this.map.whenReady(function(){
      render()
    })
    this.map.on('zoomend', function(){
      render()
    })

  }
}

console.log(Scalebar)

export default Scalebar
