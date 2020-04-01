<template>
<div>
    <div class="about">
        <div class="about-content">
            <vue-editor v-if="showEdit" v-model="content.aboutcontent"></vue-editor>
            <div v-if="!showEdit">
                <div v-html="content.aboutcontent"></div>
            </div>
            <button v-if="showEdit" class="btn btn-sm btn-success float-right" @click="addAboutUs"><i class="fas fa-save"></i> Save</button>
             <button  v-if="!showEdit" class="btn btn-sm btn-primary float-right" @click="Edit">Edit <i class="fas fa-edit"></i></button>
              <button  v-if="showEdit" class="btn btn-sm btn-warning float-left" @click="showEdit=false"><i class="fas fa-arrow-left"></i> Cancel</button>
        </div>
        <div class="about-image clearfix">
            <img v-if="!showPreview" :src="getImage(content.imgUrl)" class="rounded mx-auto d-block" alt="About us image.">
            <img v-if="showPreview" :src="imagePreview" class="rounded mx-auto d-block" alt="About us image.">
            <div  v-if="showEdit">
                <div class="prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Kişi Fotoğrafı</span>
                </div>
                <div class="custom-file" >
                        <input  type="file" ref="file" accept="image/*"  class="custom-file-input" id="file"
                            aria-describedby="inputGroupFileAddon01" v-on:change="handleFileUpload()" />
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>

// eslint-disable-next-line no-unused-vars
import { VueEditor,Quill  } from 'vue2-editor'
 import {mapActions, mapGetters} from 'vuex'
import ImageResize from 'quill-image-resize-vue';
import { ImageDrop } from 'quill-image-drop-module';

export default {
    components: {
       'vue-editor':VueEditor,    
       },
    data() {
        return {
            image:new FormData(),
            content:{
                 aboutcontent:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
                 imgUrl:'',
            },
            imagePreview: 'http://via.placeholder.com/400x200"',
                file: '',
                customModulesForEditor: [{
                    alias: "imageDrop",
                    module: ImageDrop
                }, {
                    alias: "imageResize",
                    module: ImageResize
                }],
                editorSettings: {
                    modules: {
                        imageDrop: true,
                        imageResize: {}
                    }
                },
            showEdit:false,
           
            showPreview: false,
            tab: [{
                link: '/aboutus',
                label: 'Hakkımızda'
            }],

        }
    },
    created() {
          this.addtab(this.tab)
          this.getAbout().then(()=>{
             this.content.aboutcontent=this.getterContent.content
             this.content.imgUrl=this.getterContent.imgUrl
          })

    },
    methods: {
        ...mapActions({
           addtab:"addTabs",
           postAbout:"postAbout",
           getAbout:"getAbout",
           postImage:"postImage"
         }),
         addAboutUs(){
             this.postAbout(this.content).then(()=>{
                 this.getAbout().then(()=>{
             this.content.aboutcontent=this.getterContent.content
             this.content.imgUrl=this.getterContent.imgUrl
              
          })
             })
             this.postImage(this.image)
               this.showEdit=false
         },
        handleFileUpload() {
            /*
              Set the local file variable to what the user has selected.
            */
           this.showPreview = true;
            this.file = this.$refs.file.files[0];
            /*
              Initialize a File Reader object
            */
           this.content.imgUrl=this.file.name+'-'+new Date().getUTCMonth()+'-'+new Date().getUTCDay()+'-'+new Date().getHours()+'.jpg'
           this.image.append('file',this.file)
            let reader = new FileReader();

            /*
              Add an event listener to the reader that when the file
              has been loaded, we flag the show preview as true and set the
              image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
                
                this.imagePreview = reader.result;
            }.bind(this), false);

            /*
              Check to see if the file is not empty.
            */
            if (this.file) {
                /*
                  Ensure the file is an image file.
                */
                if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
                    /*
                      Fire the readAsDataURL method which will read the file in and
                      upon completion fire a 'load' event which we will listen to and
                      display the image in the preview.
                    */
                    reader.readAsDataURL(this.file);
                }
            }
        },
        Edit(){
            this.showEdit=true
            this.$emit('edit', this.showEdit)

        },
        getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
    },
    computed:{
        ...mapGetters({
            getterContent:"getterContent"
        })
    }
}
</script>
<style lang="less" scoped>
.btn{
    margin-top: 0.5rem;
}
.about{
    width: 100%;
    .about-content{
        width: 70%;
        float: left;
    }
.about-image{
    float: left;
    width: 29%;
    margin-left: 1%;
   img{
       width: 100%;
       height: auto;
   }
}
}



</style>