<template>
  <div id="app">
    <div class="row">
      <Header></Header>
    </div>
    <div class="row">

      <AppNavigation :menus="menus" class="appnavigation"></AppNavigation>
      <section class="navborder sidecontent">
        <Navigation></Navigation>
      </section>
      <div class="row content  ">
        <router-view  @tab="tabs($event)"  class="container-v"></router-view>
        <!-- <Users></Users> -->
      </div>
    </div>
    <div class="row">
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
  import Header from './components/Header';
  import Navigation from './components/Navigation';
  import Footer from './components/Footer';
  import Users from './components/Users';
  import Blogs from './components/Blogs';
  import AppNavigation from './components/AppNavigation';
  import videos from './components/videos';

  export default {
    name: 'app',
    components: {
      Header,
      Navigation,
      Footer,
      Users,
      Blogs,
      AppNavigation,
      videos,

    },
    data() {
      return {
        menus:null
      
      }
    },
    created(){
    
    },
    methods:{
      tabs(e){
        this.menus=e;
      },
    },
     
    

  }
</script>

<style lang="less">
  /*
Page Bg color #E5E5E5 =@pagebgcolor 
Navbar/Footer Background #303030 = @nbfcolor
Body bg : #ffffff =@bgcolor
İnactive : #B5B5B5, = incolor
Red : #e33 = @redcolor

1. font-family: 'Kanit', sans-serif; @headingfont
2. font-family: 'Exo', sans-serif;  @contentfont
*/

  @nbfcolor: #303030;
  @bgcolor: #ffffff;
  @incolor: #B5B5B5;
  @redcolor: #e33;
  @pagebgcolor: #E5E5E5;
  @sidebgcolor: #FAFAFA;
  @headingfont: 'Kanit', sans-serif;
  @contentfont: 'Exo', sans-serif;
  @btntextcolor: #eee;


  #app {
    background-color: @bgcolor;

  }


  .row {
    padding: 0;
    margin: 0;
  }

  .blogcontent {
    width: 70%;
    margin: 0;
    //padding:3.5rem 3.5rem;
  }
  .container-v{
    width: 95%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top:3rem ;

  }

  .sidecontent {

    width: 15%;
    border-top:none; 
  }

  .sidecardhead {
    padding-left: 1rem;

    h5 {
      padding: 2rem 1rem 1rem 0;
    }
  }

  .col-2 {
    padding: 0 !important;
    margin: 0 !important;
  }

  .appnavigation {
    border-top: 1px solid #dee2e6;
    width: 100%;

    background-color: @sidebgcolor;
    h2 {
      color: @nbfcolor;
    }
  }



  .navborder {
    border-left: 1px solid #ddd;
  
  }

  .content {
    border-left: 1px solid #ddd;
    width: 85%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: @headingfont;

  }

  nav {
    width: 100%;
    background-color: @sidebgcolor;

    a {
      text-decoration: none;
      color: @bgcolor;
    }

  }

  footer {
    background-color: @nbfcolor;
  }

  li,
  ul {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;

  }
 .image-style-side{
   float: right;
  }
  .prew-html{
    .ql-align-center{
      text-align: center;
    }
    .ql-align-right{
      text-align: right;
    }
    .ql-indent-1{
      margin-left:3rem;
    }
    ul,li{
      list-style-type: inherit;
    }
    h1{
      font-size: 1.5rem;
    }

  }
</style>
