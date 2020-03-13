<template>
    <div class="employe">
   
    <div v-for="item in 9 " :key="item.id" class="card">
    <img src="http://via.placeholder.com/400x400" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Serkan Korkaç</h5>
      <p class="card-text">Yazılım Geliştirme Uzmanı</p>
      <p class="card-text"><small class="text-muted">Görüntülenme Sırası: <b>0</b></small></p>
      <div class="button-group">
      <button @click="$emit('editdata',true)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
    </div>
    </div>
</template>
<style lang="less" scoped>
.employe{
    width: 100%;
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