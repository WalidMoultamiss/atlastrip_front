<template>
  <div class="feedExp">
      <HeadExp @createPost="reloadMe" :show="show" />
      <div class="navigation">
          <div class="plans active" @click="goto('BodyExp')" >
          </div>
          <div class="feed" @click="goto('BodyPosts')"  >
          </div>
      </div>
      <divider-w-20/>
      <BodyExp v-if="show  == 'BodyExp'"/>
      <BodyPosts :key="reload" v-if="show  == 'BodyPosts'" />
      
  </div>
</template>

<script>
import DividerW20 from '../DividerW20.vue'
import BodyExp from './BodyExp.vue'
import BodyPosts from './BodyPosts.vue'

import HeadExp from './headExp.vue'
export default {
    name:'head-experiences',
    components:{
        HeadExp,
        BodyExp,
        BodyPosts,
        DividerW20
    },
    data(){
        return{
            show:'BodyExp',
            reload:0
        }
    },
    methods:{
        reloadMe(){
            this.reload++
        },
        goto(component){
            this.show = component
            if(component == 'BodyExp'){
                document.querySelector('.plans').classList.add('active')
                document.querySelector('.feed').classList.remove('active')
            }else{
                document.querySelector('.feed').classList.add('active')
                document.querySelector('.plans').classList.remove('active')

            }
        }
    }

}
</script>

<style lang="scss" scoped>

    .feedExp{
        width: 100%;
        height: max-content;
        max-width: 500px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.269);
        .navigation{
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: stretch;
            border-bottom: 1px solid rgba(0, 0, 0, 0.31);
            .plans{
                cursor: pointer;
                width: 50%;
                background-repeat: no-repeat;
                background-image: url('../../assets/Plans.svg');
                background-position: center;
                background-size: 30px;
                &:hover{
                    background-size: 35px;
                }
            }
            .active{
                 border-bottom: 3px solid green;
            }
            .feed{
                cursor: pointer;
                
                width: 50%;
                 background-repeat: no-repeat;
                background-image: url('../../assets/Feed.svg');
                background-position: center;
                
                 background-size: 30px;
                &:hover{
                   background-size: 35px;
                }
            }
        }
    }

</style>