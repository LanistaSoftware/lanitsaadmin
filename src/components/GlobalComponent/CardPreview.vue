<template>
  <div class="card">
    <div class="cardhead clearfix">
      <p class="headcard-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button @click="$emit('close',false)" class="btn btn-danger btn-sm"><i class="fas fa-window-close"></i></button>
    </div>
    <div class="card-body" v-html="content">
        <br>
    </div>
  </div>

</template>

<script>

  export default {
      props:['content'],
      data(){
          return{
          }
      },
      methods:{
        cli(e){
          this.lp=e
        }
      }
  }


</script>
<style lang="less" scoped>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  .card {
    width: 60%;
    margin: 1rem;
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
