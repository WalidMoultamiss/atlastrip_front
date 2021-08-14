<template>
  
      <iframe id="iframeId" class="banner"  width="100%" allowfullscreen autoplay
src="https://www.youtube.com/embed/_xHpgtDnco4?rel=0&amp;autoplay=1&mute=1&controls">
      <a  href='https://www.nike.com/joyride' class="actionBtn">
          <h3>learn more</h3>
      </a>
</iframe>

  
</template>

<script>
export default {
methods:{
   
},

}
</script>

<style lang="scss" scoped>

.banner{

    width: 90%;
    height: 130px;
    border-radius: 10px;
    box-shadow: 0px 5px 8px  rgba(0, 0, 0, 0.483);
    // background-image: url('../../assets/nike-joyride-run-flyknit-design_dezeen_2364_hero-1.gif') ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    .actionBtn{
        text-decoration: initial;
        cursor: pointer;
        width: max-content;
        height: max-content;
        padding: 5px 25px;
        color: white;
        background-color: rgba(0, 0, 0, 0.365);
        border-radius: 15px;
        filter: blur(4);
        &:hover{
            background-color: rgb(0, 0, 0);
        }
    }
}
@media (max-width: 500px) {
  .banner {
    height: 230px;
  }
}

</style>