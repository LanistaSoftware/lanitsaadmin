<template>
    <div>

     <h1>Hoşgeldiniz.</h1>
     <p>Think. Create. Develop.</p>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
export default {
    data() {
        return {
            tab: [{
                link: '/',
                label: 'Panel Tabs System'
            }]
        }
    },
      created() {
      this.addtab(this.tab)
  },
  methods:{
           ...mapActions({
           addtab:"addTabs"
         }),
  }
}
</script>
<style lang="less" scoped>
   div{
       text-align: center;
       h1{
           color:#e33;
       }
   } 
</style>
