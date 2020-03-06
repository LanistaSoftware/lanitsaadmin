==How to use: ==

<template>
<div>    <ckeditor :config="editorConfig" v-model="post.content" @ready="onReady"></ckeditor>
    <button class="btn btn-info" @click="upload">
        Resim
    </button></div>

</template>

<script>
import 'ckeditor5-vuejs/dist/ckeditor.css';
import {CKEditor, AutosavePlugin, MediaEmbedPlugin, UploaderPlugin,SimpleUploadAdapter} from 'ckeditor5-vuejs';

export default {
    data() {
        return {
            post: {
                content: ''
            },
            editorConfig: {
                toolbar: {
                    viewportTopOffset : 50,    //<-- height of fixed header
                    items: [
                        "heading", "|", "fontsize", "fontfamily", "|", "bold", "italic", "underline", "strikethrough", "highlight", "|", "alignment", "|", 
                        "numberedList", "bulletedList", "|", "link", "blockquote", "imageUpload", "insertTable", "mediaEmbed", "|", "undo", "redo",'affBox', 'insertMedia', 'spinText',
                    ],
                    
                },
                  
                allowedContent: true,
                // extraAllowedContent: '*(*);*{*}',
                extraPlugins: null,
                autosave: {
                    waitingTime: 60000,
                    save: (editor) => {
                        this.autosave();
                    }
                },
                
            } 
        }
    },
    components: {
        ckeditor: CKEditor,
    },

    created() {
        this.editorConfig.extraPlugins = [UploaderPlugin(this.onUploadImage)];
    },

    methods: {
        async onUploadImage(loader, cancelSource) {
            // upload file
            return {source_url: 'https://uploaded_image_url'};
        },

        onReady( editor ) {
            // Insert the toolbar before the editable area.
            editor.ui.getEditableElement().parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement(),
                
            );
        },

        autosave() {
            (async () => {

            });
            
        },
        upload(){
            this.post.content+=`<img src="${this.e}" alt="Blog Image">`;
            console.log(this.post)
        }
    }
}
</script>