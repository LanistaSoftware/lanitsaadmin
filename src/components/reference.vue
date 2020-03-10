<template>
<div class="form-row reference m-5">
    <div class="col-10">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col-2">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
        <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
      <img v-bind:src="imagePreview" v-show="showPreview"/>
    </div>
  </div>
</template>
<script>
export default {
    data(){
  return {
    file: '',
    showPreview: false,
    imagePreview: ''
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
  }
}
}
</script>
<style lang="less" scoped>
 .reference{
     width: 100%;
 }
</style>