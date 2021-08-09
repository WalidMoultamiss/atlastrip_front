<template>
      <div class="plans">
          <PlanExp :plan="plan" v-for="plan in plans" :key="plan"  />
      </div>
</template>

<script>
import PlanExp from './PlanExp.vue'
export default {
    name:'Plans-experiences',
    components:{
        PlanExp,

    },
    data(){
        return{
            plans:[]
        }
    },
    methods:{
    getAll(){
        var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/plan/getAllExpWithCreator", requestOptions)
  .then(response => response.json())
  .then(result => this.plans = result)
  .catch(error => console.log('error', error));
    }
    }
    ,beforeMount(){
        this.getAll()
    }

}
</script>


<style lang="scss" scoped>

    .plans{
        width: 100%;
        height: max-content;
        display: flex;
        gap: 33px;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>