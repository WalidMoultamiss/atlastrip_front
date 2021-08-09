<template>
  <div class="cardContainer">
    <div
      class="imagePers"
      :style="{
        backgroundImage:
          'url(' +
          'http://localhost/Atlastrip_Backend/public/storage/images/' +
          Profile.image +
          ')',
      }"
    >
    
    </div>

    <div class="texts">
      <h3>{{ Profile.first_name }}&nbsp;{{ Profile.last_name }}</h3>
      <p>{{Profile.quote}}</p>
    <div class="btns">
    <button class="btn green">Follow</button>
    <button class="btn">Open</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    Profile: Object,
    card: Boolean,
  },
  data() {
    return {
    };
  },
  
};
</script>

<style lang="scss" scoped>
.cardContainer {
  text-align: left;
  max-width: 98%;
  display: flex;
  gap: 25px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.283);
  transform: translateY(-3px);
  margin-bottom: 10px;
  &:hover{
    transform: translateY(0px);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.283);
  }
    .btns{
      min-width: 260px;
        transform: translateY(20px);
        display: flex;
        gap: 20px;
        .btn{
      padding: 6px 4px;
      border-radius: 15px;
      outline: none;
      background-color: rgb(246, 255, 246);
      border: none;
      cursor: pointer;
      color: black;
      &:hover{
          transform: translateY(-3px);
          color: black;
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
      }
      &:active{
          transition: 0.1s;
          transform: translateY(0px);
      }
      
  }
  .green{
      background-color: rgb(0, 133, 2);
      color: white;
  }
    }
  .remove {
    text-align: center;
    font-size: xx-large;
    top: 6px;
    right: 12px;
    position: absolute;
  }
  
    .imagePers {
      text-align: center;
      background-position: center;
      background-size: cover;
      width: 90px;
      height: 90px;
      border-radius: 15px;
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