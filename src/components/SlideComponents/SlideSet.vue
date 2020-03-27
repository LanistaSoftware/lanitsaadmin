/* eslint-disable no-undef */
<template>
     <div class="sliderset">
       <div class="card-container">
         <div class="input-container">
           <div class="input-group">
             <div class="input-group-prepend">
               <span class="input-group-text" id="">Kayıtlı Setler</span>
             </div>
             <select class="form-control" id="exampleFormControlSelect1" @change="changeSlide($event)"
               v-model="selectId">
               <option selected>Slayt seti seçiniz.</option>
               <option v-for="(item,index) in slideAll" :key="index" :value="item._id">{{item.sliderName}}</option>
             </select>
           </div>
           <div class="input-group">
             <div class="input-group-prepend">
               <span class="input-group-text" id="">Set İsmi</span>
             </div>
             <input type="text" class="form-control" id="slaytsetname" placeholder="Set ismi giriniz."
               v-model="Slider.sliderName">
           </div>
         </div>
         <div class="card">
           <div class="image-file m-1">
             <img v-if="show && !editone" :src="getImage(imagePreviewone)" class="rounded mx-auto d-block">
             <img v-if="!show||editone" :src="imagePreviewone" class="rounded mx-auto d-block">
             <div class="custom-file ">
               <input type="file" ref="slideOne" accept="image/*" class="custom-file-input" id="file"
                 aria-describedby="inputGroupFileAddon01" @change="selectedFile('slideOne')" />
               <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
             </div>
           </div>
           <div class="content-title mt-3">
             <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı"
               v-model="Slider.SliderOne.titleOne">
             <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"
               v-model="Slider.SliderOne.descriptionOne"></textarea>
           </div>
         </div>
         <div class="card">
           <div class=" m-1">
             <img v-if="show && !edittwo" :src="getImage(imagePreviewtwo)" class="rounded mx-auto d-block">
             <img v-if="!show|| edittwo" :src="imagePreviewtwo" class="rounded mx-auto d-block">
             <div class="custom-file ">
               <input type="file" class="custom-file-input" ref="slideTwo" accept="image/*" id="file"
                 v-on:change="selectedFile('slideTwo')" />
               <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
             </div>
           </div>
           <div class="content-title mt-3">
             <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı"
               v-model="Slider.SliderTwo.titleTwo">
             <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"
               v-model="Slider.SliderTwo.descriptionTwo"></textarea>
           </div>
         </div>
         <div class="card">
           <div class=" m-1">
             <img v-if="show  && !editthree" :src="getImage(imagePreviewthree)" class="rounded mx-auto d-block">
             <img v-if="!show||editthree" :src="imagePreviewthree" class="rounded mx-auto d-block">
             <div class="custom-file ">
               <input type="file" class="custom-file-input" ref="slideThree" accept="image/*" id="file"
                 v-on:change="selectedFile('slideThree')" />
               <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
             </div>
           </div>
           <div class="content-title mt-3">
             <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı"
               v-model="Slider.SliderThree.titleThree">
             <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"
               v-model="Slider.SliderThree.descriptionThree"></textarea>
           </div>
         </div>
         <button v-if="!show" class="btn btn-sm btn-primary col-md-2" @click="addSlide">Ekle</button>
         <button v-if="show" class="btn btn-sm btn-danger col-md-2" @click="deleteSlide">Sil</button>
         <button v-if="show" class="btn btn-sm btn-info col-md-2" @click="updateSlider">Kaydet</button>
         <button v-if="show" class="btn btn-sm btn-warning col-md-2" @click="resetSlide">Cancel</button>
       </div>
     </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {

  data() {
    return {
      show: false,
      editone: false,
      edittwo: false,
      editthree: false,
      imagePreviewone: 'http://via.placeholder.com/1300x800',
      imagePreviewtwo: 'http://via.placeholder.com/1300x800',
      imagePreviewthree: 'http://via.placeholder.com/1300x800',
      selectId: '',

      avarage: '',
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

      Slider: {
        formData: new FormData(),
        sliderName: '',
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
      addSlideAction: "addSlide",
      updateSliderAction: "updateSlide",
      getAllSlideAction: "getAllSlide",
      getOneSlide: "getSlide",
      deleteSliderAction: "deleteSlide",
      addİmage: "addSlideimage",

    }),
    getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
    changeSlide() {
      if(this.selectId !== "Slayt seti seçiniz."){
      let id= this.selectId
        this.getOneSlide(id).then(() => {
        this.show = true
        this.imagePreviewone = this.getASlider.SliderOne.imageurlOne
        this.imagePreviewtwo = this.getASlider.SliderTwo.imageurlTwo
        this.imagePreviewthree = this.getASlider.SliderThree.imageurlThree
        this.Slider.SliderOne = this.getASlider.SliderOne
        this.Slider.SliderTwo = this.getASlider.SliderTwo
        this.Slider.SliderThree = this.getASlider.SliderThree
        this.Slider.sliderName = this.getASlider.sliderName
      })
      } else {
        this.resetSlide()
      }

    },
    resetSlide(){
        this.Slider.SliderOne ={
          titleOne: '',
          imageurlOne: '',
          descriptionOne: '',
        }
        this.Slider.SliderTwo =  {
          titleTwo: '',
          imageurlTwo: '',
          descriptionTwo: '',
        }
        this.Slider.sliderName=""
        this.Slider.SliderThree =  {
          titleThree: '',
          imageurlThree: '',
          descriptioThree: '',
        }
        this.imagePreviewone = "http://via.placeholder.com/1300x800"
        this.imagePreviewtwo = "http://via.placeholder.com/1300x800"
        this.imagePreviewthree = "http://via.placeholder.com/1300x800"
        this.show=false
        this.editone = false
        this.edittwo = false
        this.editthree = false
    },
    addSlide() {
      this.addSlideAction(this.Slider).then(() => {
        this.addİmage(this.Slider.formData)
        this.resetSlide()

      }).then(() => {
        this.getAllSlideAction()
     
      })
    },
    updateSlider() {
      console.log(this.Slider)
      this.updateSliderAction({
        'id': this.selectId,
        'slideset': this.Slider
      }).then(() => {
        this.resetSlide()
        this.getAllSlideAction()
      })
    },
    deleteSlide() {
      this.deleteSliderAction(this.selectId).then(() => {
        this.Slider.SliderOne = ""
        this.Slider.SliderTwo = ""
        this.Slider.SliderThree = ""
        this.getAllSlideAction()
        this.resetSlide()
      })
    },
    selectedFile(slide) {
      this.imageError = '';
      const MAX_SIZE = 1000000000;
      // const MAX_WIDTH = 1000;
      // const MAX_HEIGHT = 3000;
      var file = '' 
   
      if (slide == 'slideOne') {
        file = this.$refs.slideOne.files[0]
        this.editone = true

        this.Slider.formData.append('file', file);
      }
      if (slide == 'slideTwo') {
        file = this.$refs.slideTwo.files[0]
        this.Slider.formData.append('file', file);
        this.edittwo = true
      }
      if (slide == 'slideThree') {
        file = this.$refs.slideThree.files[0]
        this.Slider.formData.append('file', file);
        this.editthree = true
      }

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
          this.avarage =  img.width/img.height
          console.log(this.avarage)
          if (this.avarage < 1.4 || this.avarage > 1.6) {
            this.imageError = `Fotoğrafın en boy oranı ortalama 1.5 olmalıdır Örneğin 90*60 gibi.Şu anki oran = ${(this.avarage.toFixed(2))}`;
            alert(this.imageError)
            return '';
          }else{
             if (slide == 'slideOne') {
              if (this.avarage < 1.4 || this.avarage > 1.6) {
                console.log('err')
            }else{
            this.imagePreviewone = evt.target.result
            this.Slider.SliderOne.imageurlOne = file.name
            }
          }
          if (slide == 'slideTwo') {
             if (this.avarage < 1.4 || this.avarage > 1.6) {
               console.log('er')
             }else{
               this.imagePreviewtwo = evt.target.result
               this.Slider.SliderTwo.imageurlTwo = file.name
             }
        
          }
          if (slide == 'slideThree') {
             if (this.avarage < 1.4 || this.avarage > 1.6) {
               console('err')
            }else{
              this.imagePreviewthree = evt.target.result
            this.Slider.SliderThree.imageurlThree = file.name
            }
          }
          }
        }
          img.src = evt.target.result;
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    }
  },
  computed: {
    ...mapGetters({
      slideAll: "getAllSlide",
      getASlide: "getASlide"
    }),
    getASlider: {
      get() {
        return this.getASlide
      },
      set(value) {
        return this.$store.commit("setslide", value)
      }
    }
  },
  mounted() {
    this.getAllSlideAction()
    
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
  .card-container{
    text-align: center;
    width: 100%;
    padding: 1rem;
  }
  .card{
    background-color: #fafafa;
    text-align: center;
    width: 32.7%;
    margin:0 0.3%;
    float: left;
    padding: 1rem;
  }
  .btn{
    margin:1rem;
    width: 4rem;
  }
  img{
    width: 15rem;
    height: 10rem;
    margin-bottom: 2rem;
  }
  .input-container{
    padding: 0 1rem;
  }
  .input-group{
    margin-bottom: 1rem;
    width: 100%;
    margin-left: 0;
    .input-group-text{
      width: 8rem;
    }

  }

</style>