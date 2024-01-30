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
var format_TempClippedKelvin_1 = new ol.format.GeoJSON();
var features_TempClippedKelvin_1 = format_TempClippedKelvin_1.readFeatures(json_TempClippedKelvin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempClippedKelvin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempClippedKelvin_1.addFeatures(features_TempClippedKelvin_1);
var lyr_TempClippedKelvin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempClippedKelvin_1, 
                style: style_TempClippedKelvin_1,
                interactive: true,
    title: 'TempClipped (Kelvin)<br />\
    <img src="styles/legend/TempClippedKelvin_1_0.png" /> 292 - 297<br />\
    <img src="styles/legend/TempClippedKelvin_1_1.png" /> 297 - 299<br />\
    <img src="styles/legend/TempClippedKelvin_1_2.png" /> 299 - 301<br />\
    <img src="styles/legend/TempClippedKelvin_1_3.png" /> 301 - 304<br />\
    <img src="styles/legend/TempClippedKelvin_1_4.png" /> 304 - 315<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TempClippedKelvin_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TempClippedKelvin_1];
lyr_TempClippedKelvin_1.set('fieldAliases', {'Temperatur': 'Temperatur', });
lyr_TempClippedKelvin_1.set('fieldImages', {'Temperatur': 'Range', });
lyr_TempClippedKelvin_1.set('fieldLabels', {'Temperatur': 'header label', });
lyr_TempClippedKelvin_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});