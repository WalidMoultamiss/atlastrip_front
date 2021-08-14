<template>
  <div>
    <div class="topNavbar">
      <button class="back" @click="backToHome">⨞</button>
      <h2>{{ hike.name }}</h2>
      <div class="avatar">
        <profile-image class="profile_image"/>
      </div>
    </div>
    <div class="devider"></div>

    <Map/>
      <div class="divider"></div>
    <Navbar class="navbar" Active="home" />
  </div>
</template>

<script>
import FavoriteHike from "../components/FavoriteHike.vue";
import Map from '../components/Map.vue';
import Navbar from "../components/Navbar.vue";
import ProfileImage from '../components/ProfileImage.vue';
import SmallPlan from "../components/smallPlan.vue";

export default {
  name: "PlanViewer",
  components: {
    Navbar,
    FavoriteHike,
    SmallPlan,
    Map,
    ProfileImage  
  },
  data() {
  return {
      hike: [],
      plans: [],
      link: "https://www.youtube.com/embed/L_WH9iUx-3k",
    };
  },
  methods:{
    backToHome() {
      this.$router.back();
    },
  },
  mounted(){
    
  }
};
</script>
<style lang="scss" scoped>
.topNavbar {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  color: white;
  background: #325d0d;

  button {
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    color: #325d0d;
    background: #f3faed;
    border: none;
    outline: none;
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(164 219 113);
    height: 34px;
    width: 34px;
    border-radius: 200px;
    .profile_image{
        height: 34px;
      width: 34px;
      border-radius: 200px;
      }
  }
}
.devider {
  height: 54px;
}

.hikeBody {
  width: 100%;
  padding: 0px 10px;
  .hikeImg {
    padding: 30px 20px;
    width: 100%;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: inset 0px calc(-50vw) 50px rgba(0, 0, 0, 0.517),
      10px 0px 50px rgba(0, 0, 0, 0.517);
    height: calc(100vw + 50px);
    background-image: url("../assets/13.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    .hikeImgHeader {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      .option {
        width: 38px;
        height: 38px;
        border-radius: 38px;
        // border: 1px solid white;
        // box-shadow: 0px 0px 10px lawngreen;
        background-color: rgba(0, 0, 0, 0.358);
        color: white;
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .hikeImgBody {
      width: 100%;
      height: 30%;
      color: white;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 5px;
      .hikeImgText {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        // flex-direction: column;
        h1:first-letter {
          text-transform: capitalize;
        }
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          // max-width: 75ch;
          max-width: 35ch;
        }
      }
      .footer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .viewIn3d {
          padding: 7px 20px;
          width: max-content;
          background-color: rgba(0, 0, 0, 0.434);
          border-radius: 38px;
          box-shadow: 0px 0px 10px lawngreen;
          background-color: rgb(144, 211, 9);
          color: white;
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .plans {
    .smallPlanHolder {
      display: flex;
      gap: 10px;
      overflow-x: scroll;
    }
  }
}
.divider{
  height: 150px;
}
// .navbar{
//   position: fixed;
//     z-index: 999;
//     /* height:7.4em; */
//     bottom:0px;
// }
</style>