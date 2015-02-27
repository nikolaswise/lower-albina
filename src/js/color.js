var chroma = require( "chroma-js" );

class Color {
  constructor(config) {
    this.palette = config;
  };

  getValue(param) {
    return this.palette[param].hex();
  };

  getRamp(from, to, across) {
    return 'hey';
  };
}



export default Color;