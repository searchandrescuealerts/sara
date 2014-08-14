var MILES_TO_METERS_CONVERSION_RATIO = 1609.34;
var map;
var marker;
var circle;
var united_states = new google.maps.LatLng(39.8282, -98.5795);
var united_states_zoom = 4;
var initialRadius = 8046.72; //5 mi in meters

function initialize() {
	var myOptions = {
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("googleMap"), myOptions);

	//Try W3C Geolocation (Preferred)
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			map.setCenter(initialLocation);
			placeMarker(initialLocation);
		}, function() {
			handleNoGeolocation(browserSupportFlag);
		});
	}
	// Or if the browser doesn't support Geolocation
	else {
		map.setCenter(united_states);
		map.setZoom(united_states_zoom);
	}
}

//https://developers.google.com/maps/articles/geolocation
function placeMarker(location) {
	if (!location) {
		if (!map) {
			console.log("map is falsey");
		} else {
			console.log(map.getCenter);
			location = map.getCenter();	
		}
	}

	marker = new google.maps.Marker({
		position: location,
		draggable: true,
		title: "Drag me!",
		animation: google.maps.Animation.DROP,
		map: map
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

function dropPinAtAddress() {
	//get the address from the text field
	var address = $('#address').value();

	//sent to the URL
	var URL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyA3mC_xSILKVBUECReJLJbyoX9L3PQ_ApY"

	//drill down to the Lat / Long
	var location = results.geometry.location;

	//drop Pin at that address
	placeMarker(location);
}