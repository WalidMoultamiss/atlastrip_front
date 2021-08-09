<template>
  <div>
    <div class="container" @click="viewPlan" >
      <div class="img_title" :style="{ 'background-image': 'url(' + url + ')' }" >
        <h3>{{plan.name}}</h3>
        <h5>hard</h5>
      </div>
      <div class="planBody">
        <div class="head">
          <div class="duration">
            <h4>⏱ {{plan.time}} days</h4>
            
            <div class="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <div class="hikes">
          <div>
            <h4>🗻 the plan</h4>
          </div>
          <div class="hike">
            <div class="hikeHolder" v-for="hike in hikes" :key="hike">
              <div class="lineCurved"></div>
            <strong>{{hike.name}} </strong>
            </div>
          </div>
        </div>
        <div class="btn_action">
          <button  ><h3>{{plan.price}} dh </h3></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Map from './Map.vue'
// import Plan from '../components/Plan.vue'
export default {
  name: "Plan",
  components: {
    // Map,
    // Plan,
  },
  props:{
    plan:Object,
  },
  data(){
    return{
      hikes:[],
      url:''
    }
  },
  methods:{
    viewPlan(){
      localStorage.setItem('planId',this.plan.id)
      this.$router.push('/PlanViewer')
    },
    getHikes(){
      var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://localhost/Atlastrip_Backend/hike/hikesPlan/${this.plan.id}`, requestOptions)
  .then(response => response.json())
  // .then(result => console.log(result))
  .then(result => {
    this.hikes = result
    let random = Math.ceil(Math.random(0,1)*this.hikes.length-1)
    this.url = 'http://localhost/Atlastrip_Backend/public/storage/images/' + this.hikes[random].image
    })
  .catch(error => console.log('error', error));
    }
},
beforeMount() {
    this.getHikes();
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  height: max-content;
  padding-bottom: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px black;
  margin: 20px 10px;
  .img_title {
    box-shadow: inset 0em 50px 10px rgba(128, 128, 128, 0.6);
    width: 100%;
    height: 200px;
    border-radius: 15px 15px 0px 0px;
    background: rgb(255, 255, 255);
    // background-image: url("https://adalo-uploads.imgix.net/2aa54258c32e333799e67bdf8f4efdc37315ee46e28c44a15f7b56e0d99548cd.jpg");
    background-origin: center;
    background-position: center;
    background-size: cover;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
  }
  .planBody {
    width: 100%;
    padding: 10px;
    .head {
      width: 100%;
      .duration {
        display: flex;
        justify-content: space-between;
      }
    }
    .hikes {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10px;

      .hike {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .hikeHolder{
          display: flex;
        .lineCurved{
          transform: translateY(-7px);
          width: 15px;
          height: 20px;
          border-left: 5px solid black;
          border-bottom: 5px solid black;
          border-bottom-left-radius: 10px;
        }}
      }
    }
    .btn_action {
      width: 100%;
      display: flex;
      padding-right: 10px;
      justify-content: flex-end;
      button{
        color: white;
        // font-weight: 500;
        padding: 10px 50px;
        border-radius: 50px;
        border: none;
        background:olivedrab;

      }
    }
  }
}
</style>