<template>
  <div class="blogs">
    <Card ></Card>
    <editblog v-show="data" ></editblog>
    <CardPreview v-show="close"></CardPreview>
    
  </div>
</template>


<script>
  import Card from '../GlobalComponent/Card.vue';
  import CardPreview from '../GlobalComponent/CardPreview.vue'
  import editblog from '../GlobalComponent/Editblog.vue' 
  import {mapActions,mapGetters} from 'vuex'
  export default {
    components: {
      Card,
      CardPreview,  
      editblog,
    },

    data() {
      return {
     
        tab:[ 
          {link:'/blogs',label:'Makaleler' },
          {link:'/addblog',label:'Makale Ekle' }]
      }

    },
    created(){
     this.addtab(this.tab)
    },

    methods:{
         ...mapActions({
           addtab:"addTabs",
         })
    },
    computed:{
     ...mapGetters({
        data:"data"
     }),
    close:{
    get () {
    return this.$store.getters.close
    },
    set (value) {
      this.$store.commit('setClose', value)
    }
    }
    },
    
  }

</script>

<style lang="less" scoped>
  .blogs {
    width: 100%;
    text-align: center;

  }
  
</style>
