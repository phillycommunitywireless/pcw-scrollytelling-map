/* eslint-disable no-unused-vars */
// Custom map sources and layers, loaded by index.html after the basemap style.
//
// Nothing here is active by default -- the arrays below are empty, so the map
// behaves exactly as before until you add entries.
//
// HOW TO ADD A CUSTOM LAYER
// 1. Add a source (GeoJSON file/URL or vector/raster tiles) to `sources`.
// 2. Add a MapLibre layer definition to `layers` that references that source.
//    Start layers you want to toggle per chapter at opacity 0.
// 3. Toggle per chapter in config.js, either with the `layers` shorthand:
//        layers: ['network-nodes']          // visible during this chapter only
//    or with explicit onChapterEnter / onChapterExit opacity arrays:
//        onChapterEnter: [{ layer: 'network-nodes', opacity: 1, duration: 500 }],
//        onChapterExit:  [{ layer: 'network-nodes', opacity: 0 }]
var externalData = {
    sources: [
        // GeoJSON example (PLACEHOLDER url -- replace before enabling):
        // {
        //     "name": "pcw-nodes",
        //     "type": "geojson",
        //     "url": "./map/pcw-nodes.geojson"
        // },
        // Vector tile example:
        // {
        //     "name": "pcw-tiles",
        //     "type": "vector",
        //     "url": "https://example.com/tiles.json"
        // }
    ],
    layers: [
        // {
        //     "id": "network-nodes",
        //     "type": "circle",
        //     "source": "pcw-nodes",
        //     // "source-layer": "...",  // vector tile sources only
        //     "paint": {
        //         "circle-radius": 6,
        //         "circle-color": "#3FB1CE",
        //         "circle-stroke-color": "#ffffff",
        //         "circle-stroke-width": 1,
        //         "circle-opacity": 0,           // start hidden; chapters fade it in
        //         "circle-stroke-opacity": 0
        //     }
        // }
    ]
};
