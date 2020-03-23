<template>
  <div class="card ozel-scrollbar">
    <div class="cardhead ">
  
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('editdata',false)" class="btn  btn-danger btn-sm"><i
          class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <div class="img">
      <div  class="justify-content clearfix"></div>
      </div>
      <vueeditor></vueeditor>
      <button class="btn btn-sm btn-primary " @click="updateBlog()">Save</button>
    </div>
  </div>
</template>

<script>
  import vueeditor from './vueeditor'
import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
        vueeditor,
      },

      data() {
        return {       
          image: 'https://picsum.photos/400/400',
        }

      },
      computed:{
        ...mapGetters([
          "getUpdateContent",
          "getUpdateId",
         
        ])
      },
      methods: {
        ...mapActions({
          updateBlogAction:"updateBlog",
          getBlogAction:"getBlog"
        }),
        updateBlog(){
          this.updateBlogAction({'id':this.getUpdateId,'content':this.getUpdateContent}).then(()=>{
            this.getBlogAction()
          })
        }
      }
}

</script>
<style lang="less" scoped>
@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #B5B5B5;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;
  .card {
    width: 60%;
    margin: 1rem;
    position: absolute;
    z-index: 500;
    border: 1px solid black;
    

  }
.btn {
    margin: 1rem;
    float: right;
  }
  .dlt{
      display: inline;
      float: none
  }
  
img{
    width: 40%;
    height: auto;   
    padding: 2rem;
    float: left;
    }
    .headcard-text{
        float: left;
         margin: 1rem;
    }


  .card-text {

   height: 50%;
 
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
