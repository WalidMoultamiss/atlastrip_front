<template>
  <div class="dayContainer">
    <div class="sideLeftContainer">
      <div class="dayBorder">
        <div class="dayNumContainer">

          <h1>{{ day_number }}</h1>
          <h4>day</h4>
        </div>
      </div>
    </div>
    <div class="hikesHolder">
        <Hikes  :line="false" :hikes="hikes" />
    </div>
  </div>
</template>

<script>
import DividerW20 from '../DividerW20.vue';
import Hikes from "../Hikes.vue";
export default {
  components: {
    Hikes,
    DividerW20,
  },
  props: {
    day: Object,
  },
  data() {
    return {
      hikes: [],
      day_number: "",
    };
  },
  methods: {
    getHikes() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(
        `http://localhost/Atlastrip_Backend/hike/getHikesFromDay/${this.day.id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (this.hikes = result))
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getHikes();
    let dayN = this.day.day_number;
    this.day_number = +dayN + 1;
  },
};
</script>
<style lang="scss" scoped>
.dayContainer {
  width: 100%;
  padding: 0px 15px;
  background-color: white;
  .sideLeftContainer {
    max-width: 20%;
    .dayBorder {
      width: 80%;
      height: 70px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid;

      .dayNumContainer {
        width: 80%;
        height: 90%;
        background-color: white;
        border-radius: 12px;
      }
    }
  }
  .sideLeftContainer {
    width: 80%;
  }
  
}
</style>