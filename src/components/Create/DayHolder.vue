<template>
  <div class="days">
    <h2>day {{numberDays}}</h2>
    <ChooseHikes  @nextDay="nextDay"   :key="reload" :hikesAll="hikesAll"  />
  </div>
</template>

<script>
import ChooseHikes from "../../components/Create/ChooseHikes.vue";
export default {
  components: {
    ChooseHikes,
  },
  props:{
    hikesAll:Array,
    nDay:String,
  },
  data() {
    return {
      reload:0,
      numberDays:0,
      choosenHikes:[],
      chHi: 1,
    };
  },
  methods: {
    
    addHike(){
      this.chHi++
    },
    nextDay(choosenHikes){
      this.choosenHikes.push(choosenHikes)
      this.$emit('nextDay',this.choosenHikes)
    }
  },
  mounted(){
    this.numberDays = this.nDay
    if(this.numberDays == this.nDay){

    }
  }
};
</script>

<style lang="scss" scoped>
  .days{
    border-left: 5px dotted green;
    margin-bottom: 0px;
    h2{
      text-align: left;
      margin-bottom: 0px;
      border-left: 5px solid green;
    }
  }
</style>