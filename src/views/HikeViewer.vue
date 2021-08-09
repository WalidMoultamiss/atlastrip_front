<template>
  <div class="hikeViewer">

    <div class="topNavbar">
      <button class="back" @click="backToHome">⨞</button>
      <h2>{{ hike.name }}</h2>
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
    <div class="hikeBody">
    <divider-w-20/>
    <divider-w-20/>
    <divider-w-20/>
      <div
        class="hikeImg"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            hike.image +
            ')',
        }"
      >
        <div class="hikeImgHeader">
          <FavoriteHike />
          <div @click="editHike" class="option">◦◦◦</div>
        </div>
        <div class="hikeImgBody">
          <div class="hikeImgText">
            <h1>{{ hike.name }}</h1>
            <p>{{ hike.description }}</p>
          </div>
          <div class="footer">
            <div class="viewIn3d" @click="showMap">
              <h4>view in 3D map</h4>
            </div>
          </div>
        </div>
      </div>
      <div v-if="plansLength !=0" class="plans">
        <br />
        <h2>Show in a plan</h2>
        <br />
        <div
          :class="[
            plansLength == 1 ? 'smallPlanHolder disp' : 'smallPlanHolder',
          ]"
        >
          <div v-for="plan in plans" :key="plan">
            <SmallPlan :plan="plan" className="widePlan" />
          </div>
        </div>
      </div>
      <div class="description">
        <h2>Description</h2>
        <p>{{ hike.description }}</p>
      </div>
    <h3>{{ count }} product has been found</h3>
    <div class="gadgetsHolder">
      <div
        v-for="gadgetsImage in gadgetsImages"
        :key="gadgetsImage"
        class="gadget"
        :style="{ backgroundImage: 'url(' + gadgetsImage + ')' }"
      ></div>
    </div>
    <Devider/>
    </div>
    
    <Navbar class="navbar" Active="home" />
  </div>
</template>

<script>
import Devider from '../components/Devider.vue';
import DividerW20 from '../components/DividerW20.vue';
import FavoriteHike from "../components/FavoriteHike.vue";
import Navbar from "../components/Navbar.vue";
import SmallPlan from "../components/smallPlan.vue";

export default {
  name: "PlanViewer",
  components: {
    Navbar,
    FavoriteHike,
    SmallPlan,
    DividerW20,
    Devider,
  },
  data() {
    return {
      hike: [],
      plans: [],
      plansLength: "",
      link: "https://www.youtube.com/embed/L_WH9iUx-3k",
      gadgets: [],
      gadgetsImages: [],
    };
  },
  methods: {
    editHike() {
      localStorage.setItem("hikeToEdit", this.hike.id);
      this.$router.push("/EditHike");
    },
    backToHome() {
      this.$router.back();
    },
    showMap() {
      localStorage.setItem("geocode", this.hike.geocode);
      this.$router.push("/Map3dViewer");
    },
    getHikeInfo() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/hike/getHikeInfoWithCreator/${localStorage.getItem(
          "hikeId"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          let res = result;
          res.name = res.name.toLocaleLowerCase();
          this.hike = res;
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
        `http://localhost/Atlastrip_Backend/hike/getPlanFromHike/${localStorage.getItem(
          "hikeId"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.plans = result;
          this.plansLength = this.plans.length;
        })
        .catch((error) => console.log("error", error));
    },
    getGadgets() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        requests: [
          {
            indexName: "decathlon_prod_fr",
            params:
              "ruleContexts=%5B%22category_3729%22%5D&clickAnalytics=true&distinct=true&filters=category%20%3D%203729&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&page=0&maxValuesPerFacet=200&facets=%5B%22nature%22%2C%22practices%22%2C%22genders%22%2C%22generic_color%22%2C%22size%22%2C%22brand%22%2C%22available%22%2C%22sale%22%5D&tagFilters=&facetFilters=%5B%5B%22practices%3ARANDONN%C3%89E%20P%C3%89DESTRE%22%5D%2C%5B%22available%3A1%22%5D%5D",
          },
        ],
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://4kcwynnd8n-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.30.0%3Binstantsearch.js%20(4.8.3)%3BJS%20Helper%20(3.2.2)&x-algolia-application-id=4KCWYNND8N&x-algolia-api-key=09bf9815beb62e45db5779cda41570f7",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result.results[0].hits);
          this.gadgets = result.results[0].hits;
          this.count = result.results[0].hits.length;
          let arr = result.results[0].hits.map(({ image_url }) => {
            return image_url.split("?&f")[0];
          });
          this.gadgetsImages = arr;
        })
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getHikeInfo();
    this.getPlans();
  },
  created() {
    this.getGadgets();
  },
};
</script>
<style lang="scss" scoped>
.hikeViewer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

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
  .devider {
    height: 54px;
  }

  .hikeBody {
    width: 100%;
    max-width: 500px;
    height: max-content;
    padding: 0px 10px;
    .hikeImg {
      padding: 30px 20px;
      width: 100%;
      margin-top: 10px;
      border-radius: 20px;
      box-shadow: inset 0px calc(-50vw) 50px rgba(0, 0, 0, 0.517),
        10px 0px 50px rgba(0, 0, 0, 0.517);
      height: calc(100vw + 50px);
      max-height: 300px;
      // background-image: url("http://localhost/Atlastrip_Backend/public/storage/images/b6ea552a2d32f402d8ff88bc0f221da0.jpg");
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
      .disp {
        justify-content: center !important;
      }
    }
    .gadgetsHolder {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      width: 100%;
      height: max-content;
      overflow-x: scroll;
      .gadget {
        min-width: 100px;
        min-height: 100px;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
      }
    }
  }
  .divider {
    height: 150px;
  }
  @media(min-width: 425px){
    .topNavbar{
      display: none;
    }
  }
  // .navbar{
  //   position: fixed;
  //     z-index: 999;
  //     /* height:7.4em; */
  //     bottom:0px;
}
</style>