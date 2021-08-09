<template>
  <div class="banners">
    <h3>Sponsorised</h3>
    <Banner />
    <!-- <div class="dividerbanner"></div>
    <banner /> -->
    <button class="removeAds">Remove Ads</button>
    <!-- <h3>&nbsp;</h3> -->

  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: { Banner },
};
</script>

<style lang="scss" scoped>
.banners {
  z-index: 999;
    background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.455);
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  justify-content: space-around;
  gap: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
  padding-bottom: 18px;
  .dividerbanner {
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.158);
  }
  .removeAds{
      padding: 4px 8px;
      border-radius: 15px;
      outline: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:hover{
          transform: translateY(-3px);
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
      }
      &:active{
          transition: 0.1s;
          transform: translateY(0px);
      }
      
  }
}
// @media (max-width: 958px) {
//   .banners {
//     all: inherit;
//     display: none;
//   }
// }

@media (max-width: 1350px) {
  .banners {
    display: none;
  }
}

// @media (max-width: 1115px) {
//   .banners {
//     all: inherit;
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     display: flex;
//     flex-direction: column;
//     width: 200px;
//     gap: 10px;
//   }
// }
</style>