<template>
  <div class="interstContainer" @click="disableIntrest" >
    <div
      :class="[intrest.check ? 'dimming scaleIt intrestHolder' : 'intrestHolder'  ]"
      :style="{
        backgroundImage:
          'url(' +
          'http://localhost/Atlastrip_Backend/public/storage/images/' +
          intrest.image +
          ')',
      }"
    ></div>
    <h4>&nbsp;</h4>
    <input hidden type="checkbox" v-model="intrest.check" name="" id="">
    <h3>{{intrest.name}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    intrest: Object,
  },
  data(){
    return{
      dimming:true,
    }
  },
  methods:{
    disableIntrest(){
      this.intrest.check = !this.intrest.check
      this.$emit('clicked')
    },
  }
};
</script>

<style lang="scss" scoped>
.interstContainer {
  transition: 1s;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    justify-content: center;
    flex-direction: column;
  .intrestHolder {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 8px 13px rgba(12, 82, 0, 0.2);

  }
  h3{
      text-transform: capitalize;
  }
}
.dimming{
  opacity: 0.5;
  animation-duration: 0.05s;
  --webkit-animation: slidein 0.05s infinite alternate;
  -moz-animation: slidein 0.05s infinite alternate;
  animation-name: slidein 0.05s infinite alternate ;
}
// .scaleIt{
//   transform: scale(0.8);
// }


@keyframes slidein {
  from {
    // transform: scale(0.8);
    margin-left: 2px;
    margin-right: 0px;
     
    transform: rotate(1deg);

// width: 300%;
  }
  // 75% {
  //   // font-size: 300%;
  //   margin-left: 25%;
  //   width: 150%;
  // }

  to {
    
    margin-left: 0px;
    margin-right: 2px;
    
    transform: rotate(-1deg);
    // width: 100%;
  }
}
</style>