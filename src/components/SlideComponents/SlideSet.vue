<template>
     <div class="sliderset">
      <div  class="card">
        <div class="image-file m-1">
          <img  :src="imagePreview" class="rounded mx-auto d-block" >
       <div class="custom-file ">
         <input  type="file" ref="file" accept="image/*"  class="custom-file-input" id="file" aria-describedby="inputGroupFileAddon01" v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı" v-model="Slider.SliderOne.titleOne">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği" v-model="Slider.SliderOne.descriptionOne"></textarea>
        </div>
      </div>
      <div  class="card">
        <div class=" m-1">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
       <div class="custom-file ">
          <input type="file" class="custom-file-input" ref="" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı" v-model="Slider.SliderTwo.titleTwo">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği" v-model="Slider.SliderTwo.descriptionTwo"></textarea>
        </div>
      </div>
      <div  class="card">
        <div class=" m-1">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
       <div class="custom-file ">
          <input type="file" class="custom-file-input" ref="" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı" v-model="Slider.SliderThree.titleThree">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği" v-model="Slider.SliderThree.descriptioThree"></textarea>
        </div>
      </div>
      <button class="btn btn-sm btn-primary col-md-2">Ekle</button>
      <button class="btn btn-sm btn-danger col-md-2">Sil</button>
      <button class="btn btn-sm btn-info col-md-2">Düzenle</button>
  
    </div>
</template>
<script>

  export default {
  
    data() {
      return {
     title:'',
      file: '',
    showPreview: false,
    imagePreview: '',
        Slider:{
          SliderOne:{
            titleOne:'',
            imageurlOne:'',
            descriptionOne:'',
          },
          SliderTwo:{
            titleTwo:'',
            imageurlTwo:'',
            descriptionTwo:'',
          },
          SliderThree:{
            titleThree:'',
            imageurlThree:'',
            descriptioThree:'',
          }
        }
      }
    },
    methods:{
      
             handleFileUpload() {
            /*
              Set the local file variable to what the user has selected.
            */
           console.log(this.$refs.file.files)
            this.file = this.$refs.file.files[0];
            /*
              Initialize a File Reader object
            */
            let reader = new FileReader();

            /*
              Add an event listener to the reader that when the file
              has been loaded, we flag the show preview as true and set the
              image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
                this.imagePreview = reader.result;
            }.bind(this), false);

            /*
              Check to see if the file is not empty.
            */
            if (this.file) {
                /*
                  Ensure the file is an image file.
                */
                if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
                    /*
                      Fire the readAsDataURL method which will read the file in and
                      upon completion fire a 'load' event which we will listen to and
                      display the image in the preview.
                    */
                    reader.readAsDataURL(this.file);
                }
            }
        },
     
  }
}
</script>
<style lang="less" scoped>
  @nbfcolor: #303030;
  @bgcolor: #ffffff;
  @incolor: #B5B5B5;
  @redcolor: #e33;
  @pagebgcolor: #E5E5E5;
  @btntextcolor: #eee;
  @headingfont: 'Kanit', sans-serif;
  @contentfont: 'Exo', sans-serif;
  .sliderset{
    width: 100%;
    text-align: center;
  
  }
  .card{
    text-align: center;
    width: 32%;
    margin:0 0.3%;
    float: left;
    padding: 1rem;
  }
  .btn{
    margin:1rem;
    width: 4rem;
  }
  img{
    width: 20rem;
    height: auto;
    margin-bottom: 2rem;
  }

</style>