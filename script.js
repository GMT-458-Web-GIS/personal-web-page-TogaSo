// Initialize OpenLayers map
var map = new ol.Map({
    target: 'map-container',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // OpenStreetMap Layer
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([32.8597, 39.9334]), // Centered on Turkey (Ankara)
        zoom: 6 // Adjust zoom level to show multiple cities
    })
});

// List of cities you visited with their coordinates
var cities = [
    { name: "Ankara", coordinates: [32.8597, 39.9334] },
    { name: "Tekirdağ", coordinates: [27.5110, 40.9780] },
    { name: "Yozgat", coordinates: [34.8070, 39.8181] },
    { name: "Eskişehir", coordinates: [30.5256, 39.7767] },
    { name: "ANTALYA", coordinates: [30.7133, 36.8969] },
    { name: "Sinop", coordinates: [35.1535, 42.0055] },
    
    
];

// Define pink star icon style
var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg', // Use a star icon
        scale: 0.03, // Adjust scale for the icon size
        anchor: [0.5, 1] // Anchor the icon so the bottom center is at the location
    })
});

// Adding markers for each city
cities.forEach(city => {
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coordinates)),
        name: city.name
    });
    
    // Apply the pink icon style to the marker
    marker.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
        features: [marker]
    });
    var markerLayer = new ol.layer.Vector({
        source: vectorSource,
    });
    map.addLayer(markerLayer);
});



