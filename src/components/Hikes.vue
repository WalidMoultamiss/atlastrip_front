<template>
  <div class="hikesHolder" v-for="hike in hikes" :key="hike">
      <div v-if="!line" class="lineHolder">
          <div class="curvedLine"></div>
          <div class="straightLine"></div>
      </div>
      <div v-if="!circle" class="circleHike">
        <div class="circle"></div>
      </div>
    <Hike  :hike="hike" />
  </div>
</template>
<script>
import Hike from "@/components/Hike.vue";
export default {
  name: "Hikes",
  components: {
    Hike,
  },
  props: {
    hikes: Array,
    line:{
        type: Boolean,
        default: true
    },
    circle:{
        type: Boolean,
        default: true
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.hikesHolder{
    min-width: 280px;
  width: 85%;
  transform: translateX(20px);
//   padding: 20px 10px;
border-radius: 15px ;
box-shadow: 0px 0px 10px black;
  height: min-content;
  margin: 20px;
  position: relative;
  
  .lineHolder{
        transform: translateX(-15px) ;
        position: absolute;
        top: 0;
        width: 20px;
        height: 100%;
        .curvedLine{
          transform: translateY(-7px);
          width: 15px;
          height: 40px;
          border-left: 2px solid rgb(66, 66, 66);
          border-bottom: 2px solid rgb(66, 66, 66);
          border-bottom-left-radius: 10px;
        }
        .straightLine{
            width: 2px;
              transform: translateY(-20px);

            height: 100%;
            background: rgb(66, 66, 66);
        }
    }
    .circleHike{
      transform: translateX(-25px);
        position: absolute;
        top: 0;
      .circle{
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: aquamarine;
      }
    }
}
</style>