<template>
<div>
<div class="box a"><p></p></div>
<div class="box b">
  <Tabs :tabs="menus"></Tabs>
</div>
<div class="box c"><button class="btn btn-sm btn-secondary" @click="logout"><i class="fas fa-sign-out-alt"></i> Exit</button></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

import Tabs from './GlobalComponent/Tabs'
export default {
  name: 'AppNavigation',
  components:{
      Tabs
  },
  data () {
    return {
      showTabs:true
    }
  },
    methods:{
    ...mapActions({
      logout:"logout"
    })
  },
  watch:{
    menus(){
      if(this.menus){
        this.showTabs=false
      }
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
@contentfont: 'Exo', sans-serif;

.box {
  float: left;
  width: 33%;
  position: relative;
}

.a {
   height: 100%;
  width: 15%;
}

.b {
  height: 100%;
  width: 65%;
  margin-top: 1rem;


  }
.c{
  text-align: right;
 height: 100%;
  width: 20%;
  border-bottom: 1px solid #dee2e6;
  .btn{
    margin-top: 1rem;
  }
}
</style>