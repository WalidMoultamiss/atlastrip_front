<template>
  <div class="cardContainer" :id="'profile'+Profile.userID">
    <div @click="remove(Profile.userID)" class="remove">×</div>
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
      >
      <h6 v-if="newUser" class="newUser">NEW</h6>
      </div>
    </div>
    <br />
    <h3>{{ Profile.first_name }}&nbsp;{{ Profile.last_name }}</h3>
    <br />
    <button :class="[following == 0 ? 'btn btn-hover-pointer' : 'btn followed btn-hover-pointer']" @click="[ following == 0 ? follow(Profile.userID) : unfollow(Profile.userID) ]" ><h3>{{following == 0 ? 'follow' : 'following' }}</h3></button>
  </div>
</template>

<script>
export default {
  props: {
    Profile: Object,
    card:Boolean,
    followed:String,
  },
  data() {
    return {
      following:0,
      newUser:false,
      scrolled:1
    };
  },
  methods:{
    remove(id){
      document.getElementById(`${'profile'+id}`).classList.add("deleted")
      setTimeout(()=>{document.getElementById(`${'profile'+id}`).remove()},500)
    },
    follow(id){
      var myHeaders = new Headers();
let token = "bearer" + " " + localStorage.getItem("token");
myHeaders.append("authorization", token);
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "follow": id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/user/followUser", requestOptions)
  .then(response => response.json())
  .then(result => {
    
    if(result.error == 'false'){
      this.following = 1
      document.querySelector('.wrapperExpert').scrollBy(this.scrolled * 210,0)
      this.scrolled++
  }else{
    console.log(result);
  }
  })
  .catch(error => console.log('error', error));
    },
    unfollow(id){
      var myHeaders = new Headers();
let token = "bearer" + " " + localStorage.getItem("token");
myHeaders.append("authorization", token);
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "follow": id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/user/unFollowUser", requestOptions)
  .then(response => response.json())
  .then(result => {
    
    if(result.error == 'false'){
    this.following = 0
    document.querySelector('.wrapperExpert').scrollBy(this.scrolled * 210,0)
    this.scrolled++
  }else{
    console.log(result);
  }
  })
  .catch(error => console.log('error', error));
    }
  },
  mounted(){
    this.following = this.Profile.following
    let created_at = +this.Profile.created_at
    let current_time = (new Date().getTime() / 1000)
    if(((current_time - created_at )/60/60/24) < 2){
      this.newUser = true
    }else{
      this.newUser = false
    }
  }
  
};
</script>

<style lang="scss" scoped>
.deleted{
  animation-duration: 1s;
  animation: 0.5s slidein ease-in-out alternate;
}
@keyframes slidein {
  from {
    // transform: scale(0.8);
    transform: scale(1);
    opacity: 1;

// width: 300%;
  }
  75% {
    margin-left: -210px;
  opacity: 0;
  transform: scale(0.3);
  width: 40px;
  }

  to {
    margin-left: -210px;
    width: 0px;
    opacity: 0;
    transform: scale(0);
    display: none;
  }
}
.cardContainer {
  min-width: 210px;
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
      display: flex;
      // padding-bottom: 10px;
      justify-content: center;
      align-items: flex-end;
      .newUser{
        transform: translateY(10px);
        border-radius: 5px;
        padding: 3px 6px;
        border: 3px solid white;
        color: white;
        background-color: rgb(129, 194, 0);
          font-weight: 200;
      }
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
  .btn {
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
  .followed {
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 100%;
    background: white;
    border: 2px solid rgb(0, 109, 16);
    color: rgb(0, 109, 16);
    border-radius: 5px;
    h3 {
      text-align: center;
    }
  }
}
</style>