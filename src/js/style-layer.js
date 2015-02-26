var chroma = require( "chroma-js" );

var styleLayer = (config) => {
  if (config.field) {
    return (feature) => {
      let field = config.field;
      let types = config.types;

      Object.keys(types).forEach((key) => {
        let obj = types[key];
        // console.log(obj);
        // console.log(key);

        if (obj.ramp) {
          let stops = obj.values.length;
          let scale = chroma.scale([
            chroma(obj.ramp[0], 'lab'),
            chroma(obj.ramp[1], 'lab'),
          ]);
          scale.domain([0, stops], 'log');
          scale.correctLightness(true);

          for (let i = 0; i < stops; i++) {
            console.log(feature.properties[field] == obj.values[i]);
            let fill = scale(i).hex();
            config.fill = fill;
            // return config;
          }
        } else {
          return config;
        }
      })
    }
  } else {
    return config;
  }
}

export default styleLayer;

// stroke Boolean
// color String
// weight Number
// opacity Number
// fill Boolean
// fillColor String
// fillOpacity Number
// dashArray String
// lineCap String
// lineJoin String
// clickable Boolean
// pointerEvents String
// className String

//  Object.keys(types).forEach((key) => {
//   let obj = types[key];

//   let scale = chroma.scale([lightBlue, darkBlue]);
//   let stops = obj.values.length;

//   scale.domain([0, stops], 'log')
//   scale.correctLightness(true)

//   console.log(key);
//   console.log(obj.values.length);
//   console.log(obj.ramp);

//   for (let value of obj.values) {
//     console.log(value);
//     console.log(obj.fillOpacity);
//     if (field == value ) {
//       if (obj.fillOpacity) {
//         config.fillOpacity = obj.fillOpacity;
//       }
//     }
//     console.log(config)
//     return config;
//   }
// });