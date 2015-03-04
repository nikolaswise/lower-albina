var chroma = require( "chroma-js" );

class Color {
  constructor(config) {
    this.palette = config;
  }

  getValue(param) {
    return this.palette[param].hex();
  }

  getRamp(from, to, position, across) {
    var ramp = chroma.scale([this.palette[from], this.palette[to]]).domain([1, across], across, 'log');
    return ramp(position).hex();
  }
}

export default Color;
