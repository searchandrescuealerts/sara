var MILES_TO_METERS_CONVERSION_RATIO = 1609.34;
var map;
var marker;
var circle;
var united_states = new google.maps.LatLng(39.8282, -98.5795);
var united_states_zoom = 4;

//https://developers.google.com/maps/articles/geolocation
function initialize() {
	var myOptions = {
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("googleMap"), myOptions);

	//Try W3C Geolocation (Preferred)
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			map.setCenter(initialLocation);
		}, function() {
			handleNoGeolocation(browserSupportFlag);
		});
	}

	// Or if the browser doesn't support Geolocation
	else {
		map.setCenter(united_states);
		map.setZoom(united_states_zoom);
	}

	// place a marker on the current position 
	// either the geolocation or the center of the US default
	// placeMarker();
}

function placeMarker(location) {
	//SARAH TODO: if there is already a marker, ignore this?

	if (!location) {
		location = map.getCenter();
	}

	marker = new google.maps.Marker({
		position: location,
		draggable: true,
		title: "Drag me!",
		map: map
	});

	drawCircle(marker);

	marker.setMap(map);

	//remove the Drop a pin button. We only want one pin at a time
	$("#dropPin").hide();
}

function drawCircle(markerInput) {
	//if the marker doesn't exist, set it to the global marker variable
	if (!markerInput) {
		markerInput = marker;
	}
	var radius = $("#radius").val();
	//SARAH TODO: sanitize the radius input

	//translate that into meters, because that's what the API takes
	var radiusMeters = radius * MILES_TO_METERS_CONVERSION_RATIO;

	if (circle) {
		// map.removeOverlay(circle);
		circle.setMap(null); //remove any previous circle
	}
	circle = new google.maps.Circle({
		map: map,
		radius: radiusMeters,
		fillColor: '#013ca6',
		fillOpacity: .2,
		strokeColor: '#013ca6',
		strokeWeight: 2
	});
	// Add circle overlay and bind to marker
	circle.bindTo('center', markerInput, 'position'); //add the new circle to the map
}

google.maps.event.addDomListener(window, 'load', initialize);