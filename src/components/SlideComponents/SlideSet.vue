<template>
     <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <div class="image-file">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
          <input type="file" name="" id="">
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"></textarea>
        </div>
      </div>
      <div class="col-md-auto col-lg-4">
        <div class="image-file">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
          <input type="file" name="" id="">
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"></textarea>
        </div>
      </div>
      <div class="col col-lg-4 ">

        <div class="image-file">
          <img src="https://i.picsum.photos/id/188/200/130.jpg" class="img-thumbnail">
          <input type="file" name="" id="">
        </div>
        <div class="content-title mt-3">
          <input type="text" class="form-control mb-3" placeholder="Slayt Başlığı">
          <textarea name="" class="form-control" id="" cols="20" rows="10" placeholder="Slayt İçeriği"></textarea>
        </div>
      </div>
      <button class="btn btn-primary mt-3 mb-3">Ekle</button>
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

  .sliderall {
    width: 100%;
    text-align: center;
    margin: 2rem
  }
</style>