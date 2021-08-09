<template>
  <div class="navbar">
      <div class="navLeft">
          <div class="logo"></div>
          <div class="search"></div>
      </div>
      <div class="navMdl">
          <div class="menu"></div>
      </div>
      <div class="navRight">
          <div class="notification"></div>
          <profile-image/>
      </div>
  </div>
</template>

<script>
import ProfileImage from './ProfileImage.vue'
export default {
  components: { ProfileImage },

}
</script>

<style lang="scss" scoped>
    .navbar{
        width: 100vw;
        height: 56px;
        color: rgb(238, 238, 238);
        display: flex;
        .navLeft{
            .logo{

            }
            .search{
                
            }
        }
    }
</style>