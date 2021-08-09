<template>
    <div class="feed">
    <TopNavbar class="TopNav"/>
    <FeedBody class="Feedbody"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    </div>
</template>
<script>
import TopNavbar from '../components/TopNavbar.vue'
import FeedBody from '../components/FeedBody.vue'
export default {
  name: 'Feed',
  components: {
    // Navbar,
    TopNavbar,
    FeedBody
  }
}
</script>
<style lang="scss" scoped>
.feed{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

.TopNav{
  width: 100%;
}
.Feedbody{
    max-width: 500px;
}
@media (max-width: 1350px) {
  .Feedbody {
    width: 100vw;
  }
}

}

</style>