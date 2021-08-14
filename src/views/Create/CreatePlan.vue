<template>
  <div class="CreatePlanContainer">
    <div class="imgTop">
      <h2>Over {{info.plans}} plans has been created with love by over {{info.users}} backpackers, be part of the community</h2>
    </div>
    <CreatePlanHolder class="createPlanHolder" @plan_name="change_plan_name" @getInfo="getInfo" :hikesAll="hikesAll" />
    <button class="btn-primary-hover btn-translate" @click="send">Create Plan</button>
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
      plan_name:'',
      info:{}
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
    getInfos(){
          var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/plan/getinfoOfAllPlans", requestOptions)
  .then(response => response.json())
  .then(result => this.info = result)
  .catch(error => console.log('error', error));
      }
  },
  beforeMount() {
    this.getInfos()
    this.getHikesAll();
  },
};
</script>

<style lang="scss" scoped>
.CreatePlanContainer{
  width: 100%;
  .imgTop{
    padding: 40px;
    padding-top: 80px;
    color: white;
    text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.628);
    background-image: url('../../assets/0ca0ddd9bf8dfee8a2c26227bf21f6b8.gif');
    width: 100%;
    height: 300px;
    background-position: center;
    background-size:cover ;
    border-bottom-left-radius: 40px ;
    border-bottom-right-radius: 40px ;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.296);
    h2{
      text-align: left;
    }
  }
  .createPlanHolder{
    transform: translateY(-100px);
  }
  .btn-translate{
    transform: translateY(-80px);
  }
  
}

</style>