let Renderer = function ({
  stroke = true,
  color = '#C0DEED',
  weight = 1,
  fillColor = '#C0DEED',
  opacity = 0.5,
  fill = true,
  fillOpacity = 0.5
} = {}) {
  let defaults = {
    stroke: stroke,
    color: color,
    weight: weight,
    fillColor: fillColor,
    opacity: opacity,
    fill: fill,
    fillOpacity: fillOpacity
  }
  return defaults
}

export default Renderer;