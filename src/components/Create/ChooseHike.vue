<template>
  <div
    :class="[close ?  'chooseHike chooseHikeNoShadow' : 'chooseHike']"
  >
    <div v-if="close" class="imageHikeHolderRounded">
      <div class="triangle"></div>
      <div class="imageHikeRounded">
        <div class="imageHikeContaner"
        :style="{
      backgroundImage:
        'url(' +
        'http://localhost/Atlastrip_Backend/public/storage/images/' +
        ChoosenImage +
        ')',
    }"
        >

        </div>
      </div>
        <h2 style="margin-left:10px; ">{{choosenHike}}</h2>
    </div>
    <h3 v-if="!close">choose a hike</h3>

    <input
      @keyup="filter(search)"
      v-model="search"
      v-if="!close"
      type="text"
      placeholder="filter by name"
    />
    
    <span v-if="!close">🔍</span>

    <Divider-w-20 v-if="!close"  />
    <div v-if="!close" class="allHikes">
      <label
        v-for="hike in hikesAll"
        :key="hike"
        class="imgHike"
        :id="hike.id"
        @click="labelHasBeenClicked(hike)"
        :style="{
          backgroundImage:
            'url(' +
            'http://localhost/Atlastrip_Backend/public/storage/images/' +
            hike.image +
            ')',
        }"
      >
        <input
          hidden
          type="radio"
          class="inp"
          :value="hike.image"
          v-model="checkedd"
          :id="hike.id"
        />

        <h5 style="color: white">
          {{ hike.name }}
        </h5>
        <div class="whiteBoard">
          <div class="select">select</div>
        </div>
      </label>
    </div>
    <div class="chooseHikefooter">
      
    <button
      v-if="!close && checkedd !== ''"
      @click="addHike"
      class="btnAddHike">
      + add hike
    </button>
    </div>
  </div>
</template>

<script>
import DividerW20 from "../DividerW20.vue";
export default {
  components: { DividerW20 },
  props: {
    hikesAll: Array,
  },
  data() {
    return {
      close: false,
      checkedd: "",
      choosenHike:"",
      ChoosenImage: "",
      choosenHikeId:"",
    };
  },

  methods: {
    
    labelHasBeenClicked(hike) {
      document.querySelectorAll(".imgHike").forEach((e) => {
        if (e.id == hike.id) {
          e.classList.add("sml");
          e.children[2].children[0].classList.add("selected");
          this.choosenHike = hike.name
          this.choosenHikeId = hike.id
        } else {
          e.classList.remove("sml");
          e.children[2].children[0].classList.remove("selected");
        }
      });
    },
    filter(search) {
      let arr = document.querySelectorAll(".imgHike h5");
      arr.forEach((e) => {
        let searchValue = search.toLocaleLowerCase();
        let eText = e.innerText.toLocaleLowerCase();

        if (!eText.includes(searchValue) && searchValue != "") {
          e.parentElement.style.display = "none";
        } else {
          e.parentElement.style.display = "flex";
        }
      });
    },

    addHike() {

      this.ChoosenImage = this.checkedd;
      this.close = true;
      this.$emit("addHike",this.choosenHikeId);
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
.chooseHike {
  box-shadow: 0px 2vw 8px rgba(0, 0, 0, 0.234);
  background-position: center;
  background-size: cover;
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: 5px solid green;
  width: 100%;
  padding: 10px 0px 10px 10px;
  margin: 0px 0px;
  .imageHikeHolderRounded{
    transform: translateX(-22px);
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;

    .triangle{
      width: 0px;
      border: 10px solid rgba(0, 0, 0, 0);
      border-right: 10px solid rgb(0, 0, 0);
    }
    .imageHikeRounded{
      width: max-content;
      height: max-content;
      padding: 6px;
      border-radius: 5px;
      background-color: black;
      .imageHikeContaner{
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: white;
        background-position: center;
  background-size: cover;

      }
    }
  }

  h3 {
    text-align: left;
    margin-bottom: 15px;
  }
  input {
    width: 85%;
    border: 1px solid black;
    border-radius: 15px;
    height: 30px;
    padding: 5px 10px;
    span {
      width: 10%;
    }
  }
  .allHikes {
    display: flex;
    justify-content: left;
    gap: 15px;
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 10px;
    .imgHike {
      margin-bottom: 10px;
      transition: 0.5s;
      padding-top: 10px;
      background-position: center;
      background-size: cover;
      border: 1px solid black;
      border-radius: 15px;
      min-width: 29vw;
      height: 37vw;
      box-shadow: inset 0px 10vw 20px rgba(0, 0, 0, 0.434),
        0px 1vw 10px rgba(0, 0, 0, 0.434);
      display: flex;
      justify-content: center;
      align-content: space-between;
      flex-wrap: wrap;
      .whiteBoard {
        transition: 0.5s;
        border-radius: 0px 0px 15px 15px;
        width: 100%;
        height: 30%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        .select {
          transition: 0.5s;
          border: 2px solid green;
          border-radius: 10px;
          color: green;
          background: transparent;
          padding: 2px 10px;
        }
        .selected {
          transition: 0.5s;
          color: white;
          background: green;
        }
      }
    }
    .sml {
      box-shadow: inset 0px 10vw 20px rgba(0, 0, 0, 0.434),
        0px 0vw 8px rgba(0, 0, 0, 0.434);
      transition: 0.2s;
      transform: scale(0.95);
    }
  }
  .chooseHikefooter {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
  }
}
.chooseHikeNoShadow{
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 2vw 8px rgba(0, 0, 0, 0);
}
.btnAddHike {
      margin-right: 10px;
      padding: 5px 13px;
      border-radius: 13px;
      background-color: #90d309;
      color: white;
      outline: none;
      border: 1px solid #90d309;
    }
</style>