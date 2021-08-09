<template>
  <div>
    <div v-for="plan in plans" :key="plan">
      <Plan :plan="plan" />
    </div>
  </div>
</template>
<script>
import Plan from "./Plan.vue";
export default {
  components: { Plan },

  data() {
    return {
      plans: [],
    };
  },
  methods: {
    getPlans() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://localhost/Atlastrip_Backend/plan/plans", requestOptions)
        .then((response) => response.json())
        .then((result) => (this.plans = result))
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getPlans();
  },
};
</script>