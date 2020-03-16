<template>

  <ul class="nav nav-tabs" >
    <router-link :to="tab.link" tag="a"  class="nav-link" v-for="tab in tabs" :key="tab.id" active-class="active">
      {{tab.label}}
    </router-link>
  </ul>

</template>

<script>
  export default {
    name: 'Tabs',
     props:['tabs'],
    data() {
      return {
   
      }
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
a{
  color:@nbfcolor;
}


</style>
