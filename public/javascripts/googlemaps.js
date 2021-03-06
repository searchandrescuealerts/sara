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

	//on click listener - when the map is clicked, add another marker
	// google.maps.event.addListener(map, 'click', function(event) {
	// 	placeMarker(event.latLng);
	// });
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

	drawCircle(marker);

	marker.setMap(map);
}

function drawCircle(markerInput) {
	//if the marker doesn't exist, set it to the global marker variable
	if (!markerInput) {
		markerInput = marker;
	}

	//remove any previous circle from this same area
	if (circle) {
		circle.setMap(null); 
	}

	circle = new google.maps.Circle({
		map: map,
		radius: initialRadius,
		fillColor: '#013ca6',
		fillOpacity: .2,
		strokeColor: '#013ca6',
		strokeWeight: 2,
		editable:true
	});
	
	// Add circle overlay and bind to marker
	circle.bindTo('center', markerInput, 'position'); //add the new circle to the map
}

google.maps.event.addDomListener(window, 'load', initialize);

