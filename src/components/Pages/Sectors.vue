<template>

  <div class="sectors">
    <button v-if="!isAdd" @click="isAdd=true" class="btn btn-sm btn-info"> Ekle <i class="fas fa-plus"></i></button>
    <div v-if="isAdd" class="card m-3">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card-body">
            <div class="card-title">
               <label class="label" for="inputGroupFile01">Sektör Adı</label>
              <input type="text" class="form-control" v-model="sector.sectorname"></div>
            <div class="card-title">
              <label class="label" for="inputGroupFile01">Sektör Açıklaması</label>
              <textarea  class="form-control" rows="6" v-model="sector.sectordescription"></textarea></div>
          </div>
        </div>
        <div class="group col">
          <button class="btn btn-sm btn-success" @click="addSector"> Save <i class="fas fa-save"></i>
          </button>
          <button class="btn btn-sm btn-warning " @click="imagePreview='http://via.placeholder.com/700x400',isAdd=false;"> Cancel <i class="fas fa-arrow-left"></i></button>
        </div>
      </div>
    </div>
    <div class="card m-3" v-for="(item) in getterSector" :key="item.id">
      <div class="row no-gutters">
       
        <div class="col-md-12">
          <div class="card-body">
            <h5 v-if="selectedItem==item._id ? isEdit=false : isEdit=true" class="card-title">{{item.sectorname}}</h5>
            <p v-if="selectedItem==item._id ? isEdit=false : isEdit=true" class="card-text">{{item.sectordescription}}</p>
             <label v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="label" for="inputGroupFile01">Sektör Adı</label>
            <div v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="card-title"><input type="text"
                v-model="item.sectorname" class="form-control" ></div>
            <div v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="card-title">
                <label v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="label" for="inputGroupFile01">Sektör Açıklaması</label>
              <textarea 
                class="form-control" v-model="item.sectordescription" rows="7"></textarea></div> 
          </div>
        </div>
      </div>
      <div class="">
        <div class="group">
          <button v-if="selectedItem==item._id ? isEdit=false : isEdit=true" @click="Edit(item._id)"
            class="btn btn-sm btn-primary"> Edit <i class="fas fa-edit"></i></button>
          <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success" @click="updateSector(item,item._id)"> Save <i class="fas fa-save"></i>
          </button>
          <button @click="deleteSector(item._id)" class="btn btn-sm btn-danger"> Delete <i
              class="fas fa-trash-alt"></i></button>
          <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false"
            @click="cancel" class="btn btn-sm btn-warning"> Cancel <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
export default {
  
  data() {
    return {
      selectedItem: null,
      isEdit: false,
      prewimg:null,
      isDelete: false,
      isAdd: false,
      file: '',
      showPreview: false,
      sector:{
        sectordescription:'',
        sectorname:'',
      },
      imagePreview: "http://via.placeholder.com/700x400",
      tab: [{
        link: '/sectors',
        label: 'Sektörler'
      },
      {
        link:'/sectorImage',
        label:'Sektör Galeri'
      }      
      ],
  }},
  created() {
      this.addtab(this.tab)
      this.getSectors().then(()=>{
    })
  },
  methods: {
     ...mapActions({
           addtab:"addTabs",
           addSectorAction:"addSector",
           getSectors:"getSectors",
           deleteSectorAction:"deleteSector",
           updateSectorAction:"updateSector",
         }),
         addSector(){
           this.addSectorAction(this.sector).then(()=>{
            this.sector.sectordescription=''
            this.sector.sectorname=''
            this.getSectors()
            this.isAdd=false
          })
        },
        updateSector(sector,id){
          this.updateSectorAction({'sector':sector,'id':id}).then(()=>{
              this.getSectors()
              this.cancel()
          })
        },

    Edit(e) {
    this.selectedItem=e;
    },
    deleteSector(id) {
      this.deleteSectorAction(id).then(()=>{
        this.getSectors()
      })
    },
    cancel(){
   
     this.prewimg=null
     this.selectedItem=null ,
     this.showPreview=false
     this.getSectors()
     this.isEdit=false
    },
  },

  computed:{
    ...mapGetters({
      getterSector:"getterSector"
    })
  }

}

</script>
<style lang="less" scoped>
.sectors{
  text-align: center;
}
.card{
  text-align: justify;
  .btn{
    margin: 1rem;
  }
}
.group{
  text-align: right;
  float: right;
  }

  </style>