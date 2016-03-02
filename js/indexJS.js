var logoMap = L.map('logoMap',
	{
		center : [39.322542, -77.726316],
		zoom : 13,
		attributionControl: false
	});


var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

var attrControl = L.control.attribution({position:"topright"});

attrControl.addAttribution('&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors');
attrControl.setPrefix('By <a href="https://twitter.com/TipsForGIS" target="_blank">Tips for GIS</a>');
attrControl.addTo(logoMap);

osmTiles.addTo(logoMap);