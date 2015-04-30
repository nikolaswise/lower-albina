let metricTemplate = `
  <div class="left" style="width:{{scale.pixelFrom.halfKilometer}}px">
    <h6 class="scale-unit">kilometers</h6>
    <div class="scale">
      <div class="eighth scale-section"><span class="scale-fill"></span></div>
      <div class="eighth scale-section"><span class="scale-fill"></span></div>
      <div class="half scale-section"><span class="scale-fill"></span></div>
    </div>
    <div class="scale-labels">
      <div class="eighth text-left">
        <h6>0</h6>
      </div>
      <div class="eighth text-left">
        <h6>1/8</h6>
      </div>
      <div class="half">
        <h6 class="left">1/4</h6>
        <h6 class="right">1/2</h6>
      </div>
    </div>
  </div>

`

export default metricTemplate