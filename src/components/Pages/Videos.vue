<template>

<div class="videos">
    <videoset></videoset>
</div>

</template>

<script>
  import videoset from '../SlideComponents/videoset'
  import {mapActions} from 'vuex'
  export default {
    name: 'Slider',
    components: {
      videoset,
    },
    data() {
      return {
          tab:[ 
          {link:'/videos',label:'Videolar' }],
        msg: 'Lanista Gladio Blog Slide',
       
      }
    },
     created(){
          this.addtab(this.tab)
    },
      methods:{
         ...mapActions({
           addtab:"addTabs",
         })
        }
  }
</script>
<style lang="less" scoped>
  @nbfcolor: #303030;
  @bgcolor: #ffffff;
  @incolor: #B5B5B5;
  @redcolor: #e33;
  @pagebgcolor: #E5E5E5;
  @btntextcolor: #eee;
  @headingfont: 'Kanit', sans-serif;
  @contentfont: 'Exo', sans-serif;

  .videos{
    width: 100%;
    float: left;
    text-align: center;
  }

</style>
