<template>
 <div class="row content">
        <router-view  @tab="tabs($event)"  class="container-v"></router-view>
      </div>
</template>
<script>
export default {  
        data() {
      return {
        menus:null
      
      }
    },   
        methods:{
      tabs(e){
        this.menus=e;
      },
    },
     
}
</script>
<style lang="less" scoped>

      .content {
          border-left: 1px solid #ddd;
          width: 85%;
      }
</style>