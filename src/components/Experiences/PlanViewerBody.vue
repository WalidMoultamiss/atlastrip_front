<template>
  <div class="container_days">
    <div class="imageBg">
      <h1>Created with {{ creator }}</h1>
      <div class="Intrests">
        <div class="CreatePostContaner">
          <Profile-image class="profileImg" />

          <h2>Create a plan</h2>
          <button
            @click="goto('/CreatePlan')"
            class="btn-hover btn-scale btn-pointer btn-plus"
          >
          <div class="h1Plus">

            <h1 style="margin: 0px 10px;" >+</h1>
          </div>
          </button>
        </div>
        <divider-w-20 />
      </div>
    </div>
    <divider-w-20 />
    <divider-w-20 />
    <divider-w-20 />
    <div class="daysContainer">
      <divider-w-20 />
      <div class="dash">
        <img class="img" src="../../assets/icons/dash.svg" alt="" />
      </div>
      <divider-w-20 />
      <DayHolder v-for="day in days" :key="day" :day="day" />
    </div>
  </div>
</template>

<script>
import DividerW20 from "../DividerW20.vue";
import DayHolder from "../Experiences/DayHolder.vue";
import ProfileImage from "../ProfileImage.vue";
export default {
  components: { DayHolder, DividerW20, ProfileImage },
  data() {
    return { creator: "" };
  },
  props: {
    days: Array,
  },
  methods:{
      goto(url){
          this.$router.push(url)
      },
  },
  updated() {
    this.creator = this.days[0].first_name;
  },
};
</script>

<style lang="scss" scoped>
.container_days {
  width: 100%;
  height: max-content;

  // position: relative;

  .imageBg {
      box-shadow: inset 0px 70px 100px rgba(0, 0, 0, 0.455);
    width: 100%;
    height: 300px;
    background-image: url("../../assets/istockphoto-827243792-612x612.jpg");
    background-position: center;
    position: fixed;
    top: 0;
    z-index: 1;
    color: white;
    display: flex;
    align-items: center;
    padding: 40px 0px;
    flex-wrap: wrap;
      .Intrests {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .CreatePostContaner {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 15px;
      background: white;
      color: rgb(32, 32, 32);
      border-radius: 15px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.262);
      h2 {
        margin: 0px;
        padding: 0px;
        width: 100%;
        text-align: left;
      }

      .btn-plus {
        padding: 10px;
        border-radius: 5px;
        border: 0px green solid;
        outline: none;
        color: white;
        background-color: #00b919;
        display: flex;
        align-items: center;
        align-items: center;
        .h1Plus {
          width: 100%;
          text-align: center;
        }
      }
      .profileImg {
        min-width: 50px;
        min-height: 50px;
        border-radius: 50px;
      }
      .inputPostCreate {
        max-width: 100%;
      }
    }
  }
    h1 {
      margin-left: 10px;
      text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.517);
    }
  }
  .daysContainer {
    position: absolute;
    top: 250px;
    z-index: 2;
    background: #fff;
    height: max-content;
    width: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.31);
    .dash {
      width: 100%;
      height: 10px;
      display: flex;
      justify-content: center;
      .img {
        width: 70px;
        height: 10px;
      }
    }
  }
}
</style>