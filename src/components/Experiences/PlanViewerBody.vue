<template>
    <divider-w-20/>
    <divider-w-20/>
    <divider-w-20/>
    <DayHolder v-for="day in days" :key="day" :day="day"  />
    
</template>

<script>
import DividerW20 from '../DividerW20.vue'
import DayHolder from '../Experiences/DayHolder.vue'
export default {
  components: { DayHolder,DividerW20 },
    
    props:{
        days:Array,
    }

}
</script>

<style>

</style>