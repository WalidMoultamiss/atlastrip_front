<template>
  <div>
    <h2>settings</h2>
    <button @click="logout" >log out a bba {{name}} 💔?</button>

    <Navbar Active="settings" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data(){
    return{
      name:''
    }
  },
  methods:{
    getUserName(){
      this.name  = JSON.parse(localStorage.getItem('user')).first_name
    },
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    },
    
  },
  beforeMount(){
    this.getUserName()
  },
};

</script>