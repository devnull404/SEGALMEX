// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = [{ lat: 23.1965945, lng: -99.1251677 }, {lat: 19.800212, lng: -90.486852}, {lat: 19.051601, lng: -96.424461}, {lat: 19.5731501, lng: -90.3614499}, {lat: 18.082199, lng: -96.116653}];
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru[0],
    });
    // The marker, positioned at Uluru

    function neew (poss) {
    const marker = new google.maps.Marker({
      position: poss,
      map: map,
    });
}

for (var i = 1; i < uluru.length; i++) {
    neew(uluru[i])
}

  }


