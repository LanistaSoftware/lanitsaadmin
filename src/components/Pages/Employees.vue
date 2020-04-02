<template>
    <div class="employe">
        <div v-for="item in getterEmployes " :key="item._id" class="card">
            <div class="album-image">
                <img v-if="selectedItem=='' || selectedItem!=item._id" :src="getImage(item.imgUrl)" class="card-img-top"
                    alt="...">
                <img v-if="selectedItem==item._id  " :src="employeimg" class="card-img-top" alt="...">
            </div>
            <div class="input-container">
                <div v-if="selectedItem==item._id" class="custom-file ">
                    <input type="file" class="custom-file-input" ref="myfile" accept="image/*"
                        @change="selectedFile()" />
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>
            <div class="input-container">
                <h5 v-if="selectedItem=='' || selectedItem!=item._id">{{item.name}}</h5>
                <input v-if="selectedItem==item._id" v-model="item.name" class="card-text form-control">
            </div>
            <div class="input-container">
                <p v-if="selectedItem=='' || selectedItem!=item._id" class="card-text">{{item.task}}</p>
                <input class="card-text form-control" v-if="selectedItem==item._id" v-model="item.task">
            </div>
            <div class="input-container">
                <p v-if="selectedItem=='' || selectedItem!=item._id" class="card-text"><small
                        class="text-muted">Görüntülenme Sırası: <b>{{item.order}}</b></small></p>
                <select v-if="selectedItem==item._id" class="form-control" id="exampleFormControlSelect1"
                    v-model="item.order">
                    <option>0</option>
                    <option>1</option>
                </select>
            </div>
            <div class="btn-container">
                <button v-if="selectedItem=='' || selectedItem!=item._id" @click="isEdit=true,selectedItem=item._id"
                    class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
                <button v-if="selectedItem==item._id" @click="updateEmploye(item)" class="btn btn-sm btn-success"><i
                        class="fas fa-save"></i></button>
                <button v-if="selectedItem==item._id " @click="selectedItem=''" class="btn btn-sm btn-warning"><i
                        class="fas fa-arrow-left"></i></button>
                <button class="btn btn-sm btn-danger" @click="deleteEmploye(item._id)"><i
                        class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapActions, mapGetters} from 'vuex'
export default {
   
    data() {
            return {
                isEdit: false,
                selectedItem: '',
                showimg: false,
                imageForm: new FormData(),
                file: '',
                employeimg: 'http://via.placeholder.com/1300x800',
                employes: [{
                        id: 1,
                        name: 'Serkan Korkaç',
                        Görev: 'Yazılım Geliştirme Uzmanı',
                        Sıra: '0',
                    },
                    {
                        id: 2,
                        name: 'Cihan Bozkurt',
                        Görev: 'Yazılım Geliştirme Uzmanı',
                        Sıra: '1',
                    },
                    {
                        id: 3,
                        name: 'Ömer Erdemir',
                        Görev: 'Analiz Uzmanı',
                        Sıra: '1',
                    }

                ],
                tab: [{
                        link: '/employe',
                        label: 'Ekibimiz'
                    },
                    {
                        link: '/addemploye',
                        label: 'Çalışan Ekle'
                    }
                ]
            }
        },
        created() {
            this.addtab(this.tab)
            this.getEmploye()
        },
        methods: {
            selectedFile() {
                this.imageForm.delete('file')
                this.imageError = '';
                console.log(this.$refs.myfile)
                this.file = this.$refs.myfile[0].files[0]
                this.imageForm.append('file', this.file)
                let reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onload = evt => {
                    let img = new Image();
                    img.onload = () => {}
                    img.src = evt.target.result;
                    this.employeimg = evt.target.result
                    this.showimg = true
                }
                reader.onerror = evt => {
                    console.error(evt);
                }
            },
            updateEmploye(item){
                    if (this.file.name) {
                    var dltimg = item.imgUrl
                    item.imgUrl = this.file.name + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDay() + '-' + new Date().getHours() + '.jpg'
                    } else {
                        dltimg = ''
                    }
                this.updateEmployeAction({'item':item,'id':item._id,'dltimg':dltimg}).then(()=>{
                    this.getEmploye()
                    this.isEdit=false
                    this.addImageEmploye(this.imageForm)
                    this.selectedItem=null
                })
            },
            getImage(path) {
                return path ? require(`@/assets/upload/${path}`) : ''
            },
            deleteEmploye(id) {
                this.deleteEmployeAction(id).then(() => {
                    this.getEmploye()
                })
            },
            ...mapActions({
                addtab: "addTabs",
                getEmploye: "getEmploye",
                deleteEmployeAction: "deleteEmploye",
                updateEmployeAction: "updateEmploye",
                addImageEmploye:"addImageEmploye"
            }),
        },
        computed: {
            ...mapGetters({
                getterEmployes: "getterEmployes"
            })
    }
  
}
</script>

<style lang="less" scoped>
.card{
    width: 21%;
    height: 35rem;
    margin: 0 2rem 2rem 2rem;
    float: left;
    background-color: #FAFAFA;
}
    .album-image {
        width: 100%;
        height: 100%;
        padding: 1rem;

        img {
            width: 100%;
            height: auto;
            cursor: pointer;

        }
    }
    .btn-container {
        width: 100%;
        text-align: center;

        .btn {
            margin: 0.5rem;
            padding: 0.3 0.5rem;
        }
    }
.input-container {
    width: 100%;
    text-align: center;
    padding: 1rem;

}

</style>