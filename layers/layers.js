var wms_layers = [];

var lyr_huancavelica_provincias_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://127.0.0.1:8080/geoserver/bdespacial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "huancavelica_provincias",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "huancavelica_provincias",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_huancavelica_provincias_0, 0]);
var lyr_huancavelica_ccpp_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://127.0.0.1:8080/geoserver/bdespacial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "huancavelica_ccpp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "huancavelica_ccpp",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_huancavelica_ccpp_1, 0]);

lyr_huancavelica_provincias_0.setVisible(true);lyr_huancavelica_ccpp_1.setVisible(true);
var layersList = [lyr_huancavelica_provincias_0,lyr_huancavelica_ccpp_1];
