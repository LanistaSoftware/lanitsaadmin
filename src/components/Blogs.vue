<template>
  <div class="float-right ml-2 mt-2">
     <button class="btn btn-sm btn-success ">Ekle <i class="fas fa-plus-square"></i></button>
  <div class="blogs">
   
    <router-view></router-view>
     <editblog v-show="editdata" @editdata="edit($event)"></editblog>
    <CardPreview v-show="close"  @close="deger($event)"></CardPreview>
    <Card 
    v-for="card in 10" :key="card"
    @editdata="edit($event)" 
    @close="deger($event)"></Card>
   
  </div>
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
    float: left;
    text-align: center;
  }
  
</style>
