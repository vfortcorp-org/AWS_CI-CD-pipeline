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
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_railroad_2 = new ol.layer.Tile({
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
              wms_layers.push([lyr_railroad_2, 0]);
var lyr_nhd_aug_cc_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "nhd_aug_cc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "nhd_aug_cc",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_nhd_aug_cc_3, 0]);
var lyr_roads_aug_cc_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "roads_aug_cc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "roads_aug_cc",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_roads_aug_cc_4, 0]);
var lyr_countybounds_aug_cc_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "countybounds_aug_cc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "countybounds_aug_cc",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_countybounds_aug_cc_5, 0]);
var lyr_water_basins_aug_cc_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "water_basins_aug_cc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "water_basins_aug_cc",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_water_basins_aug_cc_6, 0]);
var lyr_aedroads_Aug_CC_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://augustarain.com/geoserver/aed/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "roads_aug_cc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "aed:roads_Aug_CC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_aedroads_Aug_CC_7, 0]);
var lyr_AED_Ponds_8 = new ol.layer.Tile({
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
              wms_layers.push([lyr_AED_Ponds_8, 1]);
var lyr_AED_Pipes_9 = new ol.layer.Tile({
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
              wms_layers.push([lyr_AED_Pipes_9, 1]);
var lyr_AED_Ditches_10 = new ol.layer.Tile({
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
              wms_layers.push([lyr_AED_Ditches_10, 1]);
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
var lyr_rain_gauges_production_12 = new ol.layer.Tile({
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
              wms_layers.push([lyr_rain_gauges_production_12, 1]);

lyr_OpenStreetMap_0.setVisible(false);lyr_google_aerial_1.setVisible(true);lyr_railroad_2.setVisible(true);lyr_nhd_aug_cc_3.setVisible(true);lyr_roads_aug_cc_4.setVisible(true);lyr_countybounds_aug_cc_5.setVisible(true);lyr_water_basins_aug_cc_6.setVisible(true);lyr_aedroads_Aug_CC_7.setVisible(true);lyr_AED_Ponds_8.setVisible(true);lyr_AED_Pipes_9.setVisible(true);lyr_AED_Ditches_10.setVisible(true);lyr_AED_Structures_11.setVisible(true);lyr_rain_gauges_production_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_aerial_1,lyr_railroad_2,lyr_nhd_aug_cc_3,lyr_roads_aug_cc_4,lyr_countybounds_aug_cc_5,lyr_water_basins_aug_cc_6,lyr_aedroads_Aug_CC_7,lyr_AED_Ponds_8,lyr_AED_Pipes_9,lyr_AED_Ditches_10,lyr_AED_Structures_11,lyr_rain_gauges_production_12];
