<template>
  <div class="ProfileHolder">
    <div class="imageCover">
      <h1>{{ user.quote }}</h1>
    </div>
    <div class="postFolHolder">
      <div
        class="imageProfile"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            user.image +
            ')',
        }"
      >
        <div class="proTag"><strong>Pro</strong></div>
      </div>
      <div class="postFolContainer">
        <div class="unitHolder">
          <div class="unitNum"><h4>23</h4></div>
          <div class="unitTitle">Post</div>
        </div>
        <div class="unitHolder">
          <div class="unitNum"><h4>755</h4></div>
          <div class="unitTitle">Followers</div>
        </div>
        <div class="unitHolder">
          <div class="unitNum"><h4>1899</h4></div>
          <div class="unitTitle">Following</div>
        </div>
      </div>
    </div>
    <!-- <DividerW20 /> -->
    <div class="intrestsheader">
      <h2> {{!editIntrest?'Edit m':'M'}}y intrests</h2>
    <h4 v-if="editIntrest" @click="editIsClicked" class="edit">edit</h4>
      <h4 v-if="!editIntrest" @click="editIsClicked" class="cancel">cancel</h4>
    </div>
    <Intrests h="100px" :text="true" v-if="editIntrest" />
    <EditIntrests style="width:100%;" @showIntrests="editFinished" v-if="!editIntrest" />
    
    <!-- <DividerW20 /> -->
    <!-- <div class="intrestsheader">
      <h2>My favorite hikes</h2>
    </div> -->
    <!-- <DividerW20 />
      <RectHike v-for="hike in hikes" :key="hike" :image="hike.image" @click="gotoHike(hike.id)" />
    </div> -->
    
    
    
  </div>
</template>

<script>

import EditIntrests from "../EditIntrests.vue";
import DividerW20 from '../DividerW20.vue';
import Intrests from '../Intrests.vue';

export default {
  components: {
    EditIntrests,
    Intrests,
    DividerW20,
  },
  data() {
    return {
      user: [],
      hikes:[],
      editIntrest:true,
      toggleMsg:false,
      msg:''
    };
  },
  methods: {
    hideMe(){
      this.toggleMsg = false
    },
    editIsClicked(){
      this.editIntrest = !this.editIntrest
    },
    editFinished(){
      this.msg='intrests has been updated'
      this.toggleMsg=true
      this.editIntrest = !this.editIntrest
    },
    
    gotoEdit() {
      this.$router.push("/EditProfile");
    },
    gotoHike(id) {
      localStorage.setItem('hikeId',id)
      this.$router.push("/HikeViewer");
    },
    getUser() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append(
        "Authorization",
        `bearer ${localStorage.getItem("token")}`
      );
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://localhost/Atlastrip_Backend/user/getMyInfo", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.user = result.user;
        })
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.ProfileHolder{
    z-index: 999;
    background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.455);
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  justify-content: space-around;
  gap: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
  padding-bottom: 18px;
.topNavbar {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  color: white;
  background: #325d0d;

  button {
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    color: #325d0d;
    background: #f3faed;
    border: none;
    outline: none;
  }
  .avatar {
    transform: rotate(127deg);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(164 219 113);
    height: 34px;
    width: 34px;
    border-radius: 200px;
    svg {
      width: 70%;
      height: 70%;
    }
  }
}
.devider {
  height: 54px;
}
.imageCover {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 30vh;
  max-height: 30vh;
  //   background-color: antiquewhite;
  background-image: url("../../assets/DD-Forest-Background-60012-Preview.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}
.postFolHolder {
  .imageProfile {
    background-position: center;
    background-size: cover;
    position: relative;
    transform: translateY(-77px);
    min-width: 120px;
    min-height:120px;
    background-color: aqua;
    border-radius: 200px;
    border: 10px solid white;

    .proTag {
      position: absolute;
      top: 67px;
      left: 70px;
      width: 40px;
      display: flex;
      justify-content: center;
      height: 18px;
      border-radius: 15px;
      background-color: gold;
    }
  }
  width: 100%;
  // height: max-content;
  display: flex;
  justify-content: flex-end;
  height: calc(70px);
  .postFolContainer {
    width: 57vw;
    
    display: flex;
    justify-content: stretch;
    .unitHolder {
      min-width: 33%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      align-content: stretch;
      
    }
  }
}
.intrestsheader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  .edit {
      cursor: pointer;
    padding: 5px 13px;
    border-radius: 13px;
    background-color: #90d309;
    color: white;
  }
  .cancel {
      cursor: pointer;
    padding: 3px 11px;
    border-radius: 11px;
    border: 2px solid #90d309;
    color: #3e5c02;
  }
}
  
.rectHikes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap:0.5vw ;
  row-gap:1vw ;
  
}
}
@media (max-width: 1350px) {
  .ProfileHolder {
    display: none;
  }
}
</style>