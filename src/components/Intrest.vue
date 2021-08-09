<template>
  <div class="interstContainer">
    <div
      :class="[text ? ' intrestHolder' : 'dimmImage intrestHolder']"
      :style="{
        backgroundImage:
          'url(' +
          'http://localhost/Atlastrip_Backend/public/storage/images/' +
          intrest.image +
          ')',
          minHeight:h,
      }"
    >
    <h3 v-if="!text" style="color:white;" >{{intrest.name}}</h3>
    </div>
    <h4 v-if="text">&nbsp;</h4>
    <h3 v-if="text" >{{intrest.name}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    intrest: Object,
    text:Boolean,
    h:String,
  },
};
</script>

<style lang="scss" scoped>
.interstContainer {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    justify-content: center;
    flex-direction: column;
  .intrestHolder {
    width: 100px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 8px 13px rgba(12, 82, 0, 0.2);
    display: flex;
    justify-content: center;
    text-align: center;
    align-content: center;
    align-items: center;
  }
  .dimmImage{
    box-shadow: rgb(0 0 0 / 24%) 0px 4px 10px,inset rgb(0 0 0 / 24%) 0px 73px 22.84px;
  }
  h3{
      text-transform: capitalize;
  }
}
</style>