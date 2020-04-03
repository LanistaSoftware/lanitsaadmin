<template>
<div>
    <div class="card" v-if="!edit">
        <div class="card-body row">
            <label for="colFormLabel" class="col-sm-2 ">Şirket Adı</label>
            <div class="col-sm-10">
                <p>{{contact.name}}</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2">Email</label>
            <div class="col-sm-10">
                <p>{{contact.email}}</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Telefon</label>
            <div class="col-sm-10">
                <p>{{contact.telephone}}</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Fax</label>
            <div class="col-sm-10">
                <p>{{contact.fax}}</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Adres</label>
            <div class="col-sm-10">
                <p>{{contact.adress}}</p>
            </div>
        </div>
    </div>
    <div class="btn-group" v-if="!edit">
        <button class="btn btn-sm btn-primary" @click="edit=true">Edit <i class="fas fa-edit"></i></button>
    </div>
    <div v-if="edit">
  <div class="form-group row" >
  <label for="colFormLabel" class="col-sm-2 col-form-label">Şirket Adı</label>
    <div class="col-sm-10">
     <input type="text" class="form-control" id="colFormLabel1" placeholder="Şirket Adı" v-model="contact.name">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel2" placeholder="Email" v-model="contact.email">
    </div>
  </div>
   <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Telefon</label>
    <div class="col-sm-10">
       <input type="text" class="form-control" id="colFormLabel3" placeholder="Telefon" v-model="contact.telephone">
    </div>
  </div>
  <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Fax</label>
    <div class="col-sm-10">
       <input type="text" class="form-control" id="colFormLabel4" placeholder="fax" v-model="contact.fax">
    </div>
  </div>
    <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Adres</label>
    <div class="col-sm-10">
       <textarea  class="form-control" id="colFormLabel" placeholder="Adres" v-model="contact.adress"></textarea>
    </div>
  </div>
    <button   class="btn btn-sm btn-success" @click="addContact">Save <i class="fas fa-save"></i></button>
    <button   class="btn btn-sm btn-warning" @click="edit=false"><i class="fas fa-arrow-left"></i>Cancel</button>
    </div>
</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return{
            contact:{
                name:'deneme',
                email:'deneme',
                telephone:'deneme',
                fax:'deneme',
                adress:'deneme'
            },
            edit:false,
              tab:[ 
          {link:'/contact',label:'Contact' },
          {link:'/companylogo',label:'Company Logo'}
         ],
        }
    },
    methods:{
        ...mapActions({
          addtab: "addTabs",
          addContactAction:"addContact",
          getContact:"getContact"
        }),
        addContact(){
            this.addContactAction(this.contact).then(()=>{
                this.edit=false
                this.getContact()
            })
        }
      },
    computed:{
        ...mapGetters({
            getterContact:"getterContact"
        })
    },
      mounted(){
          this.addtab(this.tab)
          this.getContact().then(()=>{
              if (this.getterContact.name!='') {
                  this.contact=this.getterContact
              }
               
          })
        
      
        },
}
</script>
<style lang="less" scoped>
.row{
    margin: 1rem;
}
form{
    text-align: center;
}
.card{
    
    .btn{
        width: 10%;
    }
}
.btn-group{
    text-align: center;
}
</style>