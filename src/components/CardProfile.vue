<template>
  <div class="cardContainer">
    <div class="remove">×</div>
    <br />
    <div class="imageHolder">
      <div
        :class="[card ? 'imagePers sml': 'imagePers']"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            Profile.image +
            ')',
        }"
      ></div>
    </div>
    <br />
    <h3>{{ Profile.first_name }}&nbsp;{{ Profile.last_name }}</h3>
    <br />
    <button><h3>Follow</h3></button>
  </div>
</template>

<script>
export default {
  props: {
    Profile: Object,
    card:Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cardContainer {
  text-align: center;
  width: 60vw;
  height: max-content;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 15px;
  margin: 5px 0px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.248);
  position: relative;
  .remove {
    text-align: center;
    font-size: xx-large;
    top: 6px;
    right: 12px;
    position: absolute;
  }
  .imageHolder {
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    height: max-content;
    .imagePers {
      text-align: center;
      background-position: center;
      background-size: cover;
      width: 200px;
      padding: 0px 10px;
      border-radius: 100%;
      height: 200px;
    }
    .sml{
      max-width: 140px;
      max-height: 140px;
    }
  }
  h3 {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 17ch;
  }
  button {
    display: flex;
    justify-content: center;
    padding: 7px;
    width: 100%;
    background: rgb(0, 109, 16);
    color: white;
    border: 0px;
    border-radius: 5px;
    h3 {
      text-align: center;
    }
  }
}
</style>