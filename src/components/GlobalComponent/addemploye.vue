<template>
<div class="employee">
  <div class="employee-card-container">
    <div class="employee-card">
      <div class="employee-image-container">
        <img :src="imagePreview" class="employee-image" alt="Çalışan fotoğrafı.">
      </div>
      <div class="input-container"><input type="text" class="form-control" placeholder="Ad Soyad "
          v-model="employe.name"></div>
      <div class="input-container"><input type="text" class="form-control" placeholder="Görev" v-model="employe.task">
      </div>
      <div class="input-container"> <select class="form-control" id="exampleFormControlSelect1"
          placeholder="Yetki seçiniz." v-model="employe.order">
          <option value="" disabled selected>Yetki Seçiniz</option>
          <option>0</option>
          <option>1</option>
        </select></div>
      <div class="input-container">
        <div class="custom-file">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>
      <div class="input-container"> <button class="btn btn-sm btn-warning" @click="reset"><i
            class="fas fa-trash-restore"></i>
          Reset</button>
        <button class="btn btn-sm btn-success" @click="addEmploye()"><i class="fas fa-save"></i> Save</button></div>

    </div>
  </div>
</div>
  <!-- <div class="card">
    <div class="card-body">
      <div class="card-image-top">
        <img v-bind:src="imagePreview" class="rounded mx-auto d-block mt-1" />
      </div>
      <input type="text" class="form-control" placeholder="Ad Soyad " v-model="employe.name">
      <input type="text" class="form-control" placeholder="Görev" v-model="employe.task">
      <select class="form-control" id="exampleFormControlSelect1" placeholder="Yetki seçiniz." v-model="employe.order">
        <option value="" disabled selected>Yetki Seçiniz</option>
        <option>0</option>
        <option>1</option>
      </select>
      <div class="custom-file">
        <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
          v-on:change="handleFileUpload()" />
        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        <div class="btn-container">
          <button class="btn btn-sm btn-warning" @click="reset"><i class="fas fa-trash-restore"></i>
            Reset</button>
          <button class="btn btn-sm btn-success" @click="addEmploye()"><i class="fas fa-save"></i> Save</button>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import {
  mapActions
} from 'vuex';

export default {
  data() {
    return {
      title: '',
      file: '',
      showPreview: false,
      imagePreview: 'http://via.placeholder.com/150x200',
      image: new FormData(),
      employe: {
        name: '',
        task: '',
        order: '',
        imgUrl: ''
      },
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
    ...mapActions({
      addEmployeAction: "addEmploye",
      addImageEmploye: "addImageEmploye"
    }),
    addEmploye() {
      this.addEmployeAction(this.employe).then(() => {
        this.reset()
      })
      this.addImageEmploye(this.image)
    },
    handleFileUpload() {
      this.image.delete('file')
      /*
        Set the local file variable to what the user has selected.
      */
      this.file = this.$refs.file.files[0];
      this.image.append('file', this.file)
      /*
        Initialize a File Reader object
      */
      let reader = new FileReader();
      this.employe.imgUrl = this.file.name + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + new Date().getHours() + '.jpg'
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
    reset() {
      this.title = null
      this.imagePreview = 'http://via.placeholder.com/150x200'
      this.file = null
      this.employe.imgUrl = ''
      this.employe.name = ''
      this.employe.task = ''
      this.employe.order = ''
    }
  },
  created() {
    this.$emit('tab', this.tab)
  },
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

.employee-card-container{
  width: 100%;
  text-align: center;
}
.employee-card{
  background-color: @incolor;
  padding: 1rem;
  display: inline-block;
  width: 30%;
  text-align: center;
}
.employee-image-container{
  display: inline-block;
  width: 20rem;
  padding: 2rem;
}
img{
  width: 100%;
  height: auto;
}
.input-container{
  margin: 0.3rem;
}
</style>