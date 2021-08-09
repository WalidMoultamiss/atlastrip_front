<template>
  <div class="mapHolder">
    <div id="map"></div>
  </div>
</template>


<script>
export default {
  name: "map",
  data() {
    return {
      flyTO: [],
      currentCoords: [],
    };
  },
  methods: {
    async mapLoad() {
      console.log("3D map is loading");

      mapboxgl.accessToken =
        "pk.eyJ1Ijoid2FsaWRtb3VsdGFtaXNzIiwiYSI6ImNrcXhsZGNzczB6ZnoycXFhajM1dzhkdnEifQ.3lvsMTxUhyG1OojMxKPc8Q";
      var map = new mapboxgl.Map({
        container: "map",
        zoom: 10.1,
        center: this.flyTO,
        pitch: 65,
        bearing: 80,
        style: "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y",
      });
      await map.on("load", function () {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.terrain-rgb",
          tileSize: 512,
          maxzoom: 14,
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({
          source: "mapbox-dem",
          exaggeration: 1.5,
        });

        map.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            // set up the sky layer to use a color gradient
            "sky-type": "gradient",
            // the sky will be lightest in the center and get darker moving radially outward
            // this simulates the look of the sun just below the horizon
            "sky-gradient": [
              "interpolate",
              ["linear"],
              ["sky-radial-progress"],
              0.8,
              "rgba(3,90, 225, 1)",
              1,
              "rgba(21,151,220,0.1)",
            ],
            "sky-gradient-center": [0, 0],
            "sky-gradient-radius": 90,
            "sky-opacity": [
              "interpolate",
              ["exponential", 0.1],
              ["zoom"],
              5,
              0,
              22,
              1,
            ],
          },
        });

        setTimeout(() => {
          map.flyTo({
            zoom: 15.5,
            center: this.flyTO,
            pitch: 75,
            bearing: 110,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.6, // make the flying slow
            curve: 1, // change the speed at which it zooms out

            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
          });
        }, 2000);

        // add a sky layer that will show when the map is highly pitched
        // map.setFog({
        //   range: [-0.4, 1.5],
        //   color: "rgba(255,255,255,0.7)",
        //   "horizon-blend": 0.1,
        // });

        var coordinatesGeocoder = function (query) {
          // Match anything which looks like
          // decimal degrees coordinate pair.
          var matches = query.match(
            /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
          );
          if (!matches) {
            return null;
          }

          function coordinateFeature(lng, lat) {
            return {
              center: [lng, lat],
              geometry: {
                type: "Point",
                coordinates: [lng, lat],
              },
              place_name: "Lat: " + lat + " Lng: " + lng,
              place_type: ["coordinate"],
              properties: {},
              type: "Feature",
            };
          }

          var coord1 = Number(matches[1]);
          var coord2 = Number(matches[2]);
          var geocodes = [];

          if (coord1 < -90 || coord1 > 90) {
            // must be lng, lat
            geocodes.push(coordinateFeature(coord1, coord2));
          }

          if (coord2 < -90 || coord2 > 90) {
            // must be lat, lng
            geocodes.push(coordinateFeature(coord2, coord1));
          }

          if (geocodes.length === 0) {
            // else could be either lng, lat or lat, lng
            geocodes.push(coordinateFeature(coord1, coord2));
            geocodes.push(coordinateFeature(coord2, coord1));
          }

          return geocodes;
        };

        // Add the control to the map.
        map.addControl(
          new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            localGeocoder: coordinatesGeocoder,
            zoom: 6,
            placeholder: "Try: Toubkal",
            mapboxgl: mapboxgl,
            reverseGeocode: true,
            speed: 0.6, // make the flying slow
            curve: 1, // change the speed at which it zooms out
          })
        );

        map.addControl(
          new mapboxgl.GeolocateControl({
            speed: 0.6, // make the flying slow
            curve: 1, // change the speed at which it zooms out
            zoom: 1,
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );
      });
    },
    fly() {
      this.mapLoad();
    },
  },
  mounted() {
    this.flyTO = localStorage.getItem("geocode").split(",").reverse();
    console.log(this.flyTO);
    this.mapLoad();
  },
};
</script>

<style lang="scss" scoped>
.mapHolder {
  position: relative;
  width: 100%;
  height: 100vh;
  button {
    position: absolute;
    top: 150px;
    z-index: 100;
  }
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>