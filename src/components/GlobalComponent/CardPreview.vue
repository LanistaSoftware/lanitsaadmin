<template>
  <div class="card ozel-scrollbar">
    <div class="cardhead clearfix  ">
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('close',false)" class="btn btn-danger btn-sm"><i class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body prew-html" v-html="content"></div>
    <div class="card-body prew-html" v-html="set">
    </div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
  export default {
      props:['content'],
      data(){
          return{
            lp:[]
          }
      },
      methods:{
        cli(e){
          this.lp=e
        }
      },
      computed:{
        ...mapGetters({
          set:"getContent"
        })
      },
      
      
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
