<template>
<!-- <vuescroll> -->
  <div class="editor">
    <vue-editor :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="content"> </vue-editor>
  </div>
<!-- </vuescroll> -->
</template>
 
<script>
import { VueEditor,Quill } from 'vue2-editor'

import ImageResize from 'quill-image-resize-vue';
import { ImageDrop } from 'quill-image-drop-module';
import VueScrollbar from 'vue-scrollbar-simple'
// Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imageResize", ImageResize);
 
export default {
  components: {
    VueEditor,
    vuescroll:VueScrollbar
  },
  data() {
    return {
      content: "",
      customModulesForEditor: [{ alias: "imageDrop", module: ImageDrop }, { alias: "imageResize", module: ImageResize }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  watch:{
     content(){
       this.$emit('con',this.content)
     }
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