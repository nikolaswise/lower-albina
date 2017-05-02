var addLayer = (url, render, pane) => {
  return L.esri.featureLayer({
    pane: pane,
    url: url,
    style : render
  })
}

export default addLayer