<template>
  <nav :style="heights">
    <ul :style="heights" class="flex-column">

      <router-link to='/users' tag='li' class="nav-item"  active-class="act">
        <span><i class="fas fa-users float-left"></i></span> <a class="nav-link active" href="#">Kullanıcılar</a>
      </router-link>
      <router-link to='/blogs' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-book-open float-left"></i></span> <a class="nav-link" href="#">Makaleler </a>
      </router-link>
      <router-link to='/sliders' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-photo-video float-left"></i></span><a class="nav-link" href="#">Slaytlar </a>
      </router-link>
      <router-link to='/videos' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-video float-left"></i></span> <a class="nav-link" href="#">Videolar</a>
      </router-link>
     <router-link to='/reference' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-asterisk float-left"></i> </span><a class="nav-link" href="#">Referanslar </a>
     </router-link >
      <router-link to='/products' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-boxes float-left"></i></span> <a class="nav-link" href="#">Ürünler </a>
      </router-link>
       <router-link to='/sectors' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-bezier-curve float-left"></i></span> <a class="nav-link" href="#">Sektörler </a>
       </router-link>
         <router-link to='/documents' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-file-pdf float-left"></i></span> <a class="nav-link" href="#">Belgeler </a>
       </router-link>
     <router-link to='/aboutus' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-address-card float-left"></i></span> <a class="nav-link" href="#">Hakkımızda </a>
    </router-link>
       <router-link to='/employe' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-users float-left"></i></span> <a class="nav-link" href="#">Ekibimiz </a>
     </router-link> 
       <!-- <li class="nav-item">
        <span><i class="fas fa-server float-left"></i></span> <a class="nav-link" href="#">Hizmetlerimiz </a>
      </li> -->
      <router-link to='/contact' tag='li' class="nav-item" active-class="act">
        <span><i class="fas fa-cogs float-left"></i></span><a class="nav-link" href="#">Ayarlar <br></a>
     </router-link> 

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
             heights:'height:'+(screen.availHeight-(screen.availHeight*15/100))+'px;',
             
    }
  }
}
</script>

<style lang="less" scoped>
@nbfcolor:#303030;
@bgcolor:#ffffff;
@incolor:#B5B5B5;
@redcolor:#e33;
@pagebgcolor:#E5E5E5;
@btntextcolor:#eee;
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
nav{
    padding:1rem 1rem 1rem 1rem;


}
a{
    margin-right: 1rem;
    color: @nbfcolor;
    border-bottom: 0.2px solid #f2f2f2;
}
  a:hover{

  color: @redcolor;
  border-color:@redcolor;
  
}
i{
 
  color: @nbfcolor;
  padding-top: 0.7rem;
  padding-right: 0.5rem
}
i:hover{
 
  color: @redcolor;
}
.act{
  a,i{
  color: @redcolor;
  
  }
}
li{
  margin-bottom: 1rem;
}

</style>