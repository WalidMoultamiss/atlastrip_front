<template>
  <div class="bot" @click="botVue">
    <div class="skull">
      <div class="eyes">
        <div ref="eye"  :style="[eye ? {'height':'19px','marginTop':'20px'} : {'height':'0px','marginTop':'28.5px'}]" class="eye"></div>
        <div ref="eye" :style="[eye ? {'height':'19px','marginTop':'20px'} : {'height':'0px','marginTop':'28.5px'}]" class="eye"></div>
      </div>
      <div :class="[displayBot ? '' : 'displayNone', 'brain']">
        <h3 id="brain">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis modi id molestiae
          cupiditate dignissimos commodi perspiciatis alias totam vero laudantium qui quae, laborum consectetur, rerum
          ipsam sunt illum ducimus.</h3>
        <div :class="[displayBot ? '' : 'displayNone', 'expression']">
          <img src="../assets/Groupe18.png" alt="">
        </div>
      </div>
      <div :class="[displayBot ? '' : 'displayNone', 'actions']">
        <button class="secondary">I can't</button>
        <button class="primary">I can help</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

data(){
    return{
        displayBot:false,
        eye:true
    }
},
methods:{
    botVue(){
        this.displayBot = !this.displayBot
    },
    blinckEyes(){
        setInterval(
            setInterval(()=>{this.eye = !this.eye },
            500),2000
        )
    },
},
created(){
    this.blinckEyes()
}
}
</script>

<style scoped>

    .bot {
      transition: 2s;
      min-width: 88.34px;
      max-width: 90%;
      width: fit-content;
      min-height: 75.84px;
      height: fit-content;
      background: transparent;
      border: 8px solid #fbfbfb;
      filter: drop-shadow(0px 3px 6px rgba(0, 107, 21, 0.65));
      /* Note: currently only Safari supports backdrop-filter */
      backdrop-filter: blur(20px);
      --webkit-backdrop-filter: blur(20px);
      background-color: rgba(0, 0, 0, 0.26);
      border-radius: 35px;
      z-index: 999;
      position: fixed;
      bottom: 13%;
      right: 2%;
      display: none;

    }

    .skull {
      transition: 2s;
      width: 100%;
      height: 100%;
      /* background-color: blue; */
      position: relative;

    }

    .eyeBlink{
        height: 0px !important;
        transition: 2s;
    }

    .eyes {
      transition: 2s;
      display: flex;
      width: 100%;
      height: 25px;
      justify-content: center;
      gap: 25px;
    }

    .eye {
      transition: 2s;
      margin-top: 20px;
      width: 14px;
      height: 19px;
      background: #54fb91;
      border-radius: 100%;

    }

    #brain {
      color: white;

    }

    .brain {
      padding: 10px;
    }



    .actions {
      width: 100%;
      height: 70px;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      width: --webkit-fill-available;
      justify-content: center;
      gap: 10px;
    }

    .expression {
      width: 100%;
      overflow-x: scroll;
    }

    

    
    

    .displayNone {
      transition: 2s;
      /* transform: scale(0);
      width: 0px;
      height: 0px; */
      display: none;
    }


    @media only screen and (min-width: 900px) {
      .bot {
        max-width: 338px;
      }
      .expression::-webkit-scrollbar {
      width: 10px;
    }

    .expression::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background-color: #737272;
      
      /* border: 1px solid #000; */
    }

    .expression::-webkit-scrollbar-track {
      /* border: 1px solid #000; */
      padding: 2px 0;
      border-radius: 25px;
      background-color: #404040;
    }
    }

    .primary {
      /* width: max-content; */
      height: 39px;
      border-radius: 19.5px;
      background: #25ce4e;
      color: white;
      width: --webkit-fill-available;
      outline: none;
      border: none;
    }

    .secondary {
      color: white;
      /* width: max-content; */
      height: 39px;
      background: transparent;
      width: --webkit-fill-available;
      border-radius: 19.5px;
      border: 3px solid #25ce4e;

    }
  </style>