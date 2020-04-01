<template>
    <div>
        <div class="add-btn-container">
            <button v-if="!isAdd" @click="isAdd=true" class="btn btn-sm btn-info"> Ekle <i
                    class="fas fa-user-plus"></i></button>
        </div>
        <div v-if="isAdd" class="add-image-container">
            <div class="card">
                <div class="album-image">
                    <img v-if="!show" :src="getImage('1300x800.png')" alt="..." class="album-image">
                    <img v-if="show" :src="prewImage" class="album-image">
                </div>
                <div class="input-container">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
                            v-on:change="selectedFile" />
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <div class="btn-container">
                    <button class="btn btn-sm btn-warning" @click="isAdd=false">Cancel <i
                            class="fas fa-arrow-left"></i></button>
                    <button class="btn btn-sm btn-success" @click="addGalery()">Save <i
                            class="fas fa-save"></i></button>

                </div>
            </div>
        </div>
        <div class="album-container">
            <div class="card" v-for="item in getterGalery" :key="item.id">
                <div class="album-image">
                    <img :src="getImage(item.imgUrl)" alt="Sektörel albüm." class="album-image">
                </div>
                <div class="btn-container">
                    <button class="btn btn-sm btn-danger" @click="deleteGalery(item)"><i
                            class="fas fa-trash"></i></button>

                </div>
            </div>

        </div>
    </div>
    </template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            isAdd:false,
            prewImage:'',
            show:false,
            tab: [{
                        link: '/sectors',
                        label: 'Sektörler'
                    },
                    {
                        link: '/sectorImage',
                        label: 'Sektör Galeri'
                    }
                ],
                galery: {
                image:new FormData(),
                imgUrl:''

            }
        }
    },
     methods: {
      getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
    ...mapActions({
        addGaleryAction:"addGalery",
        addGaleryImage:"addGaleryImage",
        getGalery:"getGalery",
        addtab:"addTabs",
        deleteGaleryAction:"deleteGalery"
    }),
    deleteGalery(item){
        this.deleteGaleryAction({'id':item._id,'img':item.imgUrl}).then(()=>{
            this.getGalery()
        })
    },
    addGalery(){
        this.addGaleryAction(this.galery).then(()=>{
            this.addGaleryImage(this.galery.image)
            this.getGalery()
            this.isAdd=false
        }).catch(err=>{console.log(err)})
    },
      selectedFile() {
      this.imageError = '';
      
      // const MAX_WIDTH = 1000;
      // const MAX_HEIGHT = 3000;
      var file = '' 
     console.log(this.$refs.file.files)
      file = this.$refs.file.files[0]
      this.galery.image.append('file',file)
      this.galery.imgUrl = file.name+ '-' +new Date().getUTCMonth()+'-'+new Date().getUTCDay()+'-'+new Date().getHours()+'.jpg'
      if (!file || file.type.indexOf('image/') !== 0) return;
 
      
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = evt => {
        let img = new Image();
        img.onload = () => {          
        }
          this.show=true
          this.prewImage=evt.target.result
          img.src = evt.target.result;
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    }
    },
    mounted(){
         this.addtab(this.tab)
        this.getGalery().then(()=>{
            console.log(this.getterGalery)
        })
    },
    computed:{
        ...mapGetters({
            getterGalery:"getterGalery"
        })
    }
}
</script>

<style lang="less" scoped>
.add-btn-container {
    width: 100%;
    text-align: center;

    .btn {
        width: 6rem;
    }
}

.card {
    width: 29%;
    height: 33rem;
    margin: 0 2rem 2rem 2rem;
    float: left;
    background-color: #FAFAFA;

    .album-image {
        width: 100%;
        height: 100%;
        padding: 1rem;

        img {
            width: 100%;
            height: auto;
            cursor: pointer;

        }
    }

    .btn-container {
        position: relative;
        bottom: 1rem;
        width: 100%;
        text-align: center;

        .btn {
            margin: 0.5rem;
            padding: 0.3 0.5rem;
        }
    }
}

.input-container {
        position: relative;
        bottom: 1rem;
        width: 100%;
        text-align: center;
        padding: 1rem;

}



  

</style>