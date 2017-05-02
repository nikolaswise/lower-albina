import addLayer from '../add-layer.js'
import color from '../color.js'
import Renderer from '../renderer.js'
import setPatterns from '../patterns.js'

import $ from '../lib/$.js'

var url = 'http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Lower%20Albina%20-%20Zoning%20Data/FeatureServer/0'

setPatterns()

var defaults = {
  fill: false,
  fillOpacity: 0.1,
  opacity: 0
};

var render = (feature) => {
  let fObj = feature.properties.OVRLY
  if (fObj == 'a') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-1")'
    })
    return Renderer(styles);
  } else if (fObj == 'd') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#horizontal-stripe-4")'
    })
    return Renderer(styles);
  } else if (fObj == 's') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-2")'
    })
    return Renderer(styles);
  } else if (fObj == 'i') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-3")'
    })
    return Renderer(styles);
  } else if (fObj == 'ad') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-5")'
    })
    return Renderer(styles);
  } else if (fObj == 'dg') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#crosshatch")'
    })
    return Renderer(styles);
  } else if (fObj == 'ds') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-6")'
    })
    return Renderer(styles);
  } else if (fObj == 'is') {
    let styles = Object.assign({}, defaults);
    Object.assign(styles, {
      fill: true,
      fillColor: 'url("#diagonal-stripe-5")'
    })
    return Renderer(styles);
  } else {
    return Renderer(defaults);
  }
}

export default addLayer(url, render);
