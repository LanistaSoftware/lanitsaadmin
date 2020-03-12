<template>
    <div class="row reference">
    <div class="card col-3"  v-for="cards in 10" :key="cards">
  <img class="card-img-top" src="https://seeklogo.com/images/H/H_and_M-logo-9C22DB457C-seeklogo.com.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>  
    <a href="https://www2.hm.com/tr_tr/index.html" blank="_target" class="btn btn-primary">Go somewhere</a>
          <button @click="$emit('editdata',true)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
  </div>
</div>
</div>

</template>

<script>
  export default {
      data() {
          return {
              tab: [{
                      link: '/reference',
                      label: 'Referanslar'
                  },
                  {
                      link: '/addreference',
                      label: 'Referans Ekle'
                  }
              ],
              cards:[
               {
                   logo:'https://seeklogo.com/images/H/H_and_M-logo-9C22DB457C-seeklogo.com.png',
                   title:'HM',
                   href:'https://www2.hm.com/tr_tr/index.html'
               }   
              ]
          }
      },
      created() {
          this.$emit('tab', this.tab)
      },
  }

</script>
<style lang="less" scoped>
.reference{
    width: 100%;
}
  .card {
    width: 20%;
    margin: 3rem ;
    text-align: center;

  }


  .btn {
    margin: 0.5rem;
  }

</style>
