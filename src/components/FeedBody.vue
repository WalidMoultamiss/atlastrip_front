<template>
  <div>
    <DividerW20 />
    <div class="sponsorHolder">
      <h3>Sponsorisé</h3>
      <DividerW20 />
      <div class="banners"></div>
      <Banner />
      <DividerW20 />
    </div>
    <DividerW20 />
    <h3 class="marginLeft">Search by my intrests</h3>
    <Intrests h="50px" :text="false" />
    <DividerW20 />
    <Plans />
    <!-- <Map/> -->
  </div>
</template>
<script>
import Map from "../components/Map.vue";
import Plans from "../components/Plans.vue";
import Banner from "./Ads/Banner.vue";
import DividerW20 from "./DividerW20.vue";
import Intrests from "./Intrests";
export default {
  name: "FeedBody",
  components: {
    Map,
    Plans,
    Banner,
    DividerW20,
    Intrests,
  },
};
</script>
<style lang="scss" scoped>
.sponsorHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  padding: 10px 0px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.455);
  width: 100%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
}

@media (max-width: 1350px) {
  .sponsorHolder {
  background-color: transparent;
   padding: 0px;
   border-radius: none;
   border: none;
   box-shadow: none;
  }
}

.marginLeft {
  text-align: left;
  padding-left: 20px;
}
</style>