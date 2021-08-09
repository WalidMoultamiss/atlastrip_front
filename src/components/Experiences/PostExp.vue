<template>
  <div class="postContainer" 
  >
    <div class="PostHead">
      <div
        
        class="creatorImg"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            post.user_image +
            ')',
        }"
      >
      </div>
      <div class="infoCreator">
        <h4>{{ post.first_name }}&nbsp;{{ post.last_name }}</h4>
        <p>{{ time }}</p>
      </div>
    </div>
    <div v-if="post.image != 'Array'" class="postImgs">
      <button  class="ImgLeft big" 
        @dblclick="like(post.id)"
      :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            post.image +
            ')',
        }"
      >
      <div :id="'post'+post.id" class="">
      </div>
      </button>
    </div>
    <div class="postInfo">
      <div class="postText">
        <h4>{{ post.text }}</h4>
      </div>
    </div>
    
        <divider-w-20 v-if="post.image != 'Array'" />
    <div class="postFooter">
        <divider-w-20 />
      <div class="ActionBtn" @click="like(post.id)">
        <img src="../../assets/onic-md-thumbs-up.svg" alt="like" />
        <h3> {{likes > 0 ? likes : ''}} {{likedByMe == '0' ? 'like' : 'liked'}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import DividerW20 from '../DividerW20.vue';

export default {
  name: "posts-experiences",
  components: {
    DividerW20
  },
  props: {
    post: Object,
  },
  data() {
    return {
      time:'',
      likes:this.post.likes,
      likedByMe: this.post.likedByMe
    };
  },
  methods: {

    like(id){
      let postID = 'post'+id
      
      document.getElementById(postID).setAttribute('class','heartAnimation heart')
      setTimeout(()=>{document.getElementById(postID).classList.remove('heartAnimation','heart')},1000)
      if(this.likedByMe == 0){
      var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("authorization", `bearer ${localStorage.getItem('token')}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "post_id": id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost/Atlastrip_Backend/post/addLike", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    this.likes++
    this.likedByMe++
  })
  .catch(error => console.log('error', error));
  }
    },

    time_ago(time) {

  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;

  if (seconds == 0) {
    return 'Just now'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format = time_formats[i++])
    if (seconds < format[0]) {
      if (typeof format[2] == 'string')
        return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
    }
  return time;
},

    
  },

  beforeMount() {
    let date = this.post.created_at
    this.time = this.time_ago(24*60*60*1000*date/86400);
  },
};
</script>


<style lang="scss" scoped>
.postContainer {
  width: 90%;
  height: max-content;
  background: #fff;
  filter: drop-shadow(0px 3px 30px rgba(0, 0, 0, 0.18));
  padding: 15px;
  border-radius: 25px;
  .PostHead {
    width: 100%;
    display: flex;
    gap: 12px;
    // border-bottom: 1px solid;
    padding-bottom: 15px;
    .creatorImg {
      background-position: center;
      background-size: cover;
      background-color: blueviolet;
      width: 53px;
      height: 53px;
      border-radius: 100%;
    }
    .infoCreator {
      width: max-content;
      height: max-content;
      h4 {
        text-transform: capitalize;
        text-align: left;
      }
      p {
        
        text-align: left;
      }
    }
  }
  //
  //
  //
  .postImgs {
    width: 100%;
    display: flex;
    gap: 5%;
    .ImgLeft {
      border: 0;
      outline: none;
      background-position: center !important;
      background-size: cover !important;
      width: 60%;
      height: 310px;
      border-radius: 20px;
      background: blueviolet;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
    .big{
      width: 100% !important;
      display: flex;
      align-items:center;
      justify-content: center;
      .heart{
        width: 30%;
        height: 30%;
        background-image:url('../../assets/onic-md-thumbs-up.svg') ;
        background-position: center;
        background-size: cover;
        
      }
      .heartAnimation{
        width: 30%;
        height: 30%;
        animation: likeAnimation 1s infinite alternate;
      }
      @keyframes likeAnimation {
  from {
    // transform: scale(0.8);
    opacity: 1;
    margin-left: 2px;
    margin-right: 0px;
    width: 10%;
    height: 10%;
    transform: rotate(5deg);

// width: 300%;
  }
  75% {
    // font-size: 300%;
    width: 30%;
    height: 30%;
    transform: scale(1);
    margin-left: 0px;
    opacity: 1;
    margin-right: 2px;
    transform: rotate(-16deg);
  }

  to {
    width: 0%;
    height: 0%;
    opacity: 0;
    transform: rotate(0deg);
  }
}
    }
    .ImgsRight {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .ImgTop {
          background-position: center !important;
      background-size: cover !important;
        width: 100%;
        height: 150px;
        border-radius: 14px;
        background: blueviolet;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        
      }
      .ImgBottom {
      background-position: center !important;
      background-size: cover !important;
        margin-top: 12%;
        width: 100%;
        height: 150px;
        border-radius: 14px;
        background: blueviolet;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 0px 100px inset;
        display: flex;
        align-items: center;
        justify-self: center;
        h3 {
          width: 100%;
          //   font-family: "Segoe UI";
          font-weight: 900;
          font-size: 28px;
          text-align: center;
          color: #fff;
          text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.58);
        }
        &:hover{
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 0px 100px rgb(0, 0, 0) inset;
        }
      }
    }
  }
  //
  //
  //
  .postInfo {
    padding: 10px;
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .postText {
      h2 {
        text-align: left;
      }
      h4 {
        text-align: left;
      }
    }
    .postReview {
      width: 20%;
      padding: 5px 5px;
      height: max-content;
      border-radius: 6px;
      background: #f2f2f2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        margin: 0;
        padding: 0;
      }
    }
  }
  //
  //
  //
  //
  .postFooter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ViewedBy {
      width: 60%;
      display: flex;
      align-items: center;
      margin-left: 10px;
      .ImageViewer {
        display: flex;
    justify-content: center;
    align-items: center;
    color: azure;
        background-position: center !important;
      background-size: cover !important;
        width: 34px;
        height: 34px;
        border-radius: 100%;
        margin-left: -10px;
        background: rgb(33, 221, 0);
        border: 3px solid #fff;
      }
    }
    .ActionBtn {
      padding: 10px;
      display: flex;
      gap: 10px;
      border-radius: 7px;
      background: #00b919;
      color: white;
      text-align: left;
      cursor: pointer;
      h3{
        width: max-content;
      }
    }
  }
}
</style>