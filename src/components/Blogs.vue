<template>
 
     
  <div class="blogs">
     <editblog v-show="editdata" @editdata="edit($event)"></editblog>
    <CardPreview v-show="close"  @close="deger($event)"></CardPreview>
    <Card 
    v-for="card in 10" :key="card"
    @editdata="edit($event)" 
    @close="deger($event)"></Card>
   
  </div>

</template>


<script>
  import Card from './GlobalComponent/Card.vue';
  import CardPreview from './GlobalComponent/CardPreview.vue'
  import editblog from './GlobalComponent/Editblog.vue' 
  export default {
    components: {
      Card,
      CardPreview,  
      editblog,
    },

    data() {
      return {
        close:false,
        editdata:false,
        tab:[ 
          {link:'/blogs',label:'Makaleler' },
          {link:'/addblog',label:'Makale Ekle' }]
      }

    },
    created(){
      this.$emit('tab',this.tab)
    },
    methods:{
      deger(e){
        this.close=e;
      },
      edit(e){
        this.editdata=e;
      }
    }
  }

</script>

<style lang="less" scoped>
  .blogs {
    width: 100%;
    text-align: center;

  }
  
</style>
