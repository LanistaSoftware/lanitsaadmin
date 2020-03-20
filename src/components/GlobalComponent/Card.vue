<template>
  <div>
  <div class="card"  v-for="item in getBlogs" :key="item._id" >
    <div class="imgcontainer " v-html="getContent(item.content)" >
      {{ item.content | getİmg }}
      <!-- <img src="https://picsum.photos/400/300" alt="Blog Image"> -->
    </div>
    <div class="card-body">
      <h5 class="card-title" ></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content. Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <button @click="$emit('close',true),getContentAction(item.content)" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
      <button @click="$emit('editdata',true),getContentAction(item.content)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button @click="deletBlog(item._id)" class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
  </div>
</template>

<script>
 import {mapActions,mapGetters} from 'vuex'
  export default {
    data() {
        return {}
      },
      methods: {
        ...mapActions({
          getBlogaction: "getBlog",
          deleteBlogAction:"deleteBlog",
        }),
        deletBlog(id)
        {
          this.deleteBlogAction(id).then(()=>{
            this.getBlogaction()
          })
        },
             getContent(item) {
          var a = item.search('<img')
          var b = item.search('">')
        
          var sonuc; 
          sonuc= item.slice(a,b+2)
        
           return sonuc
           },
           ...mapActions({
             getContentAction:"getContentAction"
           })
      },
      filters: {
           getİmg(item) {
          var a = item.search('<img')
          var b = item.search('">')
          var sonuc; 
          sonuc= item.slice(a,b+2)
           return sonuc
  }
},
      mounted() {
        this.getBlogaction()

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
