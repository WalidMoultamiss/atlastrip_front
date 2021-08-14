<template>
  <div class="setting">
    <h1>settings</h1>
    <h2>log out {{name}} 💔?</h2>
    <button @click="logout" >log out</button>

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
      name:'',
      beforeCreate(){
    if(localStorage.getItem('user') == null || localStorage.getItem('token') == null ){
      this.isLogged = false
    }else{
      this.isLogged = true
    }
  },
    }
  },
  methods:{
    beforeCreate(){
    if(localStorage.getItem('user') == null || localStorage.getItem('token') == null ){
      this.isLogged = false
    }else{
      this.isLogged = true
    }
  },
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
<style lang="scss" scoped>
.setting{
  width: 100%;
  height: 100vh;
  background: rgb(0,255,17);
  padding-top: 100px;
  background: linear-gradient(to bottom, #3c9500, #005101);
  h1{
    font-size: 52px;
    margin-top: 100px;
    color:white;
  }
  h2{
    color:white;
    margin-top: 100px;
  }
  
  button {
    margin-top: 40px;
      width: 100%;
      outline: none;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 14px;
      // padding-left: 40px;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      background: rgba(255, 255, 255, 0.324);
      max-width: 100px;
      box-shadow: none;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 1.5s;
    }

    .btn:hover {
      background: linear-gradient(
        115deg,
        rgba(0, 0, 0, 0.1),
        rgba(255, 255, 255, 0.25)
      );
      color: #fff;
      transition: 0.5s;
    }
}
</style>