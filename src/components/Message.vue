<template>
  <div  class="messageholer">
      <div class="message">
        <h3>message</h3>
        <br>
        <h5>{{ msg }}</h5>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String,
    // toggleMsg:Boolean,
  },
  methods:{
    hideMe(){
      setTimeout(()=>{this.$emit('hide')},4000)
    }
  },
  mounted(){
    this.hideMe()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.messageholer{
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 999;
  top: 50px;
  transition: 1s;
  width: 100%;
  ---webkit-animation: messageholer 2s ease;
}

@keyframes messageholer
{
  0% {
    top: -100px;
  }
  100% {
    top: 50px;
  }
}

.message {
  width: max-content;
  height: max-content;
  background: #00000048;
  backdrop-filter: blur(5px);
  color: white;
  padding: 20px;
  min-width: 300px;
  // right: 50%;
  border-radius: 15px;
}
</style>
