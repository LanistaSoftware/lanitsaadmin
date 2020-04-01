<template>
    
      <div class="card row">
        <div class="card-image-top">
           <img v-bind:src="imagePreview" class="rounded mx-auto d-block mt-1"/>
           
        </div>
        <div class="card-body">
          <div class="input-item">
            <div class="item">
               <input  type="text" class="form-control" placeholder="Ad Soyad " v-model="employe.name">
            </div>
            <div class="item">
               <input   type="text" class="form-control" placeholder="Görev" v-model="employe.task">
            </div>
            <div class="item">
             <select class="form-control" id="exampleFormControlSelect1" v-model="employe.order">
                          <option>0</option>
                          <option>1</option>
             </select>
            </div>
          </div>
          <div class="custom-file mt-2 ">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
          <div class="card-body">
            <button class="btn btn-sm btn-warning" @click="reset"><i class="fas fa-trash-restore" ></i> Reset</button>
           <button class="btn btn-sm btn-success" @click="addEmploye()"><i class="fas fa-save"></i> Save</button>
          </div>  
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
  return {
    title:'',
    file: '',
    showPreview: false,
    imagePreview: 'http://via.placeholder.com/1300x800',
    image:new FormData(),
    employe:{
      name:'',
      task:'',
      order:'',
      imgUrl:''
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
    addEmployeAction:"addEmploye",
    addImageEmploye:"addImageEmploye"
  }),
  addEmploye(){
    this.addEmployeAction(this.employe).then(()=>{
      this.reset()
    })
    this.addImageEmploye(this.image)
  },
  handleFileUpload(){
    this.image.delete('file')
    /*
      Set the local file variable to what the user has selected.
    */
    this.file = this.$refs.file.files[0];
    this.image.append('file',this.file)
    /*
      Initialize a File Reader object
    */
    let reader  = new FileReader();
    this.employe.imgUrl = this.file.name+ '-' +new Date().getUTCMonth()+'-'+new Date().getUTCDay()+'-'+new Date().getHours()+'.jpg'
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
    this.imagePreview='http://via.placeholder.com/1300x800'
    this.file=null
    this.employe.imgUrl=''
    this.employe.name=''
    this.employe.task=''
    this.employe.order=''
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
 img{
   width: 20rem;
   height: 10rem;
 }
.input-item{
  text-align: center;
  width: 100%;
}
.item{
  width: 30%;
  margin: 1rem;
  float: left;
}
.btn{
  margin: 0.5rem;
}

</style>