<template>
      <div id="search-social">
          <div id="searchbar">
            <form class="form-inline clearfix" id="header-form">
              <div class="input-group-prepend">
                <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search">
                <div class="social " id="search-icon"><i class="fas fa-search"></i></div>

              </div>
            </form>
          </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
//İconlar taşındı
@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #B5B5B5;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@sidebgcolor: #FAFAFA;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;
@btntextcolor: #eee;

#search-social {
 padding: 1rem;
 border-bottom: 1px solid #dee2e6;

  

  i,
  .fa-search {

    font-size: 1rem;
    color: @bgcolor;
    margin: 33%;
  }
}


.social {
  margin-right:1rem;
  
  background-color: @redcolor;
  border: none;

}

.social:hover {
  cursor: pointer;

  i {
    color: @nbfcolor;
  }
}

#search-icon {
  display: inline-block;
  width: 2.2rem;
  height: 2.5rem;
}

.form-inline {
  input {
    border-radius: 0;
    padding: 1.2rem;
  }
}
</style>