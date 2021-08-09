<template>
  <div class="BodyExp">
          <PlansExp/>
  </div>
</template>

<script>
import PlansExp from './PlansExp.vue'
export default {
    name:'Plans-experiences',
    components:{
        PlansExp,

    },
    data(){
        return{

        }
    }

}
</script>


<style lang="scss" scoped>

    .BodyExp{
        width: 100%;
        height: max-content;
    }

</style>