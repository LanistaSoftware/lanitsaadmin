<template>
<div>
    <div class="card" v-if="!edit">
        <div class="card-body row">
            <label for="colFormLabel" class="col-sm-2 ">Şirket Adı</label>
            <div class="col-sm-10">
                <p>Gochem Silikon</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2">Email</label>
            <div class="col-sm-10">
                <p>email@gmail.com</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Telefon</label>
            <div class="col-sm-10">
                <p>5389239539</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Fax</label>
            <div class="col-sm-10">
                <p>0215211788</p>
            </div>
        </div>
        <div class=" row">
            <label for="colFormLabel" class="col-sm-2 ">Adres</label>
            <div class="col-sm-10">
                <p>0215211788</p>
            </div>
        </div>
    </div>
    <div class="btn-group" v-if="!edit">
        <button class="btn btn-sm btn-primary" @click="edit=true">Edit <i class="fas fa-save"></i></button>
    </div>
    <form v-if="edit">
  <div class="form-group row" >
  <label for="colFormLabel" class="col-sm-2 col-form-label">Şirket Adı</label>
    <div class="col-sm-10">
     <input type="text" class="form-control" id="colFormLabel" placeholder="Şirket Adı">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="Email">
    </div>
  </div>
   <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Telefon</label>
    <div class="col-sm-10">
       <input type="text" class="form-control" id="colFormLabel" placeholder="Telefon">
    </div>
  </div>
  <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Fax</label>
    <div class="col-sm-10">
       <input type="text" class="form-control" id="colFormLabel" placeholder="fax">
    </div>
  </div>
    <div class="form-group row">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Adres</label>
    <div class="col-sm-10">
       <textarea  class="form-control" id="colFormLabel" placeholder="Adres"></textarea>
    </div>
  </div>
    <button   class="btn btn-sm btn-success"><i class="fas fa-save"></i>Save</button>
    <button   class="btn btn-sm btn-warning" @click="edit=false"><i class="fas fa-arrow-left"></i>Cancel</button>
    </form>
</div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    components:{
        
    },
    data(){
        return{
            contact:{
                
            },
            edit:false,
              tab:[ 
          {link:'/options',label:'Contact' },
         ],
        }
    },
    methods:{
        ...mapActions({
          addtab: "addTabs",
        })
      },
      mounted(){
          this.addtab(this.tab)
      
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