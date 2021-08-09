<template>
  <div class="createPlanHolder">
    <DividerW20/>
    <DividerW20/>
     <input
        @keyup="changeTitle"
        maxlength="35"
        type="text"
        placeholder="My favorite plan name"
        v-model="plan_name"
      />
    <DividerW20/>
    <DayHolder
    @nextDay="addDay"
      :nDay="days"
      class="dayHolder"
      v-for="day in days"
      :key="day"
      :hikesAll="hikesAll"
    />
  </div>
</template>



<script>
import DayHolder from "./DayHolder.vue";
import DividerW20 from "../../components/DividerW20.vue";



export default {
  components: { DayHolder,DividerW20 },
  props: {
    hikesAll: Array,
    
  },
  data() {
    return {
      days: 1,
      daysInfo:[],
      plan_name:''
    };
  },
  methods: {
    changeTitle(){
      this.$emit('plan_name',this.plan_name)
    },
    addDay(dayInfo) {
      this.daysInfo.push(dayInfo)
      this.days++;
      this.$emit('getInfo' , this.daysInfo)
    },
  },
};
</script>

<style lang="scss" scoped>
.createPlanHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  input {
    transition: 0.3s;
    outline: none;
    border-radius: 10px;
    width: 90%;
    border: 2px solid green;
    height: 40px;
    padding: 5px;
    font-size: large;
    &:focus {
      transition: 0.3s;
      box-shadow: 0px 0px 5px green;
      transform: scale(1.02);
    }
  }
  .dayHolder {
    border-left: 5px dotted green;
    
    width: 90%;
    padding: 10px 0px 0px 10px ;
  }
}
</style>