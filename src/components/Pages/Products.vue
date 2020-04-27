<template>
  <div class="products">
    <table class="table table-hover ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ürün Adı</th>
          <th scope="col">Ürün Sektör</th>
          <th scope="col">Ürün Grubu</th>
          <th scope="col">Ürün Geniş Açıklama</th>
          <th scope="col" v-if="!isAdd"><button @click="isAdd=true" class="btn btn-sm btn-info"> Add <i
                class="fas fa-plus"></i></button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isAdd">
          <td scope="col">#</td>
          <td scope="col"><input type="text" class="form-control" v-model="product.prdoudctName"></td>
          <td scope="col"><select class="form-control" id="exampleFormControlSelect1" v-model="product.prdoudctGroup">
              <option v-for="sector in getterSector" :key="sector._id">{{sector.sectorname}}</option>
            </select></td>
          <td scope="col"><input type="text" class="form-control" v-model="product.productDesc"></td>
          <td scope="col"><textarea type="text" class="form-control" v-model="product.productMoreDesc"></textarea></td>
          <td scope="col"><button class="btn btn-sm btn-success" @click="addProduct">Save <i
                class="fas fa-save"></i></button>
            <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel <i
                class="fas fa-arrow-left"></i></button>
          </td>
        </tr>
        <tr v-for="(item,index) in products" :key="item.id">
          <th scope="row">{{index+1}}</th>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.prdoudctName}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.prdoudctGroup}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.productDesc}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.productMoreDesc}}</td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.prdoudctName">
          </td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false">
            <select class="form-control" id="exampleFormControlSelect1" v-model="item.prdoudctGroup">
              <option v-for="sector in getterSector" :key="sector._id">{{sector.sectorname}}</option>
            </select>
          </td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.productDesc">
          </td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><textarea type="text" class="form-control"
              v-model="item.productMoreDesc"></textarea></td>
          <td>
            <button v-if="selectedItem==item._id ? isEdit=false : isEdit=true" @click="selectedItem=item._id"
              class="btn btn-sm btn-primary"> Edit <i class="fas fa-edit"></i></button>
            <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success"
              @click="updateProduct(item)"> Save <i class="fas fa-save"></i>
            </button>
            <button @click="deleteProduct(item._id)" class="btn btn-sm btn-danger"> Delete <i
                class="fas fa-trash-alt"></i></button>
            <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" @click="cancel"
              class="btn btn-sm btn-warning"> Cancel <i class="fas fa-arrow-left"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        product:{
          prdoudctName:'',
          prdoudctGroup:'',
          productDesc:'',
          productMoreDesc:'',
        },
         tab:[ 
          {link:'/products',label:'Ürünler' },
          {link:'/pigments',label:'Pigmentler' },
         ],
        selectedItem: null,
        isEdit:false,
        isDelete:false,
        isAdd:false,
      }
    },
    methods:{
      deleteProduct(id){
        this.deleteProductAction(id).then(()=>{
          this.getProduct()
        })
      },
        addProduct() {
          this.addProductAction(this.product).then(() => {
            this.isAdd = !this.isAdd
            this.product.prdoudctName = ''
            this.product.prdoudctGroup = ''
            this.product.productDesc = ''
            this.product.productMoreDesc = ''
            this.getProduct()
          })
        },
        updateProduct(item){
          this.updateProductAction({'item':item,'id':item._id}).then(()=>{
            this.selectedItem=null
            this.getProduct()
          })
        },
        cancel(){
          this.selectedItem=null
          this.getProduct()
        },
        ...mapActions({
          addtab: "addTabs",
          addProductAction: "addProduct",
          getProduct: "getProduct",
          updateProductAction: "updateProduct",
          deleteProductAction:"deleteProduct",
          getSectors:"getSectors",
        })
      },
      created() {
          this.addtab(this.tab)
          this.getProduct()
          this.getSectors()
        },
        computed: {
          ...mapGetters({
            products: "getterProduct",
            getterSector:"getterSector",
          })
    }
  }
</script>
<style lang="less" scoped>
table{
  background-color: #fafafa;
  width: 100%;
  border:1px solid #dee2e6 ;
  .btn{
    width:5rem;
  }
}
</style>
