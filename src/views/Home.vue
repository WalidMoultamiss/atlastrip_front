<template>
  <div class="home">
    <!-- <Devider Height="10px" /> -->
    <Banners/>
    <PeopleYouMayKnow/>
    <ProfileViewerForWeb/>
    <Message @click="hideMe" v-if="toggleMsg" @hide="hideMe" :msg="msg" />
    <div class="FEED">
      <Feed />
    </div>
    <AiBot />
    <Devider />
    <Navbar Active="home" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Feed from "../components/Feed.vue";
import Message from "../components/Message.vue";
import AiBot from "../components/AiBot.vue";
import Devider from "../components/Devider.vue";
import Banners from '../components/Ads/Banners.vue';
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue';
import ProfileViewerForWeb from '../components/Profile/ProfileViewerForWeb.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Message,
    Feed,
    AiBot,
    Devider,
    Banners,
    PeopleYouMayKnow,
    ProfileViewerForWeb,
  },
  data() {
    return {
      toggleMsg: false,
      msg: "",
    };
  },
  methods: {
    hideMe() {
      this.toggleMsg = false;
    },
    salutation() {
      localStorage.setItem("salutation", "true");
    },
  },
  created() {
    if (localStorage.getItem("salutation") !== "true") {
      this.toggleMsg = true;
      this.msg = `welcome back ${
        JSON.parse(localStorage.getItem("user")).first_name
      }`;
      this.salutation();
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  // width: 100vw;
  background: #fafafa;
  
}
.FEED {
  display: contents;
  height: 100%;
  width: 100%;
  
  // max-width: 400px;
}

@media (min-width: 425px) {
  .FEED{
    
    display: contents;
  // width: 100vw ;
  height: 100%;
  max-width: 400px;
  }
}
</style>
