<template>
    <div>
        <div class="about-text clearfix">
            <vueeditor v-if="showEdit" :aboutcontent="aboutcontent" :show="true" ></vueeditor>
            <div v-if="!showEdit">
                 {{aboutcontent}}
            </div>
            <button v-if="showEdit" class="btn btn-sm btn-success float-right"><i class="fas fa-save"></i> Save</button>
             <button  v-if="!showEdit" class="btn btn-sm btn-primary float-right" @click="Edit"><i class="fas fa-edit"></i> Edit</button>
              <button  v-if="showEdit" class="btn btn-sm btn-danger float-left" @click="showEdit=false"><i class="fas fa-arrow-left"></i> Cancel</button>
        </div>
        <div class="about-image clearfix">
            <img v-if="!showPreview" src="http://via.placeholder.com/400x200" class="rounded mx-auto d-block" alt="...">
            <img v-if="showPreview" :src="imagePreview" class="rounded mx-auto d-block" alt="..." width="400" height="200">
            <div class="input-group " v-if="showEdit">
                <div class="input-group-prepend">
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
</template>
<script>
import vueeditor from './GlobalComponent/vueeditor'
export default {
    components: {
        vueeditor
    },
    data() {
        return {
            imagePreview: '',
            file: '',
            showEdit:false,
            aboutcontent:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
            showPreview: false,
            tab: [{
                link: '/aboutus',
                label: 'Hakkımızda'
            }],

        }
    },


    created() {
        this.$emit('tab', this.tab)

    },
    methods: {
        handleFileUpload() {
            /*
              Set the local file variable to what the user has selected.
            */
            this.file = this.$refs.file.files[0];
            /*
              Initialize a File Reader object
            */
            let reader = new FileReader();

            /*
              Add an event listener to the reader that when the file
              has been loaded, we flag the show preview as true and set the
              image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
                this.showPreview = true;
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

        }
    }
}
</script>
<style lang="less" scoped>
.btn{
    margin-top: 0.5rem;
}
.about-text{
    width: 70%;
    float: left;
}
.about-image{
    width: 24%;
    float: right;
}
.input-group    {
    margin-top:2.8rem ;
}
</style>