<template>
    <table class="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Document Name</th>
      <th scope="col">Document Path</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(document,index) in gettersDocument" :key="document._id">
      <th scope="row">{{index+1}}</th>
      <td>{{document.name}}</td>
      <td>{{document.path}}</td>
      <td><button @click="deleteDocument(document._id)" class="btn btn-sm btn-danger"> Delete <i
                class="fas fa-trash-alt"></i></button></td>
    </tr>
  </tbody>
</table>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            tab:[ 
          {link:'/documents',label:'Belgeler' },
          {link:'/adddocument',label:'Belge Ekle' },
         ],
        }
    },
    computed:{
        ...mapGetters({
            gettersDocument:'gettersDocument'
        })
    },
    created(){
        this.getDocuments()
        this.addtab(this.tab)
    },
    methods:{
        ...mapActions({
            getDocuments:'getDocuments',
            deleteDocumentAction:'deleteFile',
            addtab:'addTabs',
        }),
        deleteDocument(id){
            this.deleteDocumentAction(id).then(()=>{
                this.getDocuments()
            })
        }
    }
}
</script>