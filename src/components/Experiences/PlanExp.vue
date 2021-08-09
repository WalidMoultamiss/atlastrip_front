<template>
  <div class="planContainer"
  @click="goto"
  >
    <div class="PlanHead">
      <div
        class="creatorImg"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            plan.image +
            ')',
        }"
      ></div>
      <div class="infoCreator">
        <h4>{{ plan.first_name }}&nbsp;{{ plan.last_name }}</h4>
        <p>{{ time }}</p>
        <span style="text-transform: lowercase;">{{strOfPlaces}}</span>
      </div>
    </div>
    <div class="PlanImgs">
      <div :class="hikesLength > 1 ? 'ImgLeft':'ImgLeft big' "

      :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            firstImage +
            ')',
        }"
      ></div>
      <div v-if="hikesLength > 1" class="ImgsRight">
        <div class="ImgTop"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            topImage +
            ')',
        }"
        ></div>
        <div class="ImgBottom"
        
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            bottomImage +
            ')',
        }">
          <h3>{{hikesLength}}</h3>
        </div>
      </div>
    </div>
    <div class="PlanInfo">
      <div class="PlanText">
        <h2>{{ plan.name }}</h2>
        <div class="h4Divs" style="display:flex;" >
        <h4 v-if="days > 0" >{{ days }} day</h4>
        <h4 v-if="days > 1 && days > 0">s</h4>
        </div>
      </div>
      <div class="PlanReview">
        <img src="../../assets/awesome-star.svg" alt="star" />
        <h4>4,8</h4>
      </div>
    </div>
    <div class="PlanFooter">
      <div class="ViewedBy">
        <div v-for="img in ImagesOfHikers" :key="img" class="ImageViewer"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            img.image +
            ')',
        }"
        ></div>
        <div class="ImageViewer">+3</div>
        
        &nbsp;
        <h4>intrested</h4>
      </div>
      <div class="ActionBtn">
        <img src="../../assets/onic-md-thumbs-up.svg" alt="like" />
        <h3>Like</h3>
      </div>
    </div>
  </div>
</template>

<script>
import PlansExp from "./PlansExp.vue";
export default {
  name: "Plans-experiences",
  components: {
    PlansExp,
  },
  props: {
    plan: Object,
  },
  data() {
    return {
      creator: [],
      time: "2 days ago",
      planWithInfo:[],
      firstImage:'',
      numHikes:10,
      topImage:'',
      bottomImage:'',
      hikesLength:'',
      strOfPlaces:'',
      ImagesOfHikers:[],
      days: "",
    };
  },
  methods: {
      goto(){
      this.$router.push(`/planViewerExp/${this.plan.unique_id}`)
    },
    getProfiles() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "authorization",
        `${"bearer " + localStorage.getItem("token")}`
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://localhost/Atlastrip_Backend/user/getUsersCardProfile",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
            
            this.ImagesOfHikers = result.users
            this.ImagesOfHikers = this.ImagesOfHikers.splice(0,3)
            })
        .catch((error) => console.log("error", error));
    },
    getDaysWithHikes(plan_id) {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/plan/getDaysFromPlanWithHikes/${plan_id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
            this.planWithInfo = result
            
            let arrOfImages = []
            let arrOfPlaces = []
            this.planWithInfo.forEach(e=> e.forEach(e=> {
              arrOfImages.push(e.image)
              arrOfPlaces.push(e.name)
              }));
            this.strOfPlaces = arrOfPlaces.slice(0,2).join(' • ')  + `${ arrOfPlaces.length>2 ? " +" + `${  arrOfPlaces.length-2  +  ' more'}` : ''}` 
            let random = Math.ceil(Math.random(0,1)*arrOfImages.length-1)
            this.firstImage = arrOfImages[random];
            random = Math.ceil(Math.random(0,1)*arrOfImages.length-1)
            this.topImage = arrOfImages[random];
            random = Math.ceil(Math.random(0,1)*arrOfImages.length-1)
            this.bottomImage = arrOfImages[random];
            let lenght = arrOfImages.length-2
            this.numHikes = lenght
            console.log(arrOfPlaces);
            if(lenght<=0){
                lenght = ''
            }else{
                lenght = '+'+ lenght
            }
            this.hikesLength = lenght


            console.table(arrOfImages);

        }
        )
        .catch((error) => console.log("error", error));
    },
    getDays(plan_id) {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/plan/countDay/${plan_id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.days = result[0].days;
        })
        .catch((error) => console.log("error", error));
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
    this.getDays(this.plan.id);
    this.getDaysWithHikes(this.plan.id);
    this.getProfiles()
    let date = this.plan.created_at
    this.time = this.time_ago(24*60*60*1000*date/86400);
  },
};
</script>


<style lang="scss" scoped>
.planContainer {
  width: 90%;
  height: max-content;
  background: #fff;
  filter: drop-shadow(0px 3px 30px rgba(0, 0, 0, 0.18));
  padding: 15px;
  border-radius: 25px;
  .PlanHead {
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
  .PlanImgs {
    width: 100%;
    display: flex;
    gap: 5%;
    .ImgLeft {
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
  .PlanInfo {
    padding: 10px;
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .PlanText {
      h2 {
        text-align: left;
      }
      h4 {
        text-align: left;
      }
    }
    .PlanReview {
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
  .PlanFooter {
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
    }
  }
}
</style>