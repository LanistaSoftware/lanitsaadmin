<template>
  <div>
  <div class="card preview-card"  v-for="(item, index) in getBlogs" :key="index" >
    <div class="imgcontainer " v-html="getImage(item.content)">
    </div>
    <div class="preview-card-header" v-html="getHeader(item.content,index)">
    </div>
    <div class="btn-container">
      <button @click="setClose(true),getContentAction(item.content)" class="btn btn-sm btn-info"><i class="fas fa-eye"></i></button>
      <button @click="setData(true),getContentAction(item.content),getUpdateId(item._id)" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i></button>
      <button @click="deletBlog(item._id)" class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
  </div>
</template>
<script>
 import {mapActions,mapGetters,mapMutations} from 'vuex'
  export default {
    data() {
        return {


        }
      },
      methods: {
        ...mapActions({
          getBlogaction: "getBlog",
          deleteBlogAction: "deleteBlog",
        }),
        ...mapMutations({
          setData: "setData",
          setClose: "setClose",
          setShowEdit:"setShowEdit"
        }),
        deletBlog(id) {
          this.deleteBlogAction(id).then(() => {
            this.getBlogaction()
          })
        },
        getImage(item) {
          let imgUrl = ''
          let firstIndex = null
          let lastIndex = null
          firstIndex = item.search('<img ')
          item = item.slice(firstIndex)
          lastIndex = item.search('">')
          imgUrl = item.slice(0, lastIndex + 2)
          if (lastIndex === -1 || firstIndex === -1) {
            
            return imgUrl, imgUrl = '<img src="https://via.placeholder.com/300x200" alt="Tanımsız blog fotoğrafı."><br><small>Bu makalede fotoğraf bulunamadı</small>'
          } else {
            return imgUrl
          }
        },
        getHeader(item, index) {
          let headerTag = ''
          let firstIndex = null
          let lastIndex = null
          firstIndex = item.search('<h')
          item = item.slice(firstIndex)
          firstIndex=0
          lastIndex = item.search('</'+item.slice(firstIndex+1,3)+'>')+5      
          headerTag = item.slice(firstIndex, lastIndex)
          if(headerTag.search('<img')!=-1){            
            alert(index+1+ ' Nolu Makale içindeki fotoğraf başlık etiketleri (<h1> vb..) ile etiketlenmiştir. Lütfen düzeltin...!!')
            return headerTag = '<h2>Bu makalede başlık bulunamadı.</h2>'
          } else {
                if (lastIndex === -1 || firstIndex === -1) {
                  alert('Başlık bulunamadı.')
            return headerTag = '<h2>Bu makalede başlık bulunamadı.</h2>'
          } else {
            return headerTag
          }
          }

        },
        ...mapActions({
          getContentAction: "getContentAction",
          getUpdateId: "getUpdateId"
        })
      },

      mounted() {
        this.getBlogaction()
        this.setShowEdit(true)
      },
      computed: {
        ...mapGetters([
          'getBlogs',
          'data',
          'close',
          'showedit'
        ]),
      },
    }
</script>
<style lang="less">
  .preview-card {
    width: 29%;
    height: 35rem;
    margin: 0 2rem 2rem 2rem;
    float: left;
    background-color: #FAFAFA;
      .imgcontainer {
   width: 100%;
    height: 100%;
    padding: 1rem;

    img {
     width: 100%;
     height: auto;
     cursor: pointer;

    }
  }
    .btn-container{
    width: 100%;
      .btn {

    margin:0.5rem;
    width: 2rem;
  }
  }
  }

  .preview-card-header{
    h1,h2,h3,h4,h5,h6{
      font-size: 2rem;
      font-style: normal;
    }
  }




</style>
