<template>
<div>
    <div class="add" >
        <button v-if="!isAdd" @click="isAdd=true" class="btn btn-sm btn-info"> Ekle <i class="fas fa-user-plus"></i></button>
    </div>
   <div v-if="isAdd" class="card new-image">
    <img v-if="!show" :src="getImage('1300x800.png')" alt="..." class="img-thumbnail">
    <img v-if="show" :src="prewImage" class="img-thumbnail">
   <div class="custom-file ">
        <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"  v-on:change="selectedFile"/>
         <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
    </div>
    <div class="card-text">
    <button class="btn btn-sm btn-success" @click="addGalery()">save</button>
     <button class="btn btn-sm btn-warning" @click="isAdd=false">Cancel</button>
    </div>
   </div>
  <div class="card" v-for="item in getterGalery" :key="item.id">
    <img :src="getImage(item.imgUrl)" alt="..." class="img-thumbnail">
    <div class="card-text">
   <button class="btn btn-sm btn-danger" @click="deleteGalery(item)">Delete</button>
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
.card{
    width:32%;
    text-align: center;
    margin:0.5rem;
    float: left;
}
.btn{
    width: 33%;
    text-align: center;
    margin: 0.5rem;
}
.add{
    
    text-align: center;
    .btn{
        width: 10%;
    }
}
.new-image{
    float: none;
    width: 30%;
 
}   
</style>