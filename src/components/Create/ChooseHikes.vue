<template>
<div class="chooseHikes">

  <ChooseHike ref="lastone"  :hikesAll="hikesAll" @addHike="addHike" v-for="ch in chHi" :key="ch" />
  <divider-w-20/>
  <button class="btnAddHike" v-if="removeNextDay && !editMode && chHi>1 " @click="rmv">next day</button>
  <button class="btnAddHike" v-if="!removeNextDay" @click="edit">edit this day</button>
  <button class="btnAddHike" v-if="editMode" @click="cancelEdit">close edit</button>
</div>
</template>

<script>
import ChooseHike from "../../components/Create/ChooseHike.vue";
import DividerW20 from '../DividerW20.vue';
export default {
    components: {
    ChooseHike,
        DividerW20,
  },
    props:{
    hikesAll:Array,
  },
  data() {
    return {
      chHi: 1,
      editMode:false,
      removeNextDay:true,
      choosenHikes:[]
    };
  },
  methods: {
    
    addHike(hike){
      this.choosenHikes.push(hike)
      this.chHi++
    },
    rmv(){
      this.$emit('nextDay',this.choosenHikes)
      this.removeNextDay=false
      this.chHi--
    },
    cancelEdit(){
      this.editMode = false
      this.removeNextDay=false
      this.chHi--
    },
    edit(){
      this.editMode = true
      this.removeNextDay=true
      this.chHi++
    }
  },
  created(){
    
  }

}
</script>

<style lang="scss" scoped>

  .chooseHikes{
    // padding: 10px 0px 10px 10px;
    padding: 0px;
  }
  .btnAddHike {
      margin-right: 10px;
      padding: 5px 13px;
      border-radius: 13px;
      background-color: #90d309;
      color: white;
      outline: none;
      border: 1px solid #90d309;
    }

</style>