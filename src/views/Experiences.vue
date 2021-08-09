<template>
  <div class="home">
    <Message @click="hideMe" v-if="toggleMsg" @hide="hideMe" :msg="msg" />
    <FeedExp />
    <AiBot />
    <Devider />
    <Navbar Active="experiences" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FeedExp from "../components/Experiences/FeedExp.vue";
import Message from "../components/Message.vue";
import AiBot from "../components/AiBot.vue";
import Devider from "../components/Devider.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Message,
    FeedExp,
    AiBot,
    Devider,
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

<style scoped>
.home {
  background: #fafafa;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

</style>
