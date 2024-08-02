var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CRG_densidadpotenciawm2_10m_1 = new ol.format.GeoJSON();
var features_CRG_densidadpotenciawm2_10m_1 = format_CRG_densidadpotenciawm2_10m_1.readFeatures(json_CRG_densidadpotenciawm2_10m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRG_densidadpotenciawm2_10m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRG_densidadpotenciawm2_10m_1.addFeatures(features_CRG_densidadpotenciawm2_10m_1);
var lyr_CRG_densidadpotenciawm2_10m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRG_densidadpotenciawm2_10m_1, 
                style: style_CRG_densidadpotenciawm2_10m_1,
                popuplayertitle: "CR-G_densidad-potencia-w/m2_10m",
                interactive: true,
    title: 'CR-G_densidad-potencia-w/m2_10m<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_0.png" /> 0 -50<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_1.png" /> 50 - 200<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_2.png" /> 200 - 300<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_3.png" /> 300 - 400<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_4.png" /> 400 - 500<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_5.png" /> 500 - 600<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_6.png" /> 600 - 700<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_7.png" /> 700 - 800<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_8.png" /> 800 - 900<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_9.png" /> 900 - 1000<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_10.png" /> 1000 - 1100<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_10m_1_11.png" /> 1100 - 5050<br />'
        });
var format_CRG_densidadpotenciawm2_50m_2 = new ol.format.GeoJSON();
var features_CRG_densidadpotenciawm2_50m_2 = format_CRG_densidadpotenciawm2_50m_2.readFeatures(json_CRG_densidadpotenciawm2_50m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRG_densidadpotenciawm2_50m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRG_densidadpotenciawm2_50m_2.addFeatures(features_CRG_densidadpotenciawm2_50m_2);
var lyr_CRG_densidadpotenciawm2_50m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRG_densidadpotenciawm2_50m_2, 
                style: style_CRG_densidadpotenciawm2_50m_2,
                popuplayertitle: "CR-G_densidad-potencia-w/m2_50m",
                interactive: true,
    title: 'CR-G_densidad-potencia-w/m2_50m<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_0.png" /> 0 -50<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_1.png" /> 50 - 200<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_2.png" /> 200 - 300<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_3.png" /> 300 - 400<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_4.png" /> 400 - 500<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_5.png" /> 500 - 600<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_6.png" /> 600 - 700<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_7.png" /> 700 - 800<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_8.png" /> 800 - 900<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_9.png" /> 900 - 1000<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_10.png" /> 1000 - 1100<br />\
    <img src="styles/legend/CRG_densidadpotenciawm2_50m_2_11.png" /> 1100 - 5050<br />'
        });
var format_CRG_velocidadvientoms_10m_3 = new ol.format.GeoJSON();
var features_CRG_velocidadvientoms_10m_3 = format_CRG_velocidadvientoms_10m_3.readFeatures(json_CRG_velocidadvientoms_10m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRG_velocidadvientoms_10m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRG_velocidadvientoms_10m_3.addFeatures(features_CRG_velocidadvientoms_10m_3);
var lyr_CRG_velocidadvientoms_10m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRG_velocidadvientoms_10m_3, 
                style: style_CRG_velocidadvientoms_10m_3,
                popuplayertitle: "CR-G_velocidad-viento-m/s_10m",
                interactive: true,
    title: 'CR-G_velocidad-viento-m/s_10m<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_2.png" /> 2- 3<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_3.png" /> 3 - 4<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_4.png" /> 3 - 5<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_5.png" /> 5 - 6<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_6.png" /> 6 - 7<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_7.png" /> 7 - 8<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_8.png" /> 8 -9<br />\
    <img src="styles/legend/CRG_velocidadvientoms_10m_3_9.png" /> 9 - 19<br />'
        });
