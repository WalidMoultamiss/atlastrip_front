<template>
  <div>
    <h1>Edit my profile</h1>
    <form class="formHike" @submit.prevent="editUser">
      <label id="preview" :style="{ 'background-image': 'url(' + url + ')' }">
        <h1 v-if="!url">choose an image</h1>
        <input
          style="display: none"
          id="file"
          ref="selectedImage"
          type="file"
          @change="onFileChange"
        />
      </label>
      <input
        maxlength="35"
        type="text"
        v-model="first_name"
        placeholder="first name"
      />
      <input
        maxlength="35"
        type="text"
        v-model="last_name"
        placeholder="last name"
      />
      <textarea
        type="text"
        placeholder="write your favorite quote"
        v-model="quote"
      ></textarea>
      <input maxlength="12" placeholder="phone" type="number" v-model="phone" />
      <input
        maxlength="12"
        min="0"
        type="number"
        placeholder="trusted number of the person number 1"
        v-model="t_num_1"
      />
      <input
        maxlength="12"
        type="number"
        placeholder="trusted number of the person number 2"
        v-model="t_num_2"
      />
      <input
        maxlength="12"
        type="number"
        placeholder="trusted number of the person number 3"
        v-model="t_num_3"
      />
      <input type="submit" value="sir 3allah" />
    </form>
    <div class="devider"></div>
    <Navbar Active="home" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      url: null,
      selectedImage: null,
      first_name: "",
      last_name: "",
      quote: "",
      phone: "",
      t_num_1: "",
      t_num_2: "",
      t_num_3: "",
    };
  },
  methods: {
    async editUser() {
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");
      myHeaders.append("authorization", token);

      var formdata = new FormData();
      formdata.append("image", this.selectedImage, this.selectedImage.name);
      let body = JSON.stringify({
        first_name: this.first_name,
        last_name: this.last_name,
        quote: this.quote,
        phone: this.phone,
        t_num_1: this.t_num_1,
        t_num_3: this.t_num_3,
        t_num_2: this.t_num_2,
      });
      formdata.append("json", body);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        `http://localhost/Atlastrip_Backend/user/edit
        `,
        requestOptions
      );
      const result = await res.json();
      console.log(result);
      this.$router.push("/ProfileViewer");
      // console.log(requestOptions.body);
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
    getUser() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      let token = "bearer" + " " + localStorage.getItem("token");
      myHeaders.append("authorization", token);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/user/getMyInfo`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
          this.url =
            "http://localhost/Atlastrip_Backend/public/storage/images/" +
            result.user.image;
          this.selectedImage = result.user.image;
          this.first_name = result.user.first_name;
          this.last_name = result.user.last_name;
          this.quote = result.user.quote;
          this.phone = result.user.phone;
          this.t_num_1 = result.user.t_num_1;
          this.t_num_3 = result.user.t_num_3;
          this.t_num_2 = result.user.t_num_2;
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
.formHike {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  #preview {
    transition: 0.3s;
    outline: none;
    border-radius: 10px;
    width: 90%;
    border: 2px solid green;
    height: 70vw;
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
  input {
    transition: 0.3s;
    outline: none;
    border-radius: 10px;
    width: 90%;
    border: 2px solid green;
    height: 40px;
    padding: 5px;
    font-size: large;
    &:focus {
      transition: 0.3s;
      box-shadow: 0px 0px 5px green;
      transform: scale(1.02);
    }
  }
  textarea {
    padding: 5px;
    outline: none;
    border-radius: 10px;
    max-width: 90%;
    width: 90%;
    min-height: 110px;
    font-size: large;
    border: 2px solid green;
    height: 40px;
    transition: 0.3s;
    &:focus {
      transition: 0.3s;
      box-shadow: 0px 0px 5px green;
      transform: scale(1.02);
    }
  }
  .image {
    height: 70vw;
  }
}
.devider {
  height: 154px;
}
</style>