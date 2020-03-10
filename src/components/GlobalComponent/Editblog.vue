<template>
  <div class="card">
    <div class="cardhead ">
  
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('editdata',false)" class="btn  btn-danger btn-sm"><i
          class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div class="img">
        <!-- <div v-if="image==null">
          <input v-show="image==null" type="file" @change="onFileChange">
        </div>
        <div v-if="image!=null">
          <img :src="image" />
          <button class="btn btn-danger dlt" @click="removeImage">Remove image</button>
        </div> -->
      <div v-html="as" class="justify-content clearfix"></div>
      </div>
      <Ckeditor @editorData="a($event)"></Ckeditor>
      <button class="btn btn-sm btn-primary  ">Save</button>
    </div>
  </div>

</template>

<script>
  import Ckeditor from '../GlobalComponent/vueeditor'
  export default {
    components: {
        Ckeditor,
      },

      data() {
        return {

          image: 'https://picsum.photos/400/400',
          as:'',

        }

      },

      methods: {
        onFileChange(e) {
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createImage(files[0]);
        },
        createImage(file) {
          var image = new Image();
          var reader = new FileReader();
          var vm = this;

          reader.onload = (e) => {
            vm.image = e.target.result;
          };
          reader.readAsDataURL(file);
        },
        removeImage: function (e) {
          this.image = null;
        },
         a(e){
        this.as=e;
      }
      }
}

</script>
<style lang="less" scoped>
  .card {
    width: 60%;
    margin: 1rem;
    position: fixed;
    z-index: 500;
    border: 1px solid black;
    display: inline-block;

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
 

</style>
