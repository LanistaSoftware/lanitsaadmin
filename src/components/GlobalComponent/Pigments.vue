<template>
  <div class="products">
      <table class="table table-hover ">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Color (% 2.0)</th>
                  <th scope="col">Migration Fastness</th>
                  <th scope="col">Heat Fastness (% 0.1)</th>
                  <th scope="col">Light Fastness (% 0.1)</th>
                  <th scope="col" v-if="!isAdd"><button @click="isAdd=true" class="btn btn-sm btn-info"> Add <i
                              class="fas fa-user-plus"></i></button></th>
              </tr>
          </thead>
          <tbody>
              <tr v-if="isAdd">
                  <td scope="col">#</td>
                  <td scope="col"><input type="text" class="form-control" v-model="pigment.prdoudctName"></td>
                  <td scope="col"><input type="text" class="form-control" v-model="pigment.color"></td>
                  <td scope="col"><input type="text" class="form-control" v-model="pigment.migrationFastness"></td>
                  <td scope="col"><input type="text" class="form-control" v-model="pigment.heatFastness"></td>
                  <td scope="col"><input type="text" class="form-control" v-model="pigment.lightFastness"></td>
                  <td scope="col"><button class="btn btn-sm btn-success" @click="addPigment">Save</button>
                      <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel </button>
                  </td>
              </tr>
              <tr v-for="(item,index) in getterPigment" :key="item.id">
                  <th scope="row">{{index+1}}</th>
                  <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.prdoudctName}}</td>
                  <td :style="{color:item.color}" v-if="selectedItem==item._id ? isEdit=false : isEdit=true">
                      {{item.color}}</td>
                  <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.migrationFastness}}</td>
                  <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.heatFastness}}</td>
                  <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.lightFastness}}</td>
                  <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.prdoudctName" class="form-control"></td>
                  <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.color" class="form-control"></td>
                  <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.migrationFastness" class="form-control"></td>
                  <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.heatFastness" class="form-control"></td>
                  <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.lightFastness" class="form-control"></td>

                  <td>
                      <button v-if="selectedItem==item._id ? isEdit=false : isEdit=true" @click="selectedItem=item._id"
                          class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
                      <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success" @click="updatePigment(item)">
                          Save
                      </button>
                      <button @click="deletePigment(item._id)" class="btn btn-sm btn-danger"> Delete <i
                              class="fas fa-user-minus"></i></button>
                      <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" @click="selectedItem=null"
                          class="btn btn-sm btn-warning"> Cancel </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
import {
    mapActions, mapGetters
} from 'vuex'
export default {
    data() {
        return {
            tab: [{
                    link: '/products',
                    label: 'Ürünler'
                },
                {
                    link: '/pigments',
                    label: 'Pigmentler'
                },
            ],
            selectedItem: null,
            isEdit: false,
            isDelete: false,
            pigment:{
                prdoudctName:'',
                color:'',
                migrationFastness:'',
                heatFastness:'',
                lightFastness:''
            },
            isAdd: false,
        }
    },
    methods: {
        deletePigment(id) {
            this.deletePigmentAction(id).then(()=>{
                this.getPigment()
            })    
        },
        updatePigment(item){
            this.updatePigmentAction({'item':item,'id':item._id}).then(()=>{
                this.isEdit=false
                this.selectedItem=false
                this.getPigment()
            })
        },
        addPigment(){
            this.addPigmentAction(this.pigment).then(()=>{
                this.isAdd=false
                this.pigment.prdoudctName=''
                this.pigment.color=''
                this.pigment.migrationFastness=''
                this.pigment.heatFastness=''
                this.pigment.lightFastness=''
                this.getPigment()
            })
        },
        ...mapActions({
            addtab: "addTabs",
            addPigmentAction:"addPigment",
            getPigment:"getPigment",
            updatePigmentAction:"updatePigment",
            deletePigmentAction:"deletePigment",
        })
    },
    created() {
        this.addtab(this.tab)
        this.getPigment()
    },
    computed:{
        ...mapGetters({
            getterPigment:"getterPigment"
        })
    }
}
</script>
<style lang="less" scoped>
table{
  background-color: #fafafa;
  width: 100%;
  border:1px solid #dee2e6 ;
}
</style>
