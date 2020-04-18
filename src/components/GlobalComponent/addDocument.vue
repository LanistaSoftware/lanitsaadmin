<template>
<div class="employee">
  <div class="employee-card-container">
    <div class="employee-card">
      <div class="employee-image-container">
       <label for="">Belge Ekle (.pdf)</label>
      </div>
      <div class="input-container"><input v-model="document.name" type="text" class="form-control" placeholder="Belge Adı" >
      </div>
      <div class="input-container">
        <div class="custom-file">
          <input type="file" class="custom-file-input" ref="myfile" accept="application/pdf" id="file" @change="selectedFile()"/>
          <label class="custom-file-label" for="inputGroupFile01" >Choose file</label>
        </div>
      </div>
      <div class="input-container"> <button class="btn btn-sm btn-warning" @click="reset"><i class="fas fa-trash-restore"></i> Reset</button>
        <button  @click="addDocument" class="btn btn-sm btn-success" ><i class="fas fa-save"></i> Save</button></div>

    </div>
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            tab:[ 
          {link:'/documents',label:'Belgeler' },
          {link:'/adddocument',label:'Belge Ekle' },
         ],
            document:{
                name: '',
                path:'',
                file: new FormData()
            }
        }
    },
    created(){
        this.addtab(this.tab)
    },
  methods: {
     selectedFile() {
          let pdffile ='';
          pdffile = this.$refs.myfile.files[0]
          this.document.file.append('file',pdffile)
          this.document.path=pdffile.name
          let reader = new FileReader();
          reader.readAsDataURL(pdffile);
          },
      
        ...mapActions({
            addDocumentAction:'addDocument',
            addFile:'addFile',
            addtab:'addTabs',
        }),
        addDocument(){
           
            this.addDocumentAction(this.document).then(()=>{
            this.document.name='',
            this.document.path=''
             this.addFile(this.document.file)
            })
            
        },
        reset(){
            this.document.file.delete('file')
            this.document.name='',
            this.document.path=''
        }
    }    
}
</script>
<style lang="less" scoped>
    @nbfcolor: #303030;
    @bgcolor: #ffffff;
    @incolor: #B5B5B5;
    @redcolor: #e33;
    @pagebgcolor: #E5E5E5;
    @btntextcolor: #eee;
    @headingfont: 'Kanit', sans-serif;
    @contentfont: 'Exo', sans-serif;

.employee-card-container{
  width: 100%;
  text-align: center;
}
.employee-card{
  background-color: @incolor;
  padding: 1rem;
  display: inline-block;
  width: 30%;
  text-align: center;
}
.employee-image-container{
  display: inline-block;
  width: 20rem;
  padding: 2rem;
}
img{
  width: 100%;
  height: auto;
}
.input-container{
  margin: 0.3rem;
}
</style>
