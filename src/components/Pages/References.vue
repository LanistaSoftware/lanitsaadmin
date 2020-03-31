<template>
    <div class="reference justify-content">
    <div class="card"  v-for="reference in references" :key="reference._id">
    <img v-if="edit==false " class="card-img-top" :src="getImage(reference.imageUrl)" alt="Card image cap">
    <img v-if="edit==true " class="card-img-top" :src="imagePrew" >
    <div v-if="selectId==reference._id" class="custom-file mt-2 ">
        <input type="file" class="custom-file-input" ref="myfile" accept="image/*"  @change="selectedFile()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
    <div class="card-body">
    <input v-if="selectId==reference._id ? edit=true : edit=false" type="text" v-model="reference.referenceName" class="form-control">
    <input v-if="selectId==reference._id " type="text" v-model="reference.referenceUrl" class="form-control">
    <h5 v-if="edit==false"  class="card-title">{{reference.referenceName}}</h5> 
    <a v-if="edit==false " :href="reference.referenceUrl" target="_blank" class="btn  btn-sm btn-info"><i class="fas fa-search-location"></i></a>
    <button  v-if="edit==true " class="btn btn-sm btn-success" @click="updateReference(reference)"><i class="fas fa-save"></i>Save</button>
    <button v-if="edit==false " class="btn btn-sm btn-primary" @click="selectId=reference._id,edit=true"><i class="fas fa-edit"></i></button>
    <button class="btn btn-sm btn-danger" @click="deleteReference(reference._id)"><i class="fas fa-trash-alt"></i></button>
    <button  v-if="edit==true " class="btn btn-sm btn-warning" @click="cancel"><i class="fas fa-arrow-left"></i>Cancel</button>
  </div>
</div>
</div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      image: 'http://via.placeholder.com/1300x800',
      imagePrew: 'http://via.placeholder.com/1300x800',
      imageForm: new FormData(),
      selectId: '',
      updateImage: '',
      edit: false,
      file: '',
      tab: [{
          link: '/reference',
          label: 'Referanslar'
        },
        {
          link: '/addreference',
          label: 'Referans Ekle'
        }
      ],
      references: {},
    }
  },
  computed: {
    ...mapGetters({
      getterReferences: "getterReferences"
    })
  },
  created() {
    this.addtab(this.tab)
    this.getReference().then(() => {
      this.references = this.getterReferences
    })
  },
  methods: {
    selectedFile() {
      this.imageError = '';
      console.log(this.$refs.myfile)
      this.file = this.$refs.myfile[0].files[0]
      this.imageForm.append('file', this.file)

      let reader = new FileReader();
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
    ...mapActions({
      addtab: "addTabs",
      getReference: "getReference",
      deleteReferenceAction: "deleteReference",
      updateReferenceAction: "updateReference",
      addImage: "addImage"
    }),
    getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
    cancel() {
      this.selectId = ''
      this.edit = false
      this.getReference().then(() => {
        this.references = this.getterReferences
      })
    },
    deleteReference(id) {
      this.deleteReferenceAction(id).then(() => {
        this.getReference().then(() => {
          this.references = this.getterReferences
        })
      })
    },
    updateReference(item) {
      let dltimg = item.imageUrl
      item.imageUrl = this.file.name + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + new Date().getHours() + '.jpg'

      this.updateReferenceAction({
        'id': this.selectId,
        'item': item,
        'dltimg': dltimg
      }).then(() => {
        this.addImage(this.imageForm)
        this.getReference().then(() => {
          this.references = this.getterReferences
        })
      })
    }
  }

}
</script>
<style lang="less" scoped>
.card {
    width:20%;
    text-align: center;
    margin: 0 2rem 2rem 2rem;
    float: left;
    background-color: #FAFAFA;
    img{
      padding: 1rem;
    }
  }


  .btn {
    margin: 0.5rem;
  }

</style>
