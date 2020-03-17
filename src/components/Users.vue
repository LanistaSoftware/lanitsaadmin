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
          <td scope="col"><select class="custom-select" v-model="user.isAdmin">
  <option value="0">Web Master</option>
  <option value="1">Admin</option>
  <option value="2">User</option>
</select></td>
          <td scope="col"><button  @click="addUser" class="btn btn-sm btn-success">Save</button>
          <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel </button>
          </td>
        </tr>
        <tr v-for="(item,index) in Users" :key="item._id">
          <th scope="row">{{index+1}}</th>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true" >{{item.Name}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.LastName}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.email}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.Phone}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{adminSelect(item.isAdmin)}}</td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.Name"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.LastName"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.email"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.Phone"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><select class="custom-select" v-model="item.isAdmin">
           <option selected></option>
           <option value="0">Web Master</option>
           <option value="1">Admin</option>
           <option value="2">User</option>
  </select></td>
          <td>
            <button v-if="selectedItem==item._id ? isEdit=false : isEdit=true" @click="selectedItem=item._id"
              class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
            <button @click="updateUser(item._id,item)" v-if="selectedItem==item._id ? isEdit=true : isEdit=false" class="btn btn-sm btn-success"> Save
            </button>
            <button @click="deleteUser(index,item._id)" class="btn btn-sm btn-danger"> Delete <i class="fas fa-user-minus"></i></button>
            <button v-if="selectedItem==item._id ? isEdit=true : isEdit=false" @click="selectedItem=null"
              class="btn btn-sm btn-warning"> Cancel </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
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
       
        Users: []
      }
    },
    methods: {
      deleteUser(index,id) {
        this.Users.splice(index, 1);
        axios.delete('http://localhost:3000/api/user/'+id).then(res=>{
          console.log(res)
        })
      },
   
      addUser() {
        axios.post('http://localhost:3000/api/user', this.user).then((res) => {
          this.isAdd=false
          this.getUser()
          console.log(res)
          alert(res.statusText)
        }).catch(err => {
          console.log(err.message)
          alert(err.message)
        })
      },
      updateUser(id,edit) {
        axios.put('http://localhost:3000/api/user/'+id,edit).then(res=>{
          this.selectedItem=null
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      },
      
      getUser(){
          axios.get('http://localhost:3000/api/user').then(res=>{
       this.Users=res.data.users
       console.log(res)
     }).catch(err=>{
       console.log(err)
     })
      },
        adminSelect(auth){
        if (auth == 0) {
          return 'Web Master'
        } else if (auth == 1) {
          return 'Admin'
        } else {
          return 'User'
        }

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
       this.getUser()
   
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