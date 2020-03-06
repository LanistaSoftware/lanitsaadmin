<template>

  <ul class="nav nav-tabs" >
    <router-link :to="tab.link" tag="li" class="nav-item active" active-class="active" exact v-for="tab in tabs" :key="tab.id">
      <a class="nav-link" href="#">{{tab.label}}</a>
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
