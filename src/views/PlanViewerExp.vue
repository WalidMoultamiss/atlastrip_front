<template>
  <div class="PlanViewerExpContainer">
      
      <PlanViewerBody :days="days" />
      <devider/>
      <Navbar Active="experiences"/>
  </div>
</template>

<script>
import Devider from '../components/Devider.vue';
import PlanViewerBody from '../components/Experiences/PlanViewerBody.vue';
import Navbar from '../components/Navbar.vue';


export default {
  
  components:{
    PlanViewerBody,
    Navbar,
    Devider
  },
   data(){
        return{
          days:[]
        }
    },
    methods:{
        getDays(){
        var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://localhost/Atlastrip_Backend/plan/getDaysFromPlanUniqueId/${this.$route.params.id}`, requestOptions)
  .then(response => response.json())
  .then(result => this.days = result)
  .catch(error => console.log('error', error));
    },
    },
    beforeMount(){
        this.getDays()

    }
}
</script>

<style>

</style>