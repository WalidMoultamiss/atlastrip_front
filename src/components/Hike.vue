<template>
  <div
    @click="showInfo"
    style=""
    class="hikeHolder"
    :style="{
      backgroundImage:
        'url(' +
        'http://localhost/Atlastrip_Backend/public/storage/images/' +
        hike.image +
        ')',
    }"
  >
    <div class="hikeheader">
      <FavoriteHike style="opacity:0;" />
      <div v-if="hike.first_name != undefined" class="rightBox">
        created by &nbsp;
        <h4>{{ hike.first_name }}</h4>
      </div>
    </div>
    <h2>{{ hike.name }}</h2>
    <div class="hikeBody">
      <div class="camping">
        <img src="../assets/tent.svg" alt="" />
        <h4>{{ hike.camping }}</h4>
      </div>
      <div class="rightCard">
        <div class="textRCard">
          &nbsp;&nbsp;&nbsp;
          <h4>4363</h4>
          &nbsp;
          <h4>h.m.</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FavoriteHike from "./FavoriteHike.vue";
// import Hike from "@/components/Hike.vue";
export default {
  name: "Hike",
  components: {
    FavoriteHike,
    // Hike,
  },
  props: {
    hike: Object,
  },
  data() {
    return {
      hikeCreator:''
    };
  },
  methods: {
    showInfo() {
      localStorage.setItem("hikeId", this.hike.id);
      this.$router.push("/HikeViewer");
    },
  },
};
</script>

<style lang="scss" scoped>
.hikeHolder {
  
  // background-image: url("../assets/13.jpg");
  width: 100%;
  height: 220px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: inset 0px 0px 110px black;
  color: white;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .hikeheader {
    
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .favHeart {
      width: 38px;
      height: 38px;
      border-radius: 38px;
      background-color: olivedrab;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .rightBox {
      width: max-content;
      height: 38px;
      padding: 0px 10px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.393);
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
      color: white;
    }
  }
  h2 {
    transform: translateY(34px);
  overflow: hidden;
  max-width: 19ch;
}
  .hikeBody {
    
    position: relative;
    width: 100%;
    height: 30px;
    .camping {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 10px;
      width: 100%;
      height: 25px;
      img {
        transform: translateY(10px);
        width: 25px;
      }
      h4 {
        transform: translateY(10px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // max-width: 75ch;
        max-width: 17ch;
      }
    }
    .rightCard {
      max-width: 50px;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 15%;
      height: 330%;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 15px;
      background: rgb(32, 134, 14);
      transform: translate(19px, 48px);
      //  transform: translateY(50px);
      .textRCard {
        transform: translateX(20px);
        width: 0px;
        height: 60px;
        align-items: flex-end;
        display: flex;
        justify-content: flex-end;
        transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        --webkit-transform: rotate(270deg);
        h4 {
          transform: translateX(15px);
        }
      }
    }
  }
}
</style>