/* eslint-disable no-undef */
<template>
     <div class="sliderset">
      <div  class="card">
        <div class="image-file m-1">
          <img  :src="imagePreviewone" class="rounded mx-auto d-block" >
       <div class="custom-file ">
         <input  type="file" ref="slideOne" accept="image/*"  class="custom-file-input" id="file" aria-describedby="inputGroupFileAddon01" @change="selectedFile('slideOne')" />
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
         <img  :src="imagePreviewtwo" class="rounded mx-auto d-block" >
       <div class="custom-file ">
          <input type="file" class="custom-file-input" ref="slideTwo" accept="image/*" id="file"
            v-on:change="selectedFile('slideTwo')" />
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
       <img  :src="imagePreviewthree" class="rounded mx-auto d-block" >
       <div class="custom-file ">
          <input type="file" class="custom-file-input" ref="slideThree" accept="image/*" id="file"
            v-on:change="selectedFile('slideThree')" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı" v-model="Slider.SliderThree.titleThree">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği" v-model="Slider.SliderThree.descriptioThree"></textarea>
        </div>
      </div>
      <button class="btn btn-sm btn-primary col-md-2" @click="addSlide">Ekle</button>
      <button class="btn btn-sm btn-danger col-md-2">Sil</button>
      <button class="btn btn-sm btn-info col-md-2">Düzenle</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
  export default {

    data() {
      return {
        image: {
          size: '',
          height: '',
          width: ''
        },
        imageError: '',
        title: '',
        file: '',
        showPreview: false,
        imageLoaded: false,
        imagePreviewone:'http://via.placeholder.com/1300x800',
        imagePreviewtwo: 'http://via.placeholder.com/1300x800',
        imagePreviewthree:'http://via.placeholder.com/1300x800',
        Slider: {
          SliderOne: {
            titleOne: '',
            imageurlOne: '',
            descriptionOne: '',
          },
          SliderTwo: {
            titleTwo: '',
            imageurlTwo: '',
            descriptionTwo: '',
          },
          SliderThree: {
            titleThree: '',
            imageurlThree: '',
            descriptioThree: '',
          }
        }
      }
    },
    methods: {
      ...mapActions({
        addSlideAction:"addSlide"
      }),
      addSlide(){
        this.addSlideAction(this.Slider).then(()=>{
          this.Slider.SliderOne=""
          this.Slider.SliderTwo=""
          this.Slider.SliderThree=""
          this.imagePreviewone="http://via.placeholder.com/1300x800"
          this.imagePreviewtwo="http://via.placeholder.com/1300x800"
          this.imagePreviewthree="http://via.placeholder.com/1300x800"

        })
      },
      selectedFile(slide) {
        this.imageError = '';
        const MAX_SIZE = 100000;
        const MAX_WIDTH = 1000;
        const MAX_HEIGHT = 3000;
        var file=''
        if (slide=='slideOne') { file = this.$refs.slideOne.files[0]}
        if (slide=='slideTwo') { file = this.$refs.slideTwo.files[0]}
        if (slide=='slideThree') {file = this.$refs.slideThree.files[0]}

        if (!file || file.type.indexOf('image/') !== 0) return;
        this.image.size = file.size;
        if (this.image.size > MAX_SIZE) {
          this.imageError = `The image size (${this.image.size}) is too much (max is ${MAX_SIZE}).`;
          alert(this.imageError)
          return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = evt => {
          let img = new Image();
          img.onload = () => {
            this.image.width = img.width;
            this.image.height = img.height;
           
            if (this.image.width > MAX_WIDTH) {
              this.imageError = `The image width (${this.image.width}) is too much (max is ${MAX_WIDTH}).`;
              alert(this.imageError)
              return;
            }
            if (this.image.height > MAX_HEIGHT) {
              this.imageError = `The image height (${this.image.height}) is too much (max is ${MAX_HEIGHT}).`;
              alert(this.imageError)
              return;
            }
          }
       
          img.src = evt.target.result;
        if (slide=='slideOne') {
          this.imagePreviewone = event.target.result
          this.Slider.SliderOne.imageurlOne = this.imagePreviewone
          }
        if (slide=='slideTwo') { 
          this.imagePreviewtwo = event.target.result
           this.Slider.SliderTwo.imageurlTwo = this.imagePreviewtwo
          }
        if (slide=='slideThree') { 
          this.imagePreviewthree = event.target.result
           this.Slider.SliderThree.imageurlThree = this.imagePreviewthree
        }
        console.log(this.Slider)
        }
        reader.onerror = evt => {
          console.error(evt);
        }
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
    height: 7rem;
    margin-bottom: 2rem;
  }

</style>