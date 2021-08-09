<template>
  <div>
    <div class="intrestsHolder">
      <div class="margin"></div>
      <IntrestToEdit
        @clicked="hasclicked"
        v-for="intrest in allIntrests"
        :key="intrest"
        :intrest="intrest"
      />
      <div class="margin"></div>
    </div>
    <div class="intrestsFooter">
      <button class="done" @click="refresh">done</button>
    </div>
  </div>
</template>

<script>
import IntrestToEdit from "./IntrestToEdit.vue";
export default {
  components: {
    IntrestToEdit,
  },
  data() {
    return {
      intrests: [],
      allIntrests: [],
      dimming: true,
    };
  },
  methods: {
    refresh() {
      let tabl = this.allIntrests.filter((int) => int.check !== true);
      console.table(tabl);
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");
      myHeaders.append("authorization", token);
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(tabl);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/intrest_user/add",
        requestOptions
      )
        .then((response) => response.json())
        .then(setTimeout(()=>{this.$emit('showIntrests')},200))
        .catch((error) => console.log("error", error));
    },
    hasclicked() {},
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
    getAllintrests() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/intrest/intrests",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.allIntrests = result;
        })

        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getMyintrests();
    this.getAllintrests();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped >
.intrestsHolder {
  position: relative;
  margin-top: 15px;
  width: 100%;
  height: max-content;
  display: flex;
  gap: 20px;
  overflow-x: scroll;

  .margin {
    width: 15px;
  }
}
.intrestsFooter{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  .done {
    padding: 8px 16px;
    outline: none;
    border: none;
    border-radius: 16px;
    background-color: #90d309;
    color: white;
  }
}
</style>