<template>
  <div>
    <h1>Edit a hike</h1>
    <form class="formHike" @submit.prevent="editHike">
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
        v-model="name"
        placeholder="hike name"
      />
      <input
        maxlength="35"
        type="text"
        v-model="geocode"
        placeholder="hike geocode same as '31.0600712,-7.923503'"
      />
      <textarea
        type="text"
        placeholder="description"
        v-model="description"
      ></textarea>
      <input maxlength="35" placeholder="water" type="text" v-model="water" />
      <input
        maxlength="35"
        type="text"
        placeholder="camping"
        v-model="camping"
      />
      <input
        maxlength="35"
        type="text"
        placeholder="prefered signal"
        v-model="signal_pref"
      />
      <input type="submit" value="sir 3allah" />
    </form>
    <Navbar Active="create" />
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
      name: "",
      description: "",
      water: "",
      geocode: "",
      camping: "",
      signal_pref: "",
    };
  },
  methods: {
    async editHike() {
      var myHeaders = new Headers();
      let token = "bearer" + " " + localStorage.getItem("token");

      //   myHeaders.append("Accept", "application/x-www-form-urlencoded");
      //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("authorization", token);

      var formdata = new FormData();
      formdata.append("image", this.selectedImage, this.selectedImage.name);
      let body = JSON.stringify({
        name: this.name,
        description: this.description,
        water: this.water,
        geocode: this.geocode.split(' ').join(''),
        camping: this.camping,
        creator_id: JSON.parse(localStorage.getItem("user")).id,
        signal_pref: this.signal_pref,
      });
      formdata.append("json", body);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        `http://localhost/Atlastrip_Backend/hike/edit/${localStorage.getItem(
          "hikeToEdit"
        )}`,
        requestOptions
      );
      const result = await res.json();
      console.log(result);
      this.$router.push("/");
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
    getHike() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `http://localhost/Atlastrip_Backend/hike/infoById/${localStorage.getItem(
          "hikeToEdit"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.url =
            "http://localhost/Atlastrip_Backend/public/storage/images/" +
            result.image;
          this.selectedImage = result.image;
          this.name = result.name;
          this.description = result.description;
          this.water = result.water;
          this.camping = result.camping;
          this.geocode = result.geocode;
          this.creator_id = JSON.parse(localStorage.getItem("user")).id;
          this.signal_pref = result.signal_pref;
        })
        .catch((error) => console.log("error", error));
    },
  },
  beforeMount() {
    this.getHike();
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
</style>