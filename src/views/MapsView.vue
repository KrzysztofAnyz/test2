<template>
    <div class="div-container">
      <TopBar />
      <div class="text-center my-5">
        <h2>Those are mechanics near you:</h2>
        <div class="container" id="map" style="height: 500px; width: 100%;"></div>
      </div>
    </div>
  </template>
  
  <script>
  import TopBar from "@/components/TopBar.vue";
  
  export default {
    name: "MapsView",
    components: {
      TopBar,
    },
    mounted() {
      this.initializeMap();
    },
    methods: {
      initializeMap() {
  let currentLocation = {
    lat: 0,
    lng: 0,
  };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        currentLocation.lat = position.coords.latitude;
        currentLocation.lng = position.coords.longitude;
        const customIcon = {
          url: "https://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
          scaledSize: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 40),
        };
        const currentLocationMarker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          icon: customIcon,
        });
        map.setCenter(currentLocation);
        let service = new google.maps.places.PlacesService(map);
        let request = {
          query: "Mechanic",
          location: currentLocation,
          radius: "500",
          type: ["car_repair"],
        };
        service.textSearch(request, function (results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              let marker = new google.maps.Marker({
                position: results[i].geometry.location,
                map: map,
                title: results[i].name,
              });
              marker.addListener("click", function () {
                let infowindow = new google.maps.InfoWindow({
                  content:
                    '<h3>' +
                    this.title +
                    '</h3><p>' +
                    this.position +
                    "</p>",
                });
                infowindow.open(map, this);
              });
            }
          }
        });
      },
      function () {
        console.log("Error: The Geolocation service failed.");
      }
    );
  } else {
    console.log("Error: Your browser doesn't support geolocation.");
  }
}
,
    },
  };
  </script>
  
  <style>
  </style>