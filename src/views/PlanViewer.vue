<template>
  <div>
    <h1>{{}}</h1>
    <div class="topNavbar">
      <button class="back" @click="backToHome">⨞</button>
      <h2>{{ plan.name }}</h2>
      <div class="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 510 510"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <path
                d="m105 270v92.919l105-17.919 11.25-57.645-33.332-17.355-44.918-10z"
                fill="#c2715a"
                data-original="#c2715a"
                style=""
              ></path>
              <path
                d="m405 270-42-10-40.474 10-39.026 8.5 16.5 66.5 105 17.899z"
                fill="#af5f49"
                data-original="#af5f49"
                style=""
              ></path>
              <path
                d="m189.125 248.625-19.003-8.625h-95.122v30h112.918z"
                fill="#af5f49"
                data-original="#af5f49"
                style=""
              ></path>
              <path
                d="m435 240h-95.123l-18.544 10.333.749 19.667h112.918z"
                fill="#804231"
                data-original="#804231"
                style=""
              ></path>
              <path
                d="m265 483-10 27h-105l-15-10-15 10h-45v-84.33c0-31.74 18.34-59.2 45-72.36l14.417 2.19 15.583-10.3c5.093-.354 3.163-.132 60-.2l45 120z"
                fill="#99eeff"
                data-original="#99eeff"
                style=""
              ></path>
              <path
                d="m150 345.2v164.8h-30v-156.69c9.15-4.53 19.29-7.37 30-8.11z"
                fill="#404a80"
                data-original="#404a80"
                style=""
              ></path>
              <path
                d="m300 345-45 120v45h105l15-10 15 10h45v-84.333c0-31.744-18.335-59.205-44.994-72.37l-16.923 3.87-13.086-11.972c-4.944-.342-3.129-.13-59.997-.195z"
                fill="#66ccff"
                data-original="#66ccff"
                style=""
              ></path>
              <path
                d="m360 345.221v164.779h30v-156.69c-9.154-4.521-19.289-7.345-30-8.089z"
                fill="#283366"
                data-original="#283366"
                style=""
              ></path>
              <path
                d="m255 367.272-45-22.272v120h45l7.875-54.875z"
                fill="#edf4ff"
                data-original="#edf4ff"
                style=""
              ></path>
              <path
                d="m300 345-45 22.272v97.728h45z"
                fill="#d5e8fe"
                data-original="#d5e8fe"
                style=""
              ></path>
              <path
                d="m210 287.958v57.042c11.325 14.849 28.163 22.273 45 22.273l10-34.523-10-32.75-21-14.875z"
                fill="#ecb885"
                data-original="#ecb885"
                style=""
              ></path>
              <path
                d="m255 300v67.273c16.837 0 33.675-7.425 45-22.273 0-7.125 0-49.896 0-57.043l-25.379-.602z"
                fill="#dfa36f"
                data-original="#dfa36f"
                style=""
              ></path>
              <path
                d="m165 105v105c0 49.705 40.294 90 90 90l10-105.5-10-89.5-42.501-10z"
                fill="#efcea2"
                data-original="#efcea2"
                style=""
              ></path>
              <path
                d="m255 300c49.706 0 90-40.295 90-90v-105l-49-10-41 10z"
                fill="#ecb885"
                data-original="#ecb885"
                style=""
              ></path>
              <path
                d="m255 33.532c-9.204-8.239-15-20.207-15-33.532h-26.333c-26.878 0-48.667 21.789-48.667 48.667v56.333h90l10-31.333z"
                fill="#404a80"
                data-original="#404a80"
                style=""
              ></path>
              <path
                d="m296.333 45h-11.333c-11.527 0-22.038-4.34-30-11.468v71.468h90v-11.333c0-26.878-21.789-48.667-48.667-48.667z"
                fill="#283366"
                data-original="#283366"
                style=""
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="deviderTop"></div>
    <div class="PlanBody">
      <div class="videoViewer">
        <iframe
          width="360"
          height="200"
          :src="link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="head">
        <h2>The plan</h2>
      </div>
    </div>

    <Hikes :line="false"  :hikes="hikes" />
    <Devider/>
    <Navbar class="navbar" Active="home" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hikes from "../components/Hikes.vue";
import Devider from '../components/Devider.vue';

export default {
  name: "PlanViewer",
  components: {
    Navbar,
    Hikes,
    Devider,
  },
  data() {
    return {
      hikes: [],
      plan: [],
      link: "https://www.youtube.com/embed/L_WH9iUx-3k",
    };
  },
  methods: {
    backToHome() {
      this.$router.back();
    },
    getHikes() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/hike/getHikeWithCreator/${localStorage.getItem(
          "planId"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.hikes = result
          console.log(result);
          })
        .catch((error) => console.log("error", error));
    },
    getPlans() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/plan/infoById/${localStorage.getItem(
          "planId"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        // .then(result => console.log(result))
        .then((result) => {
          this.plan = result;
          this.link = this.plan.link.split("watch?v=").join("embed/");
          
        })
        .catch((error) => console.log("error", error));
    },
  },
  mounted() {
    
    this.getHikes();
    this.getPlans();
  },
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
    svg {
      width: 70%;
      height: 70%;
    }
  }
}
.deviderTop{
  height: 54px;
}
.PlanBody {
  width: 100%;
  .videoViewer {
    width: 100%;
    height: 200px;
    background: black;
  }
  .head {
    width: 100%;
    height: 60px;
    background: grey;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
  }
}
// .navbar{
//   position: fixed;
//     z-index: 999;
//     /* height:7.4em; */
//     bottom:0px;
// }

</style>