<template>
    
      <div class="card row">
        <div class="card-image-top">
           <img v-bind:src="imagePreview" v-show="showPreview"/>
        </div>
        <div class="card-body">
          
          <input  v-model="title" type="text" class="form-control" placeholder="TİTLE" >
           <div class="custom-file mt-2 ">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
          <div class="card-body">
            <button class="btn btn-sm btn-warning" @click="reset"><i class="fas fa-trash-restore" ></i> Reset</button>
           <button class="btn btn-sm btn-success"><i class="fas fa-save"></i> Save</button>
          </div>  
      </div>
    </div>
</template>
<script>
export default {
    data(){
  return {
    title:'',
    file: '',
    showPreview: false,
    imagePreview: '',
    tab: [{
                    link: '/employe',
                    label: 'Ekibimiz'
                },
                {
                    link: '/addemploye',
                    label: 'Çalışan Ekle'
                }
            ]
      }
},
methods: {
  /*
    Handles a change on the file upload
  */

  handleFileUpload(){
    /*
      Set the local file variable to what the user has selected.
    */
    this.file = this.$refs.file.files[0];
    /*
      Initialize a File Reader object
    */
    let reader  = new FileReader();

    /*
      Add an event listener to the reader that when the file
      has been loaded, we flag the show preview as true and set the
      image to be what was read from the reader.
    */
    reader.addEventListener("load", function () {
      this.showPreview = true;
      this.imagePreview = reader.result;
    }.bind(this), false);

    /*
      Check to see if the file is not empty.
    */
    if( this.file ){
      /*
        Ensure the file is an image file.
      */
      if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
        /*
          Fire the readAsDataURL method which will read the file in and
          upon completion fire a 'load' event which we will listen to and
          display the image in the preview.
        */
        reader.readAsDataURL( this.file );
      }
    }
  },
  reset(){
    this.title=null
    this.imagePreview=null
    this.file=null
  }
},
  created(){
      this.$emit('tab',this.tab)
    },
}
</script>
<style lang="less" scoped>
 .card{
   
     text-align: center;

 }

</style>