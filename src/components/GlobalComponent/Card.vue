<template>
  <div>
  <div class="card"  v-for="(item, index) in contentHtml" :key="index" >
    <div class="imgcontainer " v-html="imgUrl[index]" >
      <!-- <img src="https://picsum.photos/400/300" alt="Blog Image"> -->
    </div>
    <div class="card-body">
      <h5 class="card-title" v-html="getTitle(item.content)" ></h5>
      <p class="card-text" v-html="getDesc(item.content)"></p>
      <button @click="$emit('close',true),getContentAction(item.content)" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
      <button @click="$emit('editdata',true),getContentAction(item.content),getUpdateId(item._id)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button @click="deletBlog(item._id)" class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
  </div>
</template>
<script>
 import {mapActions,mapGetters} from 'vuex'
  export default {
    data() {
        return {
          imgUrl:[],
          contentHtml:''

          
        }
      },
      methods: {
        ...mapActions({
          getBlogaction: "getBlog",
          deleteBlogAction: "deleteBlog",
          getContentAction: "getContentAction",
          getUpdateId: "getUpdateId"
        }),
        deletBlog(id) {
          this.deleteBlogAction(id).then(() => {
            this.getBlogaction()
          })
        },
        getImgUrl(item) {
          var startIndex = item.search('<img')
          var lastIndex = item.search('">')
          var imgUrl;
          imgUrl = item.slice(startIndex, lastIndex+2)
          return imgUrl
          
        },
        getDesc(item){
           if (item == null) {
            return ''
          } else {
            var a = item.search('<p>')
            // var b = item.search('')
            var sonuc;
            sonuc = item.slice(a,150)
            return sonuc
          }

        },
        getTitle(item){
           if (item == null) {
            return ''
          } else {
            var a = item.search('<h')
            var b = item.search('</')
            var sonuc;
           
            sonuc = item.slice(a,b+5)
             console.log(sonuc)
            return sonuc
          }

        },
      },
      filters: {
        getİmg(item) {
          if (item == null) {
            return ''
          } else {
            var a = item.search('<img')
            var b = item.search('">')
            var sonuc;
            sonuc = item.slice(a, b + 2)
            return sonuc
          }
        },
        getDesc(item){
           if (item == null) {
            return ''
          } else {
            var a = item.search('<p>')
            // var b = item.search('')
            var sonuc;
            sonuc = item.slice(a,10)
            return sonuc
          }

        },
        
      },
      mounted() {
        this.getBlogaction().then(() => {
          this.getBlogs.forEach(element => {
            this.imgUrl.push(this.getImgUrl(element.content));
          });
        }).then(() => {
          this.contentHtml = this.getBlogs
        });

      },
      computed: {
        ...mapGetters([
          'getBlogs'
        ]),
      },
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
      width: 10%;
      height: 50%;

    }
  }

  .btn {
    margin:0.5rem;
  }

</style>
