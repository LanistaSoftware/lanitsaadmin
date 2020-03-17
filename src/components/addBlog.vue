<template>
   <div class="addBlog">
        <CardPreview v-show="close"  @close="deger($event)" :content="content"></CardPreview>
        <vueeditor @con="addcontent($event)" class=" editor"></vueeditor>
        <button @click="close=true" class="btn btn-sm btn-info ml-1"><i class="fas fa-eye"></i></button>
         <button  class="btn btn-sm btn-success float-right mr-1"><i class="fas fa-save"></i> Save</button>

    </div>
</template>

<script>
 import vueeditor from '../components/GlobalComponent/vueeditor'
 import CardPreview from '../components/GlobalComponent/CardPreview'
  
  export default {
    name: 'Slider',
    components: {
            vueeditor,
            CardPreview
        },
        data() {
            return {
                close:false,
                content: '',
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
    
        methods: {
            addcontent(e) {
                this.content = e
            },
             deger(e) {
                this.close = e;
            }
        },
        created(){
      this.$emit('tab',this.tab)
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
