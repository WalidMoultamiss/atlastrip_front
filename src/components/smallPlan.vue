<template>
  <div @click="showPlan" :class="className">
      <h2>{{plan.name}}</h2>
      <div class="planFooter">
          <div class="priceHolder">
              <h3>{{plan.price}}&nbsp;dh</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'smallPlan',
props:{
    plan:Object,
    className:String,
},
methods:{
    showPlan(){
        localStorage.setItem('planId',this.plan.plan_id)
        this.$router.push('/PlanViewer')
    }
}
}
</script>

<style lang="scss" scoped>

.widePlan{
    position: relative;
    width: max-content;
    padding: 50px;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    color: white;
    box-shadow: inset 0px -30px 50px rgba(0, 0, 0, 0.476);
    background-image: url('../assets/les-voyageuses-randonnee-lacs-maroc-lac-ifni-credit-photo-amine-morchid.jpg');
    .planFooter{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        
        .priceHolder{
            display: flex;
        justify-content: flex-end;
        align-items: center;
        color: honeydew;
        border-bottom-right-radius: 15px;
        border-top-left-radius: 15px;
            width: max-content;
            height: 100%;
            padding: 5px 15px;
            background:green ;
        }
    }
}
.wideRect{
    position: relative;
    width: 32vw;
    height: 32vw;
    padding: 50px;
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    color: white;
    box-shadow: inset 0px -30px 50px rgba(0, 0, 0, 0.476);
    background-image: url('../assets/les-voyageuses-randonnee-lacs-maroc-lac-ifni-credit-photo-amine-morchid.jpg');
    .planFooter{
        display: none;
        
        
        
        .priceHolder{
            display: none;
        }
    }
}

</style>