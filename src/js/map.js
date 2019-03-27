function initMap() {
	let myLatLng = { lat: 49.800498, lng: 24.054980 }

	let map = new google.maps.Map(document.querySelector('.map'), {
		center: myLatLng,
		// mapTypeId: "satellite",
		zoom: 15
	})

	let marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: "Школа №96"
	})
}