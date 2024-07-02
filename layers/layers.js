var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_QGISCLIPPED_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "QGIS CLIPPED",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/QGISCLIPPED_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13988007.171531, 793555.974717, 13988547.335967, 794123.509465]
                            })
                        });
var format_CHEVROMSASATERMINAL2024_2 = new ol.format.GeoJSON();
var features_CHEVROMSASATERMINAL2024_2 = format_CHEVROMSASATERMINAL2024_2.readFeatures(json_CHEVROMSASATERMINAL2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEVROMSASATERMINAL2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEVROMSASATERMINAL2024_2.addFeatures(features_CHEVROMSASATERMINAL2024_2);
var lyr_CHEVROMSASATERMINAL2024_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHEVROMSASATERMINAL2024_2, 
                style: style_CHEVROMSASATERMINAL2024_2,
                popuplayertitle: "CHEVROM SASA TERMINAL 2024",
                interactive: false,
                title: 'CHEVROM SASA TERMINAL 2024'
            });
var format_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3 = new ol.format.GeoJSON();
var features_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3 = format_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.readFeatures(json_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.addFeatures(features_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3);
var lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3, 
                style: style_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3,
                popuplayertitle: "CLIPPED CHEVROM SASA TERMINAL CONTOUR 2024",
                interactive: true,
    title: 'CLIPPED CHEVROM SASA TERMINAL CONTOUR 2024<br />\
    <img src="styles/legend/CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3_0.png" /> ACAD_ISO10W100<br />\
    <img src="styles/legend/CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3_1.png" /> CONTINUOUS<br />\
    <img src="styles/legend/CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_QGISCLIPPED_1.setVisible(true);lyr_CHEVROMSASATERMINAL2024_2.setVisible(true);lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_QGISCLIPPED_1,lyr_CHEVROMSASATERMINAL2024_2,lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3];
lyr_CHEVROMSASATERMINAL2024_2.set('fieldAliases', {'field_1': 'EASTING', 'field_2': 'NORTHING', 'field_3': 'DEPTH', });
lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CHEVROMSASATERMINAL2024_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CHEVROMSASATERMINAL2024_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CLIPPEDCHEVROMSASATERMINALCONTOUR2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});