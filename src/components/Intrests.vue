<template>
  <div class="intrestsHolder">
    <div class="intrestsHolder2">
        <div class="margin"></div>
      <Intrest :h="h"  :text="text"  v-for="intrest in intrests" :key="intrest" :intrest="intrest" />
      <div class="margin"></div>
    </div>
  </div>
</template>

<script>
import Intrest from "./Intrest.vue";
import EditIntrests from "./EditIntrests.vue";
export default {
  components: {
    Intrest,
    EditIntrests,
  },
  props: {
    edit: Boolean,
    h:String,
    text:Boolean
  },
  data() {
    return {
      intrests: [],
    };
  },
  methods: {
    getMyintrests() {
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("authorization", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/intrest_user/getMine",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.intrests = result;
        })
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getMyintrests();
  },
};
</script>

<style lang="scss" scoped >
.intrestsHolder {
    width: 100%;
    .intrestsHolder2{
      .margin {
        width: 15px;
      }
      margin-top: 15px;
  width: 100%;
  height: max-content;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  }
}
</style>