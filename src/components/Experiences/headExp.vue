<template>
  <divider-w-20 />
  <div v-if="show == 'BodyExp'" class="Intrests">
    <div class="CreatePostContaner">
      <Profile-image class="profileImg" />
      <h2>Create a plan</h2>
      <button @click="goto('/CreatePlan')" class="btn-hover btn-scale btn-pointer btn-plus "><h1>+</h1></button>
    </div>
    <divider-w-20 />
  </div>
  <div v-if="show == 'BodyPosts'" class="createPst">
    <div class="CreatePostContaner">
      <Profile-image class="profileImg" />
      <CreatePost
        class="inputPostCreate"
        @imageTrigger="imageTrigger = true"
        @text="getText"
      />
    </div>
    <divider-w-20 />
    <label
      v-if="imageTrigger"
      id="preview"
      :style="{ 'background-image': 'url(' + url + ')' }"
    >
      <h1 v-if="!url">choose an image</h1>
      <input
        style="display: none"
        id="file"
        ref="selectedImage"
        type="file"
        @change="onFileChange"
      />
    </label>
    <divider-w-20 />
    <button
      v-if="text.length > 0 || selectedImage != null"
      class="createPostbtn"
      @click="createPost"
    >
      <h3>Create post</h3>
    </button>
  </div>
</template>

<script>
import Devider from "../Devider.vue";
import DividerW20 from "../DividerW20.vue";
import Intrests from "../Intrests.vue";
import CreatePost from "../Create/CreatePost.vue";
import ProfileImage from "../ProfileImage.vue";
export default {
  components: { Devider, Intrests, DividerW20, CreatePost, ProfileImage },
  props: {
    show: String,
  },
  data() {
    return {
      url: null,
      selectedImage: null,
      text: "",
      first_name: "",
      imageTrigger: false,
    };
  },
  methods: {
    getName() {
      this.first_name = JSON.parse(localStorage.getItem("user")).first_name;
    },
    async createPost() {
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");

      //   myHeaders.append("Accept", "application/x-www-form-urlencoded");
      //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("authorization", token);

      var formdata = new FormData();
      formdata.append("image", this.selectedImage, this.selectedImage.name);
      let body = JSON.stringify({
        text: this.text,
      });
      formdata.append("json", body);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        `http://localhost/Atlastrip_Backend/post/add`,
        requestOptions
      );
      const result = await res.json();
      this.$emit("createPost");
      this.text = "";
      this.imageTrigger = false;
      this.selectedImage = null;
      this.url = null;
      // console.log(requestOptions.body);
    },
    goto(url){
      this.$router.push(url)
    },
    getText(text) {
      this.text = text;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      this.selectedImage = e.target.files[0];
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document
            .querySelector("#blah")
            .attr("src", e.target.result)
            .width(150)
            .height(200);
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  mounted() {
    this.imageTrigger = false;
  },
};
</script>


<style lang="scss" scoped>
.Intrests {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .CreatePostContaner {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.262);
    h2{
      margin: 0px;
      padding: 0px;
      width: 100%;
      text-align: left;
    }
    
    .btn-plus{
      padding: 10px;
      border-radius: 5px;
      border: 0px green solid;
      outline:none;
      color: white;
      background-color: #00b919;
      h1{
        width: 100%;
        text-align: left;
      }
    }

    .profileImg {
      min-width: 50px;
      min-height: 50px;
      border-radius: 50px;
    }
    .inputPostCreate {
      max-width: 100%;
    }
  }
}

.createPst {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .createPostbtn {
    cursor: pointer;
    width: 90%;
    height: 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: green;
    color: white;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    }
  }
  .CreatePostContaner {
    width: 90%;
    display: flex;
    justify-content: stretch;
    gap: 10px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.262);
    .profileImg {
      min-width: 50px;
      min-height: 50px;
      border-radius: 50px;
    }
    .inputPostCreate {
      max-width: 100%;
    }
  }
  #preview {
    transition: 0.3s;
    outline: none;
    border-radius: 10px;
    width: 90%;
    border: 2px solid green;
    height: 70vw;
    max-height: 300px;
    padding: 5px;
    font-size: large;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: black;
    }
    &:focus {
      transition: 0.3s;
      box-shadow: 0px 0px 5px green;
      transform: scale(1.02);
    }
  }
}
</style>