<template>
<div>
<div class="box  a"><p></p></div>
<div class="box  b">
  <Tabs :tabs="menus"></Tabs>
</div>
<div class="box  c"><Search></Search></div>
</div>
</template>

<script>
import Search from './GlobalComponent/Search';
import Tabs from './GlobalComponent/Tabs'
export default {
  name: 'AppNavigation',
  components:{
      Search,
      Tabs
  },
  data () {
    return {
      
    }
  },
  props:['menus'],
  
}
</script>

<style lang="less" scoped>
@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@btntextcolor:#eee;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;

.box{
  float: left;
  width: 33%;
  position: relative;
}
.a{
  width: 15%;}
.b{
  width: 65%;
   top: 2rem;
  }
.c{

  width: 20%;
 
}

</style>