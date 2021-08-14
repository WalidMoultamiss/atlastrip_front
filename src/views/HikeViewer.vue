<template>
  <div class="hikeViewer">

    <div class="topNavbar">
      <button class="back" @click="backToHome">⨞</button>
      <h2>{{ hike.name }}</h2>
      <div class="avatar">
        <profile-image class="profile_image"/>
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
          <div v-if="admin" @click="editHike" class="option btn-hover-pointer">◦◦◦</div>
          <div v-if="!admin" class="option btn-hover-pointer">◦◦◦</div>
          <FavoriteHike class="btn-hover-pointer" />
        </div>
        <div class="hikeImgBody">
          <div class="hikeImgText">
            <h1>{{ hike.name }}</h1>
            <devider Height="50px"/>
          </div>
          <div class="footer">
            <div class="viewIn3d btn-hover-pointer" @click="showMap">
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
import ProfileImage from '../components/ProfileImage.vue';
import SmallPlan from "../components/smallPlan.vue";

export default {
  name: "PlanViewer",
  components: {
    Navbar,
    FavoriteHike,
    SmallPlan,
    DividerW20,
    Devider,
    ProfileImage  
  },
  data() {
  return {
      hike: [],
      plans: [],
      admin:false,
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