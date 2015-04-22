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

## Creating Base and Reference Layers

This is complicated. There are a lot of good stuff out there. To get at them all though, one has to do a lot of meandering to get around plenty of probs.

### Good Stuff
- Easy Reprojection of data
- High quality demographic data available.
- High Quality cartographic data rendering tools
- Layer Compositing and Tile Generation

### Probs
- City of Portland data sets are huge, bigger than our study area.
- Proprietary data formats from local government GIS departments.
- ArcGIS Online has no support tile layers that contain multiple layers.
- MapBox Studio has no tools for examining, classifying, and styling data across ramps.
- AGO exports GeoJSON with x,y as meters from Null Island in WGS84 .
- MBS can't handle WGS:84 as meters from Null Islands. Needs to be reprojected as lat/long in decimal degrees.
- Neither AGO or MBS provide reprojection tools.
- AGO doesn't support sub-pixel rendering
- AGO raster tiles look a little rough.
- MBS wont let go of tiles, either in vector or raster.

### Step By Step

I dealt with the trubs so you don't have to. Looking at one layer of data, here's how we make high quality (raster for now) tiles and consume them in our Leaflet app. Repeat data layer steps as needed until your base or reference layer is done.

#### 0. Find Your Data
This is important. Lower Albina uses the [Portland Streets Centerlines](http://civicapps.org/datasets/street-centerlines) data to create a layer that sits on reference layer. Download your data.

![screenshots__0033_screen shot 2015-04-17 at 10 27 04 am](https://cloud.githubusercontent.com/assets/1987772/7210871/48b7b5d8-e50a-11e4-9079-14f2b0b5a183.jpg)

#### 1. Upload that Data to Arcgis Online
This is gives us access to the ArcGIS's pretty excellent data manipulation tools and cartographic abilities. If you have an ArcGIS org running, and an account with your org, you can just use that. If you don't, this step has it's own gotchas, so we'll go through that step by step really quick.

**a.** Get free developer account at [Arcgis for Developers](https://developers.arcgis.com/en/sign-up/) This will give you access to AGO, along with some free credits every month you can use to run analysis tools and hit service endpoints in your app later on. Don't sign up for a Public Account with AGO - these things are useless and don't let you create or store any content, or provide any credits to use the tools, or any way to acquire credits.
![screenshots__0032_screen shot 2015-04-17 at 10 33 15 am](https://cloud.githubusercontent.com/assets/1987772/7210873/50b95b38-e50a-11e4-999e-ecbd5c072a10.jpg)

**b.*** Once you get confirmation of your new developer account, [Sign in to ArcGIS Online](https://www.arcgis.com/home/signin.html). This is weird. Don't ask.
![screenshots__0031_screen shot 2015-04-17 at 10 33 18 am](https://cloud.githubusercontent.com/assets/1987772/7210874/55d9f3c0-e50a-11e4-8614-8ee9a08eb07a.jpg)

**c.** Navigate to 'My Content', and 'Create' a new item 'From my Computer' Grab your data set - this means the entire `.zip` file in the case of shapefiles
![screenshots__0030_screen shot 2015-04-17 at 10 34 43 am](https://cloud.githubusercontent.com/assets/1987772/7210877/5affe30a-e50a-11e4-8c12-f8dc34ae59b3.jpg)

**d.** Done! AGO will create a Feature Layer of your data!
![screenshots__0029_screen shot 2015-04-17 at 10 46 08 am](https://cloud.githubusercontent.com/assets/1987772/7210878/5ec9db76-e50a-11e4-8d79-c8b61ddab878.jpg)

#### 2. Crop Data to Study Area
We don't need ALL the streets in Portland for our Reference Layer in Lower Albina. We need to crop down the data so we only need to deal with the bits that we're concerned this. This is a little complicated also.

**a.** Open > Add layer to new map to get the feature layer on the Map Viewer, where we can start working with it. If your data set is large, it won't draw completely. A modal might pop up telling you this - this is okay! Your data is in there, but AGO is just drawing the first 1000 features to try and avoid destroying your browser. Thanks AGO.
![screenshots__0028_screen shot 2015-04-17 at 10 47 53 am](https://cloud.githubusercontent.com/assets/1987772/7210881/688dc924-e50a-11e4-8bad-093f022a707a.jpg)

**b.** Add > Add Map notes Layer to draw out your area of study.
![screenshots__0027_screen shot 2015-04-17 at 10 49 23 am](https://cloud.githubusercontent.com/assets/1987772/7210884/6ddd3914-e50a-11e4-90e2-520d6bd5aab2.jpg)
![screenshots__0026_screen shot 2015-04-17 at 10 50 40 am](https://cloud.githubusercontent.com/assets/1987772/7210898/862f7cfc-e50a-11e4-8290-2028544d28a9.jpg)

**c.** Pop back to the details tab, and find the Secret Dropdown Menu of Ultimate Power on your data layer.
![screenshots__0025_screen shot 2015-04-17 at 10 51 33 am](https://cloud.githubusercontent.com/assets/1987772/7210902/8e1c27e4-e50a-11e4-831d-65b310139e99.jpg)
![screenshots__0024_screen shot 2015-04-17 at 10 51 36 am](https://cloud.githubusercontent.com/assets/1987772/7210906/96cbf400-e50a-11e4-945f-c5a5212dacd8.jpg)

**d.** Select Perform Analysis.
![screenshots__0023_screen shot 2015-04-17 at 10 51 42 am](https://cloud.githubusercontent.com/assets/1987772/7210911/9cf15078-e50a-11e4-8872-0653810765f5.jpg)

**e.** To crop the data to just our study area, we need to 'Find Locations' > 'Find Existing Locations'. Add an expression that has a geographic query with your map notes layer.
![screenshots__0022_screen shot 2015-04-17 at 10 52 04 am](https://cloud.githubusercontent.com/assets/1987772/7210913/a2168b86-e50a-11e4-9882-3245005ecb18.jpg)

**f.** Run the analysis with the current extent. This will keep your cost down. You can see how many credits this will burn with the 'show credits button.' My analysis is going to cost 4.643 out of my free 50 credits a month. This is about 46 cents in USD. Analysis will probably take a while.
![screenshots__0021_screen shot 2015-04-17 at 10 52 46 am](https://cloud.githubusercontent.com/assets/1987772/7210916/a921a10e-e50a-11e4-9678-78a138bc7e0b.jpg)
![screenshots__0020_screen shot 2015-04-17 at 10 53 06 am](https://cloud.githubusercontent.com/assets/1987772/7210917/ab767ef2-e50a-11e4-9a34-7905add876c2.jpg)

#### 3. Style your data
Turn off your source and map notes layer, and use the Secret Dropdown Menu of Ultimate Power on the basemap layer to turn the transparency all the way up. Now we have our layer, and can do some good stuff to it.
![screenshots__0019_screen shot 2015-04-17 at 11 03 54 am](https://cloud.githubusercontent.com/assets/1987772/7210927/bbb5342a-e50a-11e4-8f8d-ecb8bde2ed07.jpg)

Use the Secret Dropdown Menu of Ultimate Power to 'Change Style' on your layer, and go nuts in there.
![screenshots__0018_screen shot 2015-04-17 at 11 05 56 am](https://cloud.githubusercontent.com/assets/1987772/7210929/c002b52a-e50a-11e4-99e0-ab3d61b8dc1c.jpg)

For these streets, I wont be pushing the limits of AGO's rendering tools. But I want to see what structure types there are, and set different widths of my lines. This shows each structure type as it's own color. Im going to set all my colors to white, and just change the widths. I'll do this in the next step, since AGO doesn't support sub-pixel rendering of line widths, which I will want to do. For now, Im going to pretend I want these colors so we can move on.
![screenshots__0017_screen shot 2015-04-17 at 11 07 55 am](https://cloud.githubusercontent.com/assets/1987772/7210932/c4ac96d6-e50a-11e4-98aa-8cbb89259752.jpg)

#### 4. Take a Screen Shot of AGO's Rendering Rules.
This is the end of the line for our use of AGO to work with the data. From this point on, we're just focusing on getting the stuff we want OUT of the ArcGIS system. We'll use the hard work that AGO did to examine, classify, create ramps for, and otherwise be really smart about our data set to re-create the renderer by hand in CartoCSS. We'll use this screenshot to get the field names, values, colors, and other good stuff we need to make this happen.
![screenshots__0015_screen shot 2015-04-17 at 11 10 05 am](https://cloud.githubusercontent.com/assets/1987772/7210936/d217d4d4-e50a-11e4-8ba8-d61dfa3cb151.jpg)

A better example of the power that AGO's renderers give us is with the Contour data Lower ALbina uses in it's base layer. AGO gives us a histogram of the distribution of elevations in our study area, creates a classification of 10 natural breaks in the data, and assigned each class a step from our defined color ramp. In this step, we could use any of the (very good) default color ramps, and each class in the data would automatically get the correct color value.
![screenshots__0014_screen shot 2015-04-17 at 11 13 59 am](https://cloud.githubusercontent.com/assets/1987772/7210938/d6429670-e50a-11e4-93f0-18b87e3d1497.jpg)

#### 5. Get your Data Out of AGO
Using the Secret Dropdown Menu of Ultimate Power, view your layers item details page. Here we can convert our data to GeoJSON and download it.

**a.** 'Export' > Export File as GeoJSON. This will create a new item in our 'My Content' zone that's a GeoJSON file rather than a Feature Layer. This might take a while. AGO will forward you to this items details page.
![screenshots__0012_screen shot 2015-04-17 at 11 17 28 am](https://cloud.githubusercontent.com/assets/1987772/7210943/e48d4c7a-e50a-11e4-9d32-019388a77a5d.jpg)

**b.** 'Open' > 'Download'. This will download your Geojson. Dont ask.
![screenshots__0011_screen shot 2015-04-17 at 11 19 05 am](https://cloud.githubusercontent.com/assets/1987772/7210947/f325539a-e50a-11e4-892f-f78a4d5a9c58.jpg)
![screenshots__0010_screen shot 2015-04-17 at 11 19 38 am](https://cloud.githubusercontent.com/assets/1987772/7210951/fb4c2ce2-e50a-11e4-9046-ee99f0bfdf5f.jpg)

#### 6. Get the Data into CartoDB
Upload your GeoJSON to a [free CartoDB account](https://cartodb.com/signup).

#### 8. Style Your Data in MapBox Studio
Add your data to a new map. Pick your data carefully though - CartoDB only allows [4 datasets per map](http://docs.cartodb.com/faqs.html#how-many-layers-can-my-visualization-have) at the free level. So that's cool!

Now you can write CartoCSS in your CartoDB map to style the data. Grab your screenshot of AGO's render rules, and go to town implementing AGO Styles in CartoCSS. For the streets data set, I want to style some features in a way that the underlying data doesn't exactly reflect. CartoDB lets us go in and inspect feature by feature, and add a CartoCSS rule that addresses consistency at this level, which can't be done in AGO.

To get rid of the basemap, upload a blank, transparent .png and set THAT as the basemap.

#### 9. Use CartDB.js to get your tiles

CartoDB exposes the json for your map through the 'Share' modal. Grab the endpoint un the cartodb.js option, and use cartodb to add your map to your leaflet project.

Turn leaflet off and add CartoDB.js instead
```
<!-- Load Leaflet from CDN-->
<!-- <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" /> -->
<!-- <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script> -->

<!-- CartoDB -->
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.13/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.13/cartodb.js"></script>
```

In your main js file, add your layer to your map.

```
cartodb.createLayer(map, url)
  .addTo(map)
  .on('done', function(layer) {
    //do stuff
  })
  .on('error', function(err) {
    alert("some error occurred: " + err);
  });
```

#### 10. Grab your tile endpoint from your app

If cartodb added your map as a layer in your leaflet app, we're on the right track. Open your network request panel, and find a tile from your map. Copy the URL. Mine looks like this:

```
http://2.ashbu.cartocdn.com/nikolaswise/api/v1/map/e84ce689c5a9a5090b90c0cb4dba4c9f:1429741486907.6099/16/10435/23435.png
```

#### 11. Convert that to Actual Tile Endpoint

To consume these tiles in Regular Leaflet without CartoDB.js, you need to variablize this URL. That means adding {s}, {x}, {y}, and {z} variables. My endpoint ends up looking like this:

```
http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/e84ce689c5a9a5090b90c0cb4dba4c9f:1429741486907.6099/{z}/{x}/{y}.png
```

#### 12. Eat those tiles with Leaflet.

Turn off CartoDB.js and turn Leaflet back on.

```
<!-- Load Leaflet from CDN-->
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<!-- CartoDB -->
<!-- <link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.13/themes/css/cartodb.css" /> -->
<!-- <script src="http://libs.cartocdn.com/cartodb.js/v3/3.13/cartodb.js"></script> -->
```

Use Leaflet to add a new Tile Layer with your tile endpoint url.

```
var referenceLayer = L.tileLayer('http://{s}.ashbu.cartocdn.com/nikolaswise/api/v1/map/e84ce689c5a9a5090b90c0cb4dba4c9f:1429741486907.6099/{z}/{x}/{y}.png')
referenceLayer.addTo(map);
```

Delete all that `cartodb.createLayer()` junk. If your tile layer belongs on the bottom like a regular tile layer your done! If your crazy that me and want a tile layer to sit OVER the rest of the map, you have one more step.

12. Create a new Leaflet Map Pane

Build a brand new pane for leaflet, bring it to the top of the pane stack, and move your tile layer's container element to it.

```
var referencePane = map._createPane('leaflet-reference-pane', map.getPanes().mapPane);
referencePane.appendChild(referenceLayer.getContainer());
referenceLayer.setZIndex(9);
```

And you have a tile layer sitting on top of your map!
