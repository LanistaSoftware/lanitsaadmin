<template>
      <div class="justify-content">
    <div class="card">
    <img :src="imagePrew"  class="card-img-top"  alt="Card image cap">
    <img class="card-img-top">
    <div class="custom-file mt-2 ">
        <input type="file" class="custom-file-input" ref="myfile" accept="image/*"  @change="selectedFile()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
    </div>
     </div>
      <button v-if="edit" class="btn btn-sm btn-success" @click="addLogoImage()"><i class="fas fa-save"></i></button>
    <button class="btn btn-sm btn-primary" @click="edit=true"><i class="fas fa-edit"></i></button>
    <button  v-if="edit"  class="btn btn-sm btn-warning" @click="edit=false"><i class="fas fa-arrow-left"></i>Cancel</button>
  </div>
     
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            logo:{
                Logoname:''
            },
            imagePrew:'',
            file:'',
            edit:false,
            imageForm: new FormData()
        }
    },
     methods: {
         ...mapActions({
             addLogo:'addLogo',
             addLogoImage:"addLogoImage"
         }),
         addLogoImage(){
             this.addLogo(this.logo).then(()=>{
                  this.addLogoImage(this.imageForm)
             })
            
         },
    selectedFile() {
      
      this.imageError = '';
      this.file = this.$refs.myfile.files[0]
      this.imageForm.append('file', this.file)
      let reader = new FileReader();
      this.logo.Logoname=this.file.name+ '-' +new Date().getUTCMonth()+'-'+new Date().getUTCDay()+'-'+new Date().getHours()+'.jpg'
      reader.readAsDataURL(this.file);
      reader.onload = evt => {
        let img = new Image();
        img.onload = () => {}
        img.src = evt.target.result;
        this.imagePrew = evt.target.result
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    },
   
    getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
}
}
</script>
<style lang="less" scoped>
.card{
    width: 50%;
}
 img {
            width: 50%;
            height: auto;
            cursor: pointer;

        }
</style>