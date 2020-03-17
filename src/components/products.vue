<template>
  <div class="products">
      <table class="table table-hover ">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ürün Adı</th>
                  <th scope="col">Ürün Grub</th>
                  <th scope="col">Ürün Açıklaması</th>
                  <th scope="col">Ürün Geniş Açıklama</th>
                  <th scope="col" v-if="!isAdd"><button @click="isAdd=true" class="btn btn-sm btn-info"> Add <i
                              class="fas fa-user-plus"></i></button></th>
              </tr>
          </thead>
          <tbody>
              <tr v-if="isAdd">
                  <td scope="col">#</td>
                  <td scope="col"><input type="text"></td>
                  <td scope="col"><input type="text"></td>
                  <td scope="col"><input type="text"></td>
                  <td scope="col"><input type="text"></td>
                  <td scope="col"><button class="btn btn-sm btn-success">Save</button>
                      <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel </button>
                  </td>
              </tr>
              <tr v-for="(item,index) in Users" :key="item.id">
                  <th scope="row">1</th>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.productname}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.productgroup}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.productdesc}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.productmore}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.productname"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false">
                      <select class="form-control" id="exampleFormControlSelect1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.productdesc"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><textarea type="text"
                          class="form-control" v-model="item.productmore"></textarea></td>
                  <td>
                      <button v-if="selectedItem==item.id ? isEdit=false : isEdit=true" @click="selectedItem=item.id"
                          class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
                      <button v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success">
                          Save
                      </button>
                      <button @click="deleteUser(index)" class="btn btn-sm btn-danger"> Delete <i
                              class="fas fa-user-minus"></i></button>
                      <button v-if="selectedItem==item.id ? isEdit=true : isEdit=false" @click="selectedItem=null"
                          class="btn btn-sm btn-warning"> Cancel </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         tab:[ 
          {link:'/products',label:'Ürünler' }
         ],
        selectedItem: null,
        isEdit:false,
        isDelete:false,
        isAdd:false,
        Users: [{
            id: 0,
            productname: "A-8",
            productgroup: "Tekstil",
            productdesc: "SİLİKON",
            productmore: "SİLİKON2",
      
          },
      {
            id: 1,
            productname: "A-8",
            productgroup: "Tekstil",
            productdesc: "SİLİKON",
            productmore: "SİLİKON2",
      
          },
          {
            id: 2,
            productname: "A-8",
            productgroup: "Tekstil",
            productdesc: "SİLİKON",
            productmore: "SİLİKON2",
      
          },
        ]
      }
    },
    methods:{
      deleteUser(index){
          this.Users.splice(index,1);
          console.log(this.Users)
      }
    },
     created(){
      this.$emit('tab',this.tab)
    },   
  }
</script>
<style lang="less" scoped>
table{
  background-color: #fafafa;
  width: 100%;
  border:1px solid #dee2e6 ;
}
</style>
