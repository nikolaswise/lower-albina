import chroma from 'chroma-js'

var colorConfig = {
  paleYellow:  chroma([92, 0, 31], 'lab'),
  lightOrange: chroma([77, 22, 61], 'lab'),
  darkOrange:  chroma([40, 39, 43], 'lab'),
  lightGreen:  chroma([78, -28, 10], 'lab'),
  darkGreen:   chroma([48, -25, 9], 'lab'),
  lightBlue:   chroma([97, -2, -15], 'lab'),
  darkBlue:    chroma([7, -2, -15], 'lab'),
  white:       chroma([0, 0, 100], 'hsl'),
  black:       chroma([0, 0, 0],   'hsl')
};


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

var color = new Color(colorConfig)
export default color;
