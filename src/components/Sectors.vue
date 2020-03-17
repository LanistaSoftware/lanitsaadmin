<template>

  <div class="products">
    <button @click="isAdd=true" class="btn btn-sm btn-info"> Ekle <i class="fas fa-user-plus"></i></button>
    <div v-if="isAdd" class="card m-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img  :src="imagePreview"  class="card-img p-2 " alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title"><input type="text" class="form-control"></div>
            <div class="card-title"><textarea  class="form-control" rows="10"></textarea></div>
          </div>
        </div>
        <div class="custom-file col-md-4 m-2">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        <div class="group col">
          <button class="btn btn-sm btn-success"> Save
          </button>
          <button class="btn btn-sm btn-warning " @click="imagePreview='http://via.placeholder.com/700x400',isAdd=false;"> Cancel </button>
        </div>

      </div>
    </div>
    <div class="card m-3" v-for="(item,index) in Sectors" :key="item.id">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img  v-if="selectedItem==item.id & showPreview"  :src="imagePreview" class="card-img p-2 ">
          <span v-if="selectedItem==item.id & showPreview"  class="img-text">
            Old İmage
          </span>
          <img   :src="item.Sectorimage" class="card-img p-2" :class="prewimg">
    
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 v-if="selectedItem==item.id ? isEdit=false : isEdit=true" class="card-title">{{item.Sectortitle}}</h5>
            <p v-if="selectedItem==item.id ? isEdit=false : isEdit=true" class="card-text">{{item.Sectordesc}}</p>
            <div v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="card-title"><input type="text"
                v-model="item.Sectortitle" class="form-control"></div>
            <div v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="card-title"><textarea 
                class="form-control" v-model="item.Sectordesc" rows="7"></textarea></div> 
          </div>
        </div>
      </div>
      <div class="">
        <div v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="custom-file col-md-4 m-2">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        <div class="group">
          <button v-if="selectedItem==item.id ? isEdit=false : isEdit=true" @click="Edit(item.id)"
            class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
          <button v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success"> Save
          </button>
          <button @click="deleteUser(index)" class="btn btn-sm btn-danger"> Delete <i
              class="fas fa-user-minus"></i></button>
          <button v-if="selectedItem==item.id ? isEdit=true : isEdit=false"
            @click="cancel" class="btn btn-sm btn-warning"> Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
      imagePreview: "http://via.placeholder.com/700x400",
      tab: [{
        link: '/sectors',
        label: 'Sektörler'
      }],
      Sectors: [{
          id: 0,
          Sectortitle: "A-8",
          Sectorimage: "https://akartextile.com/media/productionsliders/dsc07607_20160520154122.jpg",
          Sectordesc: "asdasdasd",


        },
        {
          id: 1,
          Sectortitle: "A-8",
          Sectorimage: "https://akartextile.com/media/productionsliders/dsc07607_20160520154122.jpg",
          Sectordesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolore sed autem provident quis, culpa vitae iure, veniam tenetur illo impedit! Iusto commodi quos natus quisquam facilis ratione vitae! Eum.",


        },
        {
          id: 2,
          Sectortitle: "A-8",
          Sectorimage: "https://akartextile.com/media/productionsliders/dsc07607_20160520154122.jpg",
          Sectordesc: "SİLİKON",
        },
      ]
    }
  },
  created() {
    this.$emit('tab', this.tab)
  },
  methods: {

    Edit(e) {
    this.selectedItem=e;
    this.showPreview=false;
    this.prewimg='prew-img'

    },
    deleteUser(index) {
      this.Sectors.splice(index, 1);
    

    },
    cancel(){
   
     this.prewimg=null
     this.selectedItem=null ,
     this.showPreview=false
     this.isEdit=false
    },
   handleFileUpload(){
    /*
      Set the local file variable to what the user has selected.
    */
   if(this.isAdd){
     this.file = this.$refs.file.files[0];
   }else{
      this.file = this.$refs.file[0].files[0];
   }
   
    
    /*
      Initialize a File Reader object
    */
    let reader  = new FileReader();

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
      }
  },

}

</script>
<style lang="less" scoped>
.products{
  text-align: center;
}
.card{
  text-align: justify;
  .btn{
    margin: 1rem;
  }
}
.prew-img{
  filter: blur(3px);
}
  .group{
    text-align: right;
    float: right;
  }
  .img-text{
    position: absolute  ;
    z-index: 200;
    left: 11rem;
    bottom: 10rem;
    font-size: 2rem;
    color:#bd2130;
    transform: rotate(40deg);
  }

  </style>