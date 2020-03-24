<template>
  <div>
    <SlideSet></SlideSet>
   </div>
</template>

<script>

  import SlideSet from './SlideSet'
  export default {
    name: 'Slider',
    components: {
     
      SlideSet,
    },
    data() {
      return {
           tab:[ 
          {link:'/sliders',label:'Slaytlar ' },
          {link:'/addslider',label:'Slayt Ekle/Sil/Düzenle' }],
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

</style>
