<template>
  <div>
    <div id="nav" style="display: none">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/about">About</router-link>
      
    </div>
  </div>
  <router-view  />
</template>

<script>
export default {

}
</script>


<style lang="scss">
#app {
  background: #fafafa;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  --webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .btn-hover-pointer{
    &:hover{
      transform: scale(1.1);
    cursor: pointer;
    }
  }
  .btn-pointer{
    &:hover{
    cursor: pointer;
    }
  }
  .btn-bg{
    &:hover{
    background-color: rgb(230, 255, 230);
    }
  }
  
  .btn-scale{
    &:hover{
    transform: scale(1.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.241);
    }
  }

  

  .btn-primary-hover {
    transition: 0.3s;
    outline: none;
    border-radius: 10px;
    width: 80%;
    border: 2px solid green;
    height: 40px;
    padding: 5px;
    font-size: large;
    background-color: white;
    color: green;
    &:focus {
      transition: 0.3s;
      box-shadow: 0px 0px 5px green;
      transform: scale(1.02);
    }
    &:hover{
      background-color: green;
      color: white;
    cursor: pointer;
    transform: scale(1.1);
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
