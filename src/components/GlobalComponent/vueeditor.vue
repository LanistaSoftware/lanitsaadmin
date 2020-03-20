<template>
  <div class="editor">
 
    <vue-editor v-if="show " :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="aboutcontent" > </vue-editor>
    <vue-editor v-if="getContent ? data=true : data =false" :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="getContent"> </vue-editor>
    <vue-editor v-if="!show && !data " :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="contentin"> </vue-editor>
  </div>
</template>
<script>
import { VueEditor,Quill } from 'vue2-editor'
 import {mapActions,mapGetters,mapState} from 'vuex'
import ImageResize from 'quill-image-resize-vue';
import { ImageDrop } from 'quill-image-drop-module';

// Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imageResize", ImageResize);
 
export default {
  data(){
    return{
      data:null
    }
  },
  components: {
    'vue-editor':VueEditor,

  },
  props:['aboutcontent','show'],

  data() {
    return {
      contentin: "",
      contentout:'',
      customModulesForEditor: [{ alias: "imageDrop", module: ImageDrop }, { alias: "imageResize", module: ImageResize }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  methods:{
     ...mapActions({
      getUpdateContent:"getUpdateContent"
    })
  },
  watch:{
     contentin(){
       this.$emit('con',this.contentin)
     },
  },
  computed:{
    ...mapGetters([
      "getContent"
    ]),
  },
  mounted(){
    this.getUpdateContent(this.getContent)
  }
};
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

</style>