var chroma = require( "chroma-js" );

class Color {
  constructor(config) {
    this.palette = config;
  };

  getValue(param) {
    return this.palette[param];
  };
}



export default Color;