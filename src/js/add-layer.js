var xhr = require("xhr")
import map from './index.js'

var addLayer = (url, render, pane) => {
  xhr({
      url: `./data/${url}`,
  }, function (err, resp, body) {
    if (err) console.log(err)

    let data = JSON.parse(body)
    let layer = L.geoJson(data, {
      pane: pane,
      style: render,
    })

    layer.addTo(map)
  })
}

export default addLayer
