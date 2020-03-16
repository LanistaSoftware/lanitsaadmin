<template>
    <div class="employe">   
    <div v-for="item in employes " :key="item.id" class="card">
    <img src="http://via.placeholder.com/400x400" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">  
      <h5  v-if="selectedItem==item.id  ? isEdit=false : isEdit=true" >{{item.name}}</h5>
      <input  v-if="selectedItem==item.id ? isEdit=true : isEdit=false" v-model="item.name" >

      </div>
      <div class="card-text">
      <p v-if="selectedItem==item.id ? isEdit=false : isEdit=true" class="card-text">{{item.Görev}}</p>
      <input class="card-text"  v-if="selectedItem==item.id ? isEdit=true : isEdit=false" v-model="item.Görev">
      <p v-if="selectedItem==item.id ? isEdit=false : isEdit=true" class="card-text"><small class="text-muted">Görüntülenme Sırası: <b>{{item.Sıra}}</b></small></p>
       <input class="card-text" v-if="selectedItem==item.id ? isEdit=true : isEdit=false" v-model="item.Sıra" >
      </div>
      <div class="button-group mt-1">
      <button  v-if="!isEdit" @click="isEdit=true,selectedItem=item.id" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button v-if="isEdit" @click="isEdit=true,selectedItem=item.id" class="btn btn-sm btn-success"><i class="fas fa-save"></i></button>
      <button v-if="isEdit" @click="selectedItem=''" class="btn btn-sm btn-warning"><i class="fas fa-arrow-left"></i></button>        
      <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
              isEdit:false,
              selectedItem:'',
              employes:[{
                  id:1,
                  name:'Serkan Korkaç',
                  Görev:'Yazılım Geliştirme Uzmanı',
                  Sıra:'0',
              },
              {
                  id:2,
                  name:'Cihan Bozkurt',
                  Görev:'Yazılım Geliştirme Uzmanı',
                  Sıra:'1',
              },
              {
                  id:3,
                  name:'Ömer Erdemir',
                  Görev:'Analiz Uzmanı',
                  Sıra:'1',
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
     created(){
      this.$emit('tab',this.tab)
    },
  
}
</script>

<style lang="less" scoped>
.employe{
   
}
.card{
    width: 30%;
    display: inline-block;
    margin: 1rem;
    text-align: center;
    img{
        display: inline-block;
        width:290px ;
        margin-top: 0.5rem;
    }
}
.button-group{
    text-align: center;
}
</style>