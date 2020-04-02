<template>
  <div class="users">
    <div v-if="passFormView" class="password-form">
        <PassForm :edit="isEdit"/>
    </div>
    <table class="table table-hover ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">İsim</th>
          <th scope="col">Soyisim</th>
          <th scope="col">Email</th>
          <th scope="col">Telefon</th>
          <th scope="col">Admin</th>
          <th scope="col" v-if="!isAdd"><button @click="isAdd=true" class="btn btn-sm btn-info"> Add <i
                class="fas fa-user-plus"></i></button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isAdd">
          <td scope="col">#</td>
          <td scope="col"><input type="text" v-model="user.name"></td>
          <td scope="col"><input type="text" v-model="user.surname"></td>
          <td scope="col"><input type="email" v-model="user.email"></td>
          <td scope="col"><input type="phone" v-model="user.phone"></td>
          <td scope="col"><button @click="passFormView = !passFormView" class="btn btn-sm" :class="passClass">Password <i class="fas fa-key ml-2"></i></button>
          </td>
          <td scope="col"><select class="custom-select" v-model="user.isAdmin">
              <option value="0">Web Master</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select></td>
          <td scope="col"><button @click="addUser" class="btn btn-sm btn-success">Save <i
                class="fas fa-save"></i></button>
            <button @click="isAdd=!isAdd" class="btn btn-sm btn-warning"> Cancel <i
                class="fas fa-arrow-left"></i></button>
          </td>
        </tr>
        <tr v-for="(item,index) in getUser" :key="item._id">
          <th scope="row">{{index+1}}</th>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.Name}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.LastName}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.email}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{item.Phone}}</td>
          <td v-if="selectedItem==item._id ? isEdit=false : isEdit=true">{{adminSelect(item.isAdmin)}}</td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.Name"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.LastName">
          </td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.email"></td>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><input type="text" v-model="item.Phone"></td>
            <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false" scope="col"><button @click="passFormView = !passFormView" class="btn btn-sm" :class="passClass">Password <i class="fas fa-key ml-2"></i></button>
          <td v-if="selectedItem==item._id ? isEdit=true : isEdit=false"><select class="custom-select"
              v-model="item.isAdmin">
              <option selected></option>
              <option value="0">Web Master</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select></td>
          <td>
            <button v-if="selectedItem==item._id ? isEdit=false : isEdit=true" @click="selectedItem=item._id"
              class="btn btn-sm btn-primary"> Edit <i class="fas fa-user-edit"></i></button>
            <button @click="updateUser(item._id,item)" v-if="selectedItem==item._id ? isEdit=true : isEdit=false"
              class="btn btn-sm btn-success"> Save
            </button>
            <button @click="deleteUser(index,item._id)" class="btn btn-sm btn-danger"> Delete <i
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
  import {mapActions,mapGetters} from 'vuex'
  import PassForm from '../GlobalComponent/PasswordForm'
  export default {
    components:{
      PassForm
    },
    data() {
      return {
        tab: [{
          link: '/users',
          label: 'Kullanıcılar'
        }, ],
        selectedItem: null,
          isEdit: false,
          oldpass:'',
          isDelete: false,
          isAdd: false,
          user: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password:'',
            isAdmin: null,
          },
          passFormView:false,
          passClass:'btn-secondary'
        }
        },
        methods: {
            ...mapActions({
              addtab: "addTabs",
              getUsersaction: "getUser",
              deleteUserAction: "deleteUser",
              addUserAction: "addUser",
              updateUserAction:"updateUser"
            }),
            addUser() {
              this.addUserAction(this.user).then(() => {
                this.user={}
                this.getUsersaction().then(() => {
                  this.isAdd = false
                }).catch(err => {
                  alert(err)
                })
              }).catch(err => {
                alert(err)
              })
            },
            deleteUser(index, id) {
              this.deleteUserAction(id).then(()=>{
                this.getUsersaction()
              }).catch(err=>{
                alert(err)
              })
            },
            updateUser(id, edit) {
             
              console.log(this.getPassword)
              if (this.getPassword!=null) {
                edit.Password = this.getPassword
              }
              this.edit+=this.oldpass
                this.oldpass = this.getOldPass
             this.updateUserAction({'id':id,'edit':edit,'oldpass':this.oldpass}).then(() => {
                this.selectedItem = null
                this.$store.commit('setPassword',null) 
               this.$store.commit('setOldPass',null)
                this.getUsersaction()
              }).catch(err => {
                alert(err)
              })
            
              },
          
            adminSelect(auth) {
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
            // validEmail: function (email) {
            //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$;
            //   return re.test(email);
            // }
          },
          computed: {
            ...mapGetters([
              'getPassword',
              'getUser',
              'getOldPass'
            ])
          },
          watch:{
            getPassword(){
            this.passClass='btn-success'
            this.user.password = this.getPassword
            setTimeout(() => {
              this.passFormView=false;
            }, 700);
            }
          },

          mounted() {
            this.addtab(this.tab)
            this.getUsersaction()
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
    td{
      vertical-align: middle;
    }
  }

.password-form{
  width: 100%;
  padding: 1rem 0;
  text-align: center;

}
  </style>