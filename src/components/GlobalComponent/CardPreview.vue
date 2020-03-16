<template>
  <div class="card">
    <div class="cardhead clearfix">

      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('close',false)" class="btn btn-danger btn-sm"><i class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <img src="https://picsum.photos/400/400" alt="Blog Image">
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ex accusamus quisquam. Sequi sit distinctio omnis repudiandae consectetur minima et saepe, eveniet dolores eum recusandae debitis aut laudantium necessitatibus itaque?
        Ea maiores, excepturi magnam sit adipisci aspernatur beatae alias sunt illum eum provident accusamus laudantium reprehenderit id quis ratione voluptatum quaerat at. Corporis explicabo earum assumenda minima adipisci, facilis voluptatem!
        Quaerat, doloremque! Officia asperiores esse repellendus animi facere ducimus laboriosam alias corporis id molestias dicta, magni dolore cupiditate nam voluptatem amet totam saepe dignissimos rem eos laudantium ipsam fugiat et.
        Consequuntur, cupiditate. Corrupti ea hic quae accusantium, pariatur aliquam officiis delectus temporibus laborum. Maiores id alias minus nulla voluptatem aspernatur esse ipsum sequi sunt, accusamus nostrum officia ad voluptas? Id!
        Reiciendis exercitationem saepe laudantium magnam accusantium provident! Fugit possimus maiores itaque inventore excepturi cumque aliquam illo. Voluptates, in sequi voluptatum atque tempore tempora mollitia, quod aspernatur necessitatibus soluta fugit blanditiis.
        Ducimus consequatur nihil vero perspiciatis odit nulla, consequuntur sit! Nisi ad distinctio ipsum, inventore voluptatem itaque eveniet, a dignissimos molestiae necessitatibus in minus libero omnis. Nisi qui nemo corrupti autem.
        Autem laboriosam, sed provident maxime molestiae nobis sequi soluta ipsa corporis incidunt, aperiam temporibus nisi, perspiciatis perferendis dolorum obcaecati molestias eveniet dignissimos atque. Illum adipisci quos error. Facilis, magni dolor?
        Cum placeat nam accusamus in vitae dolores minima tempora at eligendi nemo consequatur aliquid quod quam doloribus soluta aut eveniet animi, dolorum, distinctio, veniam tempore? Eveniet consequatur suscipit nulla quod.
        Magni unde quam voluptas quia doloremque, tenetur ullam non laboriosam! Nam officia ducimus animi voluptatem, tempore iste facilis ad maiores deserunt, iusto, corporis porro! Dolorum natus architecto non facilis sapiente!
        Ipsam necessitatibus voluptatum numquam, minima, nihil quos maiores repellendus velit quas provident aut quibusdam placeat. Eaque ullam doloribus animi in veritatis illum asperiores iste, nostrum quae obcaecati adipisci alias vero?</p>
    </div>
  </div>

</template>

<script>
  export default {

      data(){
          return{
    

          }
      
      }
      

  }

</script>
<style lang="less" scoped>
  .card {
    width: 60%;
    margin: 1rem;
    top: 20%;
    position: fixed;
    z-index: 500;
    border: 1px solid black;
    display: inline-block;

  }
    .btn {
    margin: 1rem;
    float: right;
  }


  img {
    width: 40%;
    height: auto;
    float: left;
    padding: 2rem;
  }
    .headcard-text{
        float: left;
         margin: 1rem;
    }


  .card-text {
   
   text-align: left
 
  }

</style>
