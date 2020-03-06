<template>
<vuescroll>
  <div id="app">
  <div v-html="content" class="quill-container">  </div>
    <vue-editor :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="content"> </vue-editor>

  </div>
</vuescroll>
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
  }
};
</script>