<template>
   <div class="addBlog">
        <CardPreview v-show="closed"></CardPreview>
        <vueeditor class=" editor"></vueeditor>
         <button @click="setClose(true)" class="btn btn-sm btn-info ml-1"><i class="fas fa-eye"></i></button>
         <button @click="addBlog" class="btn btn-sm btn-success float-right mr-1"><i class="fas fa-save"></i> Save</button> 
    </div>
</template>
<script>
 import vueeditor from './vueeditor'
 import CardPreview from './CardPreview'
import Axios from 'axios'
 import {mapActions,mapGetters, mapMutations} from 'vuex'
 
  export default {
    name: 'Slider',
    components: {
            vueeditor,
            CardPreview
        },
        data() { 
            return {
             
                content: [],
                html:[],
                tab: [{
                        link: '/blogs',
                        label: 'Makaleler'
                    },
                    {
                        link: '/addblog',
                        label: 'Makale Ekle'
                    }
                ],

            }
        },
        computed:{
            ...mapGetters({
               getAddBlogContent: "getAddBlogContent",
                closed:"close"
            })
        },
        methods: {
            ...mapActions({
                addBlogAction:"addBlog",
                 getContentAction:"getContentAction",
                  addtab: "addTabs",
            }),
            ...mapMutations({
                setClose:"setClose",
                setShowEdit:"setShowEdit"
            }),
            addcontent(e) {
                this.content = e
            },
          
            addBlog(){
                this.addBlogAction([this.getAddBlogContent]).then(()=>{
                  this.$store.commit('setAddBlogContent', '')
                })  
            },
            getBlog(){
                Axios.get('http://localhost:3000/api/blog').then(res=>{
                   
                    this.html = res.data.blogs.content
                   
                }).catch(err=>{
                    alert(err)
                })
            }
        },
        created(){

    this.addtab(this.tab)
      this.getContentAction('')
      this.setShowEdit(false)
    },
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


.btn{
    margin-top: 1rem;
}
</style>
