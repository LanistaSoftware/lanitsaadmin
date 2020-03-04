<template>
  <div class="card">
    <div class="cardhead clearfix">

      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('editdata',false)" class="btn  btn-danger btn-sm"><i
          class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div :class="img" >
        <div v-if="image==null">
        <input v-show="image==null" type="file" @change="onFileChange">
      </div>
      <div v-if="image!=null">
        <img :src="image" />
        <button class="btn btn-danger dlt" @click="removeImage">Remove image</button>
      </div>
      </div>
  
      <ckeditor class="card-text" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      <button class="btn btn-sm btn-primary  ">Save</button>
    </div>
  </div>

</template>

<script>
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
      

    data() {
        return {
          image: 'https://picsum.photos/400/400',
          editor: ClassicEditor,
          editorData: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur",
          editorConfig: {

            // The configuration of the rich-text editor.
          }

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
  
   text-align: left;
   height: 50%;
 
  }

</style>
