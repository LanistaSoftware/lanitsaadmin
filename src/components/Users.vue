<template>
  <div class="users">
    <table class="table table-hover ">
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
          <td scope="col"><input type="text" v-model="user.name"></td>
          <td scope="col"><input type="text" v-model="user.surname"></td>
          <td scope="col"><input type="email" v-model="user.email"></td>
          <td scope="col"><input type="phone" v-model="user.phone"></td>
          <td scope="col"><input type="checkbox"  v-model="user.isAdmin"></td>
          <td scope="col"><button  @click="addUser" class="btn btn-sm btn-success">Save</button>
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
  import axios from 'axios'
  import Axios from 'axios';
  export default {

    data() {
      return {
        tab: [{
          link: '/users',
          label: 'Kullanıcılar'
        }, ],
        selectedItem: null,
        isEdit: false,
        isDelete: false,
        isAdd: false,
        user: {
          name: '',
          surname: '',
          email: '',
          phone: '',
          isAdmin: null,

        },
        Users: [{
            id: 0,
            name: "Bayhan",
            surname: "Bayramoğlu",
            email: "bayhanbayramoglu@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
            isAdmin: true
          },
          {
            id: 1,
            name: "Ömer",
            surname: "Erdemir",
            email: "ömer@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
            isAdmin: true
          },
          {
            id: 2,
            name: "Cihan ",
            surname: "Bozkurt",
            email: "cihan@gmail.com",
            phone: "0 506 215 07 00",
            password: "123456",
            isAdmin: true
          },
        ]
      }
    },
    methods: {
      deleteUser(index) {
        this.Users.splice(index, 1);
        console.log(this.Users)
      },
      addUser() {
        axios.post('http://localhost:3000/api/user', this.user).then((res) => {
          console.log(res)
          alert(res.statusText)
        }).catch(err => {
          console.log(err.message)
          alert(err.message)
        })

      },
      checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail :function (email) {
      var re = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
      return re.test(email);
    }
    
    },
    created() {
      this.$emit('tab', this.tab)
    },
  }
</script>
<style lang="less" scoped>
@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@btntextcolor:#eee;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;

  table {
    width: 100%;
    background-color:  #fafafa ;
     border:1px solid #dee2e6 ;
  }


  </style>