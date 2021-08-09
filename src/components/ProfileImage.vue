<template>
<div class="rightMenu" @click="gotoProfile" :style="{ 'background-image': 'url('+ 'http://localhost/Atlastrip_Backend/public/storage/images/' +  url + ')' }" >
</div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  methods:{
      getImgProfile(){
        this.url =   JSON.parse(localStorage.getItem('user')).image
      },
      gotoProfile(){
      this.$router.push('/ProfileViewer')
    },
  },
  beforeMount(){
      this.getImgProfile()
  },
};
</script>

<style lang="scss" scoped>

.rightMenu{
    cursor: pointer;
    background-size: cover;
    background-position: center;
    
}

</style>