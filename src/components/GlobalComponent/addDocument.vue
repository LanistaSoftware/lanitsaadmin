<template>
<div class="employee">
  <div class="employee-card-container">
    <div class="employee-card">
      <div class="employee-image-container">
        <img :src="imagePreview" class="employee-image" alt="Çalışan fotoğrafı.">
       <div class="custom-file mt-1">
          <input type="file" class="custom-file-input" ref="file" id="file" @change="handleFileUpload()"/>
          <label class="custom-file-label" for="inputGroupFile01" >Belge Fotoğrafı</label>
        </div>
      </div>
      <div class="input-container"><input v-model="document.name" type="text" class="form-control" placeholder="Belge Adı" >
      </div>
      <div class="input-container">
        <div class="custom-file">
          <input type="file" class="custom-file-input" ref="myfile" accept="application/pdf" id="file" @change="selectedFile()"/>
          <label class="custom-file-label" for="inputGroupFile01" >Belge Seç</label>
        </div>
      </div>
      <div class="input-container"> <button class="btn btn-sm btn-warning" @click="reset"><i class="fas fa-trash-restore"></i> Reset</button>
        <button  @click="addDocument" class="btn btn-sm btn-success" ><i class="fas fa-save"></i> Save</button></div>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      imagePreview: 'https://via.placeholder.com/150x200',
      tab: [{
          link: '/documents',
          label: 'Belgeler'
        },
        {
          link: '/adddocument',
          label: 'Belge Ekle'
        },
      ],
      image: new FormData(),
      document: {
        name: '',
        path: '',
        imgUrl: '',
        file: new FormData()
      }
    }
  },
  created() {
    this.addtab(this.tab)
  },
  methods: {
    selectedFile() {
      let pdffile = '';
      pdffile = this.$refs.myfile.files[0]
      this.document.file.append('file', pdffile)
      this.document.path = pdffile.name
      let reader = new FileReader();
      reader.readAsDataURL(pdffile);
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
      this.document.imgUrl = this.file.name + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + '.jpg'
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
    ...mapActions({
      addDocumentAction: 'addDocument',
      addFile: 'addFile',
      addtab: 'addTabs',
      addImage: 'addImage'
    }),
    addDocument() {

      this.addDocumentAction(this.document).then(() => {
        this.document.name = '',
          this.document.path = ''
        this.addFile(this.document.file)
        this.addImage(this.image)
        this.imagePreview='https://via.placeholder.com/150x200'
      })

    },
    reset() {
      this.document.file.delete('file')
      this.document.name = '',
        this.document.path = ''
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
