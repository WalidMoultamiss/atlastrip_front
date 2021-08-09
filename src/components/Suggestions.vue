<template>
<div>
  <div class="sugg-header">
  <h3>Suggession for you</h3>
  <button v-if="!cardWidth" class="btn-sm-action" @click="changeCard"><h4>small cards</h4></button>
  <button v-if="cardWidth" class="btn-sm-action" @click="changeCard"><h4>large cards</h4></button>
  </div>
  <div class="wrapperExpert">
    <div class="divider"></div>
    <CardProfile :card="cardWidth" v-for="profile in Profiles" :Profile="profile" :key="profile"/>
    <div class="divider"></div>
    
  </div>
  </div>
</template>

<script>
import CardProfile from "./CardProfile.vue";

export default {
  components: { CardProfile },

  data() {
    return {
      Profiles: [],
      cardWidth:true,
    };
  },
  methods: {
    changeCard(){
      this.cardWidth = !this.cardWidth
    },
    getProfiles() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "authorization",
        `${"bearer " + localStorage.getItem("token")}`
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/user/getUsersCardProfile",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
            
            this.Profiles = result.users
            })
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount(){
      this.getProfiles()
  }
};
</script>

<style lang="scss" scoped>

.sugg-header{
display: flex;
justify-content: space-between;
padding: 1% 5%;
  .btn-sm-action{
      padding: 5px 13px;
      border-radius: 13px;
      background-color: #90d309;
      color: white;
      outline: none;
      border: none;
  }
  
  h3{
    text-align: left;
    
  }
}
.wrapperExpert{
    display: flex;
    width: 100%;
    gap: 15px;
    height: max-content;
    padding: 10px 0px;
    overflow-x: scroll;
}
</style>