var format_CRG_velocidadvientoms_50m_4 = new ol.format.GeoJSON();
var features_CRG_velocidadvientoms_50m_4 = format_CRG_velocidadvientoms_50m_4.readFeatures(json_CRG_velocidadvientoms_50m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRG_velocidadvientoms_50m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRG_velocidadvientoms_50m_4.addFeatures(features_CRG_velocidadvientoms_50m_4);
var lyr_CRG_velocidadvientoms_50m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRG_velocidadvientoms_50m_4, 
                style: style_CRG_velocidadvientoms_50m_4,
                popuplayertitle: "CR-G_velocidad-viento-m/s_50m",
                interactive: true,
    title: 'CR-G_velocidad-viento-m/s_50m<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_0.png" /> 0 - 1<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_1.png" /> 1 - 2<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_2.png" /> 2- 3<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_3.png" /> 3 - 4<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_4.png" /> 3 - 5<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_5.png" /> 5 - 6<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_6.png" /> 6 - 7<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_7.png" /> 7 - 8<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_8.png" /> 8 -9<br />\
    <img src="styles/legend/CRG_velocidadvientoms_50m_4_9.png" /> 9 - 19<br />'
        });
var format_CRGuanacaste_5 = new ol.format.GeoJSON();
var features_CRGuanacaste_5 = format_CRGuanacaste_5.readFeatures(json_CRGuanacaste_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRGuanacaste_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRGuanacaste_5.addFeatures(features_CRGuanacaste_5);
var lyr_CRGuanacaste_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRGuanacaste_5, 
                style: style_CRGuanacaste_5,
                popuplayertitle: "CR-Guanacaste",
                interactive: true,
                    title: '<img src="styles/legend/CRGuanacaste_5.png" /> CR-Guanacaste'
                });

lyr_googlesatellitehybrid_0.setVisible(true);lyr_CRG_densidadpotenciawm2_10m_1.setVisible(false);lyr_CRG_densidadpotenciawm2_50m_2.setVisible(false);lyr_CRG_velocidadvientoms_10m_3.setVisible(false);lyr_CRG_velocidadvientoms_50m_4.setVisible(true);lyr_CRGuanacaste_5.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_CRG_densidadpotenciawm2_10m_1,lyr_CRG_densidadpotenciawm2_50m_2,lyr_CRG_velocidadvientoms_10m_3,lyr_CRG_velocidadvientoms_50m_4,lyr_CRGuanacaste_5];
lyr_CRG_densidadpotenciawm2_10m_1.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_CRG_densidadpotenciawm2_50m_2.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_CRG_velocidadvientoms_10m_3.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_CRG_velocidadvientoms_50m_4.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_CRGuanacaste_5.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'provincia': 'provincia', });
lyr_CRG_densidadpotenciawm2_10m_1.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'Range', });
lyr_CRG_densidadpotenciawm2_50m_2.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'Range', });
lyr_CRG_velocidadvientoms_10m_3.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'Range', });
lyr_CRG_velocidadvientoms_50m_4.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'Range', });
lyr_CRGuanacaste_5.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'provincia': '', });
lyr_CRG_densidadpotenciawm2_10m_1.set('fieldLabels', {'VALUE': 'inline label - visible with data', 'AreaHa': 'inline label - visible with data', });
lyr_CRG_densidadpotenciawm2_50m_2.set('fieldLabels', {'VALUE': 'inline label - visible with data', 'AreaHa': 'inline label - visible with data', });
lyr_CRG_velocidadvientoms_10m_3.set('fieldLabels', {'VALUE': 'header label - always visible', 'AreaHa': 'hidden field', });
lyr_CRG_velocidadvientoms_50m_4.set('fieldLabels', {'VALUE': 'inline label - visible with data', 'AreaHa': 'inline label - visible with data', });
lyr_CRGuanacaste_5.set('fieldLabels', {'qc_id': 'no label', 'fid': 'inline label - visible with data', 'provincia': 'inline label - visible with data', });
lyr_CRGuanacaste_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});