<template>
  <section>
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Blog Select </label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>
            <table>
              <tr>Blog Id</tr>
              <tr>Blog Head </tr>
              <tr>Blog Date</tr>
            </table>
          </option>
          <option>
            <table>
              <tr>Blog Id</tr>
              <tr>Blog Head </tr>
              <tr>Blog Date</tr>
            </table>
          </option>
          <option>
            <table>
              <tr>Blog Id</tr>
              <tr>Blog Head </tr>
              <tr>Blog Date</tr>
            </table>
          </option>
          <option>
            <table>
              <tr>Blog Id</tr>
              <tr>Blog Head </tr>
              <tr>Blog Date</tr>
            </table>
          </option>

        </select>
      </div>
    </form>
    <div class="card m-3">
      <div class="row no-gutters">
        <div class="col-md-2">
          <img src="https://i.picsum.photos/id/1/100/100.jpg" class="card-img p-3" alt="Blog image">
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Blog Title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>



          </div>
        </div>
        <div class="card comment m-1">
          <div class="commentimg">
            <img src="https://i.pravatar.cc/150/{100*100}" class="card-img p-3" alt="Blog image">
          </div>
          <div class="card-body commentbody">
            <h5 class="card-title">Yorumcu İsmi</h5>
            <p class="card-text">Burada yorum metnini göreceksin.</p>
            <div class="buttons clearfix">
              <button><i class="far fa-check-square"></i></button>
              <button><i class="far fa-window-close"></i></button>
            </div>
          </div>
        </div>
        <div class="card comment m-1">
          <div class="commentimg">
            <img src="https://i.pravatar.cc/150/{100*100}" class="card-img p-3" alt="Blog image">
          </div>
          <div class="card-body commentbody">
            <h5 class="card-title">Yorumcu İsmi</h5>
            <p class="card-text">Burada yorum metnini göreceksin.</p>
            <div class="buttons clearfix">
              <button><i class="far fa-check-square"></i></button>
              <button><i class="far fa-window-close"></i></button>
            </div>
          </div>
        </div>
        
        <div class="card comment m-1">
          <div class="commentimg">
            <img src="https://i.pravatar.cc/150/{100*100}" class="card-img p-3" alt="Blog image">
          </div>
          <div class="card-body commentbody">
            <h5 class="card-title">Yorumcu İsmi</h5>
            <p class="card-text">Burada yorum metnini göreceksin.</p>
            <div class="buttons clearfix">
              <button><i class="far fa-check-square"></i></button>
              <button><i class="far fa-window-close"></i></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
form {
     margin: 1.5rem;
}
textarea:focus, input:focus{
    outline: none;
}
*:focus {
    outline: none;
}
.buttons{
  width:100%;
  text-align: right;
}
.comment{
  width: 100%;
   display: block;
}
.commentimg{
  width: 15%;
  float: left;
 

}
.commentbody{
  width: 80%;
  float: right;
}
button{
  background: none;
  border:none;  
  padding: .5rem;
  font-size: 1.5rem;
}

</style>