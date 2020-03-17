<template>
     <div class="sliderset">
      <div v-for="item in 3 " :key="item.id" class="card">
        <div class="image-file m-1">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
       <div class="custom-file ">
          <input type="file" class="custom-file-input" ref="file" accept="image/*" id="file"
            v-on:change="handleFileUpload()" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"></textarea>
        </div>
      </div>
     
      <button class="btn btn-sm btn-primary   col-md-2">Ekle</button>
      <button class="btn btn-sm btn-danger col-md-2">Sil</button>
      <button class="btn btn-sm btn-info col-md-2">Düzenle</button>
  
    </div>
</template>
<script>

  export default {
    name: 'SlideSet',
  
    data() {
      return {
        msg: 'Lanista Gladio Blog Slide'
      }
    }
  }
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
  .sliderset{
    width: 100%;
    text-align: center;
  
  }
  .card{
    text-align: center;
    width: 32%;
    margin:0 0.3%;
    float: left;
    padding: 1rem;
  }
  .btn{
    margin:1rem;
    width: 4rem;
  }

</style>