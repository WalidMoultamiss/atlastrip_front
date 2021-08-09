<template>
  <div
    class="rectHike"
    :style="{
      backgroundImage:
        'url(' +
        'http://localhost/Atlastrip_Backend/public/storage/images/' +
        image +
        ')',
    }"
  ></div>
</template>

<script>
export default {
  props: {
    image: String,
  },
};
</script>

<style scoped>
.rectHike {
    background-position: center;
    background-size: cover;
  width: 32vw;
  height: 32vw;
}
</style>

