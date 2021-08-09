<template>
  <div class="BodyPosts">
          <PostsExp/>
          <devider/>
  </div>
</template>

<script>
import Devider from '../Devider.vue'
import PostsExp from './PostsExp.vue'
export default {
    name:'BodyPosts',
    components:{
        PostsExp,
        Devider,

    },
    data(){
        return{
        }
    }

}
</script>


<style lang="scss" scoped>

    .BodyPosts{
        width: 100%;
        height: max-content;
    }

</style>