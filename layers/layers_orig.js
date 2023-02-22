var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_aerial_1 = new ol.layer.Tile({
            'title': 'google_aerial',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_aedCountyBounds_simple_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "countybounds",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "aed:CountyBounds_simple",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_aedCountyBounds_simple_2, 0]);
var lyr_aedwater_basins_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "water_basins",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "aed:water_basins",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_aedwater_basins_3, 0]);
var lyr_rain_gauge_24hr_increment_30_percent_transparent_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "rain_gauges_production_poly",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "rain_gauge_24hr_increment_30_percent_transparent",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_rain_gauge_24hr_increment_30_percent_transparent_4, 0]);
var lyr_rain_gauges_production_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "rain_gauges_production",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "rain_gauges_production",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_rain_gauges_production_5, 1]);
var lyr_railroad_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "railroad",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "railroad",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_railroad_6, 0]);
var lyr_aedroads_single_grey_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "roads",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "aed:roads_single_grey",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_aedroads_single_grey_7, 1]);
var lyr_rivers_streams_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "rivers_streams",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "rivers_streams",
                            opacity: 1.000000,
                            
maxResolution:8.401339845678589,

                            
                          });
              wms_layers.push([lyr_rivers_streams_8, 0]);
var lyr_AED_Ponds_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AED_Ponds",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AED_Ponds",
                            opacity: 1.000000,
                            
maxResolution:3.3605359382714357,

                            
                          });
              wms_layers.push([lyr_AED_Ponds_9, 1]);
var lyr_AED_Pipes_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AED_Pipes",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AED_Pipes",
                            opacity: 1.000000,
                            
maxResolution:3.3605359382714357,

                            
                          });
              wms_layers.push([lyr_AED_Pipes_10, 1]);
var lyr_AED_Structures_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AED_Structures",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AED_Structures",
                            opacity: 1.000000,
                            
maxResolution:3.3605359382714357,

                            
                          });
              wms_layers.push([lyr_AED_Structures_11, 1]);
var lyr_AED_Ditches_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "AED_Ditches",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AED_Ditches",
                            opacity: 1.000000,
                            
maxResolution:3.3605359382714357,

                            
                          });
              wms_layers.push([lyr_AED_Ditches_12, 1]);

lyr_OpenStreetMap_0.setVisible(false);lyr_google_aerial_1.setVisible(true);lyr_aedCountyBounds_simple_2.setVisible(true);lyr_aedwater_basins_3.setVisible(true);lyr_rain_gauge_24hr_increment_30_percent_transparent_4.setVisible(false);lyr_rain_gauges_production_5.setVisible(true);lyr_railroad_6.setVisible(true);lyr_aedroads_single_grey_7.setVisible(true);lyr_rivers_streams_8.setVisible(true);lyr_AED_Ponds_9.setVisible(true);lyr_AED_Pipes_10.setVisible(true);lyr_AED_Structures_11.setVisible(true);lyr_AED_Ditches_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_aerial_1,lyr_aedCountyBounds_simple_2,lyr_aedwater_basins_3,lyr_rain_gauge_24hr_increment_30_percent_transparent_4,lyr_rain_gauges_production_5,lyr_railroad_6,lyr_aedroads_single_grey_7,lyr_rivers_streams_8,lyr_AED_Ponds_9,lyr_AED_Pipes_10,lyr_AED_Structures_11,lyr_AED_Ditches_12];
