<template>
    <div class="devider" :style="{'height': Height}"></div>
</template>
<script>
export default {
  props:{
    Height:{
      type:String,
      default:'154px',
    }
  }
}
</script>

<style scoped>
/* .devider {
  height: 154px;
} */
</style>