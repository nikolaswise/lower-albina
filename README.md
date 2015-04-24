# Lower Albina

An exploratory mapping project.

## Install
`npm install`

## Develop
`npm run dev`

## About

Uses [6to5](https://6to5.org/) and [Browserify](http://browserify.org/) for JavaScript. SASS is handled with [node-sass](https://github.com/sass/node-sass#usage-1). All tasks are handled with npm scripts. To learn more, go read [this](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).

## Concept

Lower Albina looks at using classical analog-era metaphors to address web cartography and creating of the 'map'. At it's root, this conceptual model requires 3 layers:

0. Base Layer
0. Study Layer
0. Reference Layer

This is similar to the ideas behind basemap/layers/labels, but simplified. Each layer has it's own, very narrow, scope.

The base layer and the reference layer can both exist as single objects or tile layers in the web map to avoid issues of overwhelming the map with data, and simplify the amount of control needed over layering. One tile layer for the base, one tile layer for the Reference.

### Base Layer

The base layer will underlay the rest of the map. It is related to the basemap, but has much less going on. The base layer only holds as much information as needed to ground the study layer (or each individual study layer) with the geography. For Lower Albina, the Base Layer only has two data sets:

0. 5 Foot Contours, classified by elevation.
0. County Taxlots

### Reference Layer

The Reference Layer contains data that sits **over** the study layer. This layer provides precise context about geography that is further up the conceptual hierarchy than the data in the study layer. The reference layer for Lower Albina includes

0. Bridges
0. Light and Heavy Rail lines
0. Roads
0. Neighborhood information
0. Water Bodies

## Related Projects
- [leaflet-scale](https://github.com/nikolaswise/leaflet-scale)