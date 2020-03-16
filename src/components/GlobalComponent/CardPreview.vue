<template>
  <div class="card">
    <div class="cardhead clearfix">
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('close',false)" class="btn btn-danger btn-sm"><i class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body prew-html" v-html="content">
        <br>
    </div>
  </div>

</template>

<script>

  export default {
      props:['content'],
      data(){
          return{
          }
      },
      methods:{
        cli(e){
          this.lp=e
        }
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
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  .card {
    width: 60%;
    margin: 1rem;
    position: fixed;
    z-index: 500;
    border: 1px solid black;
    display: inline-block;
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

</style>
