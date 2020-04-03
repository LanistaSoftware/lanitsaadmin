<template>
  <div class="card ozel-scrollbar">
    <div class="cardhead clearfix  ">
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="setClose(false)" class="btn btn-danger btn-sm"><i class="fas fa-window-close"></i></button>
      <button v-if="showedit" @click="setData(true),setClose(false)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
    </div>
    <div v-if="set" class="card-body prew-html" v-html="set">
    </div>
    <div v-if="getAddBlogContent" class="card-body prew-html" v-html="getAddBlogContent">
    </div>
   
  </div>
</template>

<script>
 import {mapGetters,mapMutations} from 'vuex'
  export default {
      data(){
          return{
         
            lp:[]
          }
      },
   
      methods:{
        cli(e){
          this.lp=e
        },
        ...mapMutations({
          setData:"setData",
          setClose:"setClose"
        })
      },
      computed:{
        ...mapGetters({
          set:"getContent",
          getAddBlogContent:"getAddBlogContent",
          showedit:"showedit"
        }),
      
      }
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

  .card {
    width: 60%;
    margin: 1rem;
    top: 20%;
    position: fixed;
    z-index: 500;
    border: 1px solid black;

    background-color:@pagebgcolor ;

  }
    .btn {
    margin: 1rem;
    float: right;
  }


  img {
    width: 40%;
    height: auto;
    float: left;
    padding: 2rem;
  }
    .headcard-text{
        float: left;
         margin: 1rem;
    }


  .card-text {
   
   text-align: left
 
  }
    .ozel-scrollbar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color:@nbfcolor;
}

.ozel-scrollbar::-webkit-scrollbar {
    width: 6px;
    background-color:@nbfcolor;
}

.ozel-scrollbar::-webkit-scrollbar-thumb {
    background-color:@redcolor;
}

.ozel-scrollbar {    
    height: 70vh;
    width: 60%; 
    overflow-y: scroll;
}

</style>
