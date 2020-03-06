<template>

<div class="videos">
    <videoset v-for="video in url" :key="video.id"></videoset>
</div>

</template>

<script>
  import Dropdown from './GlobalComponent/Dropdown'
  import videoset from './SlideComponents/videoset'
  export default {
    name: 'Slider',
    components: {
      videoset,
    },
    data() {
      return {
          tab:[ 
          {link:'/blogs',label:'Videolar' },
          {link:'/addblog',label:'Video Ekle' },
          {link:'/addblog',label:'Video Sil'}],
        msg: 'Lanista Gladio Blog Slide',
        url:['o0bSRbBk8hk','o0bSRbBk8hk','o0bSRbBk8hk','o0bSRbBk8hk','o0bSRbBk8hk','o0bSRbBk8hk','o0bSRbBk8hk']
      }
    },
     created(){
      this.$emit('tab',this.tab)
    },
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
