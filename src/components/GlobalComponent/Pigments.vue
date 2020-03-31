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
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.pigmentName}}</td>
                  <td :style="{color:item.pigmentColor}" v-if="selectedItem==item.id ? isEdit=false : isEdit=true">
                      {{item.pigmentColor}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.pigmentMigrations}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.pigmentHeat}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.pigmentLight}}</td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.pigmentName"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.pigmentColor"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.pigmentMigrations"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.pigmentHeat"></td>
                  <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text"
                          v-model="item.pigmentLight"></td>

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
import {
    mapActions
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
            isAdd: false,
            Users: [
                {
                    id: 0,
                    pigmentName: "G Line Yellow L 1000 CP",
                    pigmentColor: '#EEAA10',
                    pigmentMigrations: "5",
                    pigmentHeat: "200",
                    pigmentLight: "7",

                },
                {
                    id: 1,
                    pigmentName: "G Line Yellow L 1000 CP",
                    pigmentColor: "#128585",
                    pigmentMigrations: "5",
                    pigmentHeat: "200",
                    pigmentLight: "7",

                },
                {
                    id: 2,
                    pigmentName: "G Line Yellow L 1000 CP",
                    pigmentColor: "#20EE20",
                    pigmentMigrations: "5",
                    pigmentHeat: "200",
                    pigmentLight: "7",

                },
            ]
        }
    },
    methods: {
        deleteUser(index) {
            this.Users.splice(index, 1);
        },
        ...mapActions({
            addtab: "addTabs",
        })
    },
    created() {
        this.addtab(this.tab)
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
