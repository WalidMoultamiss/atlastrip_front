<template>
  <div class="Container">
    <h3>People you may know</h3>
    <UsersCards v-for="Person in Persons" :Profile="Person" :key="Person" />
    <button class="btn">See more</button>
    <!-- <h3>&nbsp;</h3> -->
  </div>
</template>

<script>
import UsersCards from "./UsersCards/UsersCards.vue";

export default {
  components: { UsersCards },
  data() {
    return {
      Persons: [],
    };
  },
  methods: {
    getUsers() {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-type", "application/json");
      myHeaders.append(
        "authorization",
        'bearer' +' ' + `${localStorage.getItem("token")}`
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://localhost/Atlastrip_Backend/user/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {console.log(result);
            this.Persons = result.users})
        .catch((error) => console.log("error", error));
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped>
.Container {
  z-index: 999;
  overflow-y: scroll;
  height: 400px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.455);
  position: fixed;
  top: 250px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  justify-content: flex-start;
  gap: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
  padding-bottom: 18px;
  .dividerbanner {
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.158);
  }
  .btn {
    padding: 4px 8px;
    border-radius: 15px;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      background-color: rgb(255, 255, 255);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.207);
    }
    &:active {
      transition: 0.1s;
      transform: translateY(0px);
    }
  }
}
@media (max-width: 1350px) {
  .Container {
    display: none;
  }
}
// @media (min-width: 1350px) {
//   .banners {
//     display: none;
//   }
// }
// @media (max-width: 1115px) {
//   .banners {
//     all: inherit;
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     display: flex;
//     flex-direction: column;
//     width: 200px;
//     gap: 10px;
//   }
// }
</style>