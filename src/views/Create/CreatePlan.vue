<template>
  <div class="CreatePlanContainer">
    <CreatePlanHolder @plan_name="change_plan_name" @getInfo="getInfo" :hikesAll="hikesAll" />
    <button @click="send">send it</button>
    <devider />
    <devider />
    <devider />
    <devider />
    <devider />
    <Navbar Active="create" />
  </div>
</template>

<script>
import CreatePlanHolder from "../../components/Create/CreatePlanHolder.vue";
import Devider from "../../components/Devider.vue";
import Navbar from "../../components/Navbar.vue";
export default {
  components: {
    Navbar,
    CreatePlanHolder,
    Devider,
  },
  data() {
    return {
      hikesAll: [],
      infoPlan:[],
      plan_name:''
    };
  },
  methods: {
    getInfo(allInfo){
      this.infoPlan = allInfo
    },
    change_plan_name(name){
      this.plan_name = name
    },
    send(){
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");
      myHeaders.append("authorization", token);
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({
        plan_name:this.plan_name,
        data:this.infoPlan
        })
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body:raw,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/plan/add",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.table(result.data.split('>'))
          this.$router.push(`/planViewerExp/${result.uniqueId}`)
          
          })
        .catch((error) => console.log("error", error));
    },
    getHikesAll() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/hike/getAllHikeWithCreator",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (this.hikesAll = result))
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getHikesAll();
  },
};
</script>

<style>
</style>