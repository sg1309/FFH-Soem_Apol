var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_alle_FFH_in_APSM_0 = new ol.format.GeoJSON();
var features_alle_FFH_in_APSM_0 = format_alle_FFH_in_APSM_0.readFeatures(json_alle_FFH_in_APSM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alle_FFH_in_APSM_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_alle_FFH_in_APSM_0.addFeatures(features_alle_FFH_in_APSM_0);var lyr_alle_FFH_in_APSM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alle_FFH_in_APSM_0, 
                style: style_alle_FFH_in_APSM_0,
                title: '<img src="styles/legend/alle_FFH_in_APSM_0.png" /> alle_FFH_in_AP&SÖM'
            });

lyr_alle_FFH_in_APSM_0.setVisible(true);
var layersList = [baseLayer,lyr_alle_FFH_in_APSM_0];
lyr_alle_FFH_in_APSM_0.set('fieldAliases', {'SG_ART': 'SG_ART', 'NAME': 'NAME', 'KREIS': 'KREIS', 'NR': 'NR', 'BUNDESNUMM': 'BUNDESNUMM', 'GROESSE_IS': 'GROESSE_IS', 'AREA': 'AREA', 'KREISNAME': 'KREISNAME', });
lyr_alle_FFH_in_APSM_0.set('fieldImages', {'SG_ART': 'TextEdit', 'NAME': 'TextEdit', 'KREIS': 'TextEdit', 'NR': 'TextEdit', 'BUNDESNUMM': 'TextEdit', 'GROESSE_IS': 'TextEdit', 'AREA': 'TextEdit', 'KREISNAME': 'TextEdit', });
lyr_alle_FFH_in_APSM_0.set('fieldLabels', {'SG_ART': 'no label', 'NAME': 'header label', 'KREIS': 'no label', 'NR': 'no label', 'BUNDESNUMM': 'inline label', 'GROESSE_IS': 'no label', 'AREA': 'no label', 'KREISNAME': 'no label', });
lyr_alle_FFH_in_APSM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});