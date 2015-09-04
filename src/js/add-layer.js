var xhr = require("xhr")
import map from './index.js'

console.log(map)

var addLayer = (url, render, pane) => {
  xhr({
      url: `./data/${url}`,
  }, function (err, resp, body) {
    if (err) console.log(err)

    let data = JSON.parse(body)
    console.log(data)

    let layer = L.geoJson(data, {
      pane: pane,
      style: render,
    })

    layer.addTo(map)
  })
}

export default addLayer
