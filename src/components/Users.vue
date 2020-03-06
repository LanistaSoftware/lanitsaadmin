<template>
  <div class="users">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">İsim</th>
          <th scope="col">Soyisim</th>
          <th scope="col">Email</th>
          <th scope="col">Telefon</th>
          <th scope="col">Admin</th>
          <th scope="col" v-if="!isAdd"><button @click="isAdd=true" class="btn btn-sm btn-info"> Add <i class="fas fa-user-plus"></i></button></th>

        </tr>
      </thead>
      <tbody>
        <tr v-if="isAdd">
          <td scope="col">#</td>
          <td scope="col"><input type="text"></td>
          <td scope="col"><input type="text"></td>
          <td scope="col"><input type="email"></td>
          <td scope="col"><input type="phone"></td>
          <td scope="col"><button class="btn btn-sm btn-success">Save</button>
          <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel </button>
          </td>
        </tr>
        <tr v-for="(item,index) in Users" :key="item.id">
          <th scope="row">1</th>
          <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.name}}</td>
          <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.surname}}</td>
          <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.email}}</td>
          <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.phone}}</td>
          <td v-if="selectedItem==item.id ? isEdit=false : isEdit=true">{{item.isAdmin}}</td>
          <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text" v-model="item.name"></td>
          <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text" v-model="item.surname"></td>
          <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text" v-model="item.email"></td>
          <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="text" v-model="item.phone"></td>
          <td v-if="selectedItem==item.id ? isEdit=true : isEdit=false"><input type="checkbox" v-model="item.isAdmin"></td>
          <td>
            <button v-if="selectedItem==item.id ? isEdit=false : isEdit=true" @click="selectedItem=item.id"
              class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
            <button v-if="selectedItem==item.id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success"> Save
            </button>
            <button @click="deleteUser(index)" class="btn btn-sm btn-danger"> Delete <i class="fas fa-user-minus"></i></button>
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
        selectedItem: null,
        isEdit:false,
        isDelete:false,
        isAdd:false,
        Users: [{
            id: 0,
            name: "Bayhan",
            surname: "Bayramoğlu",
            email: "bayhanbayramoglu@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
            isAdmin:true
          },
          {
            id: 1,
            name: "Ömer",
            surname: "Erdemir",
            email: "ömer@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
            isAdmin:true
          },
          {
            id: 2,
            name: "Cihan ",
            surname: "Bozkurt",
            email: "cihan@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
             isAdmin:true
          },
        ]
      }
    },
    methods:{
      deleteUser(index){
          this.Users.splice(index,1);
          console.log(this.Users)
      }
    }   
  }
</script>
<style lang="less" scoped>
.users{
  width: 100%;
 
}
  table {
    width: 100%;
    margin-top: 3rem;
  }

  .color {
    color: red;
  }

  </style>