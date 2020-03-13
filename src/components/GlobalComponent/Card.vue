<template>
  <div class="card">
    <div class="imgcontainer">
      <img src="https://picsum.photos/400/300" alt="Blog Image">
    </div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content. Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <button @click="$emit('close',true)" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
      <button @click="$emit('editdata',true)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>
<style lang="less" scoped>
  .card {
    width: 29%;
    margin: 0 2rem 2rem 2rem ;
    display: inline-block;

  }

  .imgcontainer {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    overflow: hidden;

    img {
      width: 80%;
      height: auto;

    }
  }

  .btn {
    margin:0.5rem;
  }

</style>
