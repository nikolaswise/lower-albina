let metricTemplate = `
  <div class="left" style="width:{{scale.pixelFrom.halfKilometer}}px">
    <h6 class="scale-unit">kilometers</h6>
    <div class="scale-bars">
      <div class="quarter-scale scale-section"><span class="scale-fill"></span></div>
      <div class="quarter-scale scale-section"><span class="scale-fill"></span></div>
      <div class="half-scale scale-section"><span class="scale-fill"></span></div>
    </div>
    <div class="scale-labels">
      <div class="quarter-scale text-left">
        <h6 class="label">0</h6>
      </div>
      <div class="quarter-scale text-left">
        <h6 class="label">1/8</h6>
      </div>
      <div class="half-scale">
        <h6 class="label left">1/4</h6>
        <h6 class="label right">1/2</h6>
      </div>
    </div>
  </div>

`

export default metricTemplate