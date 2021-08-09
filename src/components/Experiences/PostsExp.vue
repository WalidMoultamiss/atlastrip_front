<template>
      <div class="posts">
          <PostExp :post="post" v-for="post in posts" :key="post"  />
      </div>
</template>

<script>
import PostExp from './PostExp.vue'
export default {
    name:'PostsExp',
    components:{
        PostExp,

    },
    data(){
        return{
            posts:[]
        }
    },
    methods:{
    getAll(){
        var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-type", "application/json");
myHeaders.append("authorization", `bearer ${localStorage.getItem('token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/post/posts", requestOptions)
  .then(response => response.json())
  .then(result => this.posts = result)
  .catch(error => console.log('error', error));
    }
    }
    ,beforeMount(){
        this.getAll()
    }

}
</script>


<style lang="scss" scoped>

    .posts{
        width: 100%;
        height: max-content;
        display: flex;
        gap: 33px;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>