<template>
  <header>
    <div class="logo">
    
     <router-link to='/blogs' tag='li' class="nav-item">
             <a class="navbar-brand m-4" href="#"><img src="siyah.png" width="200" alt="Lanista Software"></a>
        </router-link>
</div>
  <div class="header">
    <h3>Admin Panel & Site Control Systems</h3>
  </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Lanista Gladio Blog Header'
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
@headingfont:'Kanit', sans-serif;
@contentfont:'Exo', sans-serif;
header{
    width:100%;
    padding: 2,1rem;
}
textarea:focus, input:focus{
    outline: none;
}
.header,.logo{
  vertical-align: middle;
  width: 50%;
  float: left;
}

.header{

  text-align: right;
  h3{
    
    padding-top: 4rem;
    padding-right: 1rem;
  }
}

</style>