<template>
      <div class="justify-content">
    <div class="card">
    <img v-if="edit" :src="imagePrew"  class="card-img-top"  alt="Card image cap">
    <img v-if="!edit" class="card-img-top" :src="getImage(getterLogo)">
    <div v-if="edit" class="custom-file mt-2 ">
        <input type="file" class="custom-file-input" ref="myfile" accept="image/*"  @change="selectedFile()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
    </div>
    <div class="btn-container">
      <button v-if="edit" class="btn btn-sm btn-success" @click="addLogoImages"><i class="fas fa-save"></i></button>
    <button  v-if="!edit" class="btn btn-sm btn-primary" @click="edit=true"><i class="fas fa-edit"></i></button>
    <button  v-if="edit"  class="btn btn-sm btn-warning" @click="edit=false"><i class="fas fa-arrow-left"></i>Cancel</button>
  </div>
     </div>
     
      </div>
     
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
          logo: {
            Logoname: ''
          },
            tab:[ 
          {link:'/contact',label:'Contact' },
          {link:'/companylogo',label:'Company Logo'}
         ],
          imagePrew: 'http://via.placeholder.com/1300x800',
          file: '',
          edit: false,
          imageForm: new FormData()
        }
      },
      methods: {
        ...mapActions({
          addLogo: 'addLogo',
          addLogoImage: "addLogoImage",
          getLogo: "getLogo",
          addtab:'addTabs'
        }),
        addLogoImages() {
          this.addLogo(this.logo).then(() => {
            this.addLogoImage(this.imageForm)
            this.getLogo()
          })
        },
        selectedFile() {
          this.imageError = '';
          this.file = this.$refs.myfile.files[0]
          this.imageForm.append('file', this.file)
          let reader = new FileReader();
          this.logo.Logoname = this.file.name + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + new Date().getHours() + '.jpg'
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
      },
      created() {
        this.getLogo()
        this.addtab(this.tab)
      },
      computed: {
        ...mapGetters({
          getterLogo: "getterLogo"
        })
}
}
</script>
<style lang="less" scoped>

.card {
    width: 29%;
    height: 33rem;
    margin: 0 2rem 2rem 2rem;
    float: left;
    background-color: #FAFAFA;
        img {
            width: 100%;
            height: auto;
            cursor: pointer;

        }
    }
  .btn-container {
        position: absolute  ;
        bottom: 1rem;
        width: 100%;
        text-align: center;

        .btn {
            margin: 0.5rem;
            padding: 0.3 0.5rem;
        }
    } 
</style>