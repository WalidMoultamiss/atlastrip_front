<template>
  <div class="createPostHolder">
    <input @keyup="emitText" class="inputCreate" type="text" placeholder="Share your memories" v-model="text" />
    <button class="btn-Img" @click="$emit('imageTrigger')" ></button>
    <button class="btn-Text"></button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text:''
    }
  },methods:{
    emitText(){
      this.$emit('text',this.text)
    }
  }
};
</script>

<style lang="scss" scoped>
.createPostHolder {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .inputCreate {
    width: 90%;
    padding: 15px 10px;
    backdrop-filter: blur(20px);
    --webkit-backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.26);
    border-radius: 40px;
    outline: none;
    color: white;
    border: 1px solid olivedrab;
    &::-webkit-input-placeholder{
      color: white;
      
    }
    font-size: 16px;
    &:focus{
      // transform: translateY(-5px);
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.469);
      background-color: rgb(255, 255, 255);
      color: black;
      font-size: 16px;
      padding-left: 20px;

    }
    &:focus ~.btn-Img{
      transform: translateX(45px);
      // opacity: 0;
    }
    &:focus ~.btn-Text{
      // transform: translateY(-5px);
      opacity: 0;
      
    }
  }
  .btn-Img {
    cursor: pointer;
    top: 7px;
    right: 76px;
    position: absolute;
    width: 35px;
    height: 35px;
    background-image: url("../../assets/imageClick.svg");
    background-size: cover;
    background-position: center;
    border: none;
    border-radius: 50px;
  }
  .btn-Text {
    cursor: pointer;
    top: 7px;
    right: 32px;
    border-radius: 50px;
    border: none;
    position: absolute;
    width: 35px;
    height: 35px;
    background-image: url("../../assets/textClick.svg");
    background-size: cover;
    background-position: center;
  }
}
</style>