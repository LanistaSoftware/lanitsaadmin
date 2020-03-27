<template>
<div>
  <div class="input-container">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Kayıtlı Setler</span>
    </div>
    <select class="form-control" id="exampleFormControlSelect1" @change="changeSlide($event)" v-model="selectId">
      <option selected>Slayt seti seçiniz.</option>
      <option v-for="(item,index) in slideAll" :key="index" :value="item._id">{{item.sliderName}}</option>
    </select>
    <div class="input-group-prepend">
      <button class="btn btn-sm btn-success" @click="activeSlide(selectId)"><i class="fas fa-plug"></i></button>
    </div>
  </div>
  </div>
  <carousel class="slideset" :autoplay="true" :autoplayTimeout="2000" :perPage="1" :navigationEnabled="true"
    :paginationEnabled="true" :loop="true" :paginationActiveColor="activeColor" :paginationColor="deActiveColor">
    <slide v-for="(slide ,index) in slideSets" :key="index.id">
      <div class="carousel-content" v-bind:style="{ backgroundImage: 'url(' + getImage(slide.imageUrl) + ')' }">
        <div class="carousel-items">
          <h4><strong> 0{{ index+1 }} </strong><span class="slash">/</span> <sup> 0{{ slideSets.length }} </sup></h4>
          <h2>{{ slide.header | firstWord }} </h2>
          <h2>{{ slide.header | otherWord }} </h2>
          <p class="content">
            {{ slide.content }}
          </p>
        </div>
      </div>
    </slide>
  </carousel>
</div>
</template>
<script>
  import {
    mapActions,mapGetters
  } from 'vuex'
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  export default {
    components: {
      Carousel,
      Slide
    },
    filters: {
    firstWord (header) {
      return header.split(' ', 1).join()
    },
    otherWord (header) {
      const arr = []
      header.split(' ').forEach((element, index) => {
        if (index !== 0) {
          arr.push(element)
        }
      })
      return arr.join(' ')
    }
  },
    data() {
      return {
         selectId:'',
         activeColor:'#EE3333',
         deActiveColor:'#303030',
        tab: [{
            link: '/sliders',
            label: 'Slaytlar '
          },
          {
            link: '/addslider',
            label: 'Slayt Ekle/Sil/Düzenle'
          }
        ],
        slideSets: [{
            index: 1,
            imageUrl: 'bg1.jpg',
            header: 'Doğa Dostu Üretim',
            content: ' Sürdürülebilir bir gelecek için daha yaşanabilir bir dünya hedefi doğrultusunda hareket eden Zorluteks, doğa dostu akıllı üretim teknolojileri, etkin enerji yönetimi ve geri dönüşüm uygulamalarının yanı sıra 11 ton siyah boya geri kazanımı ve dünya ortalamalarının çok üzerinde su tasarrufu ile doğayı korumaya katkı sağlıyor. Şirket ayrıca, katı atıklarının yüzde 90’nını da geri dönüşüm ile yeniden değerlendiriyor..'
          },
          {
            index: 2,
            imageUrl: 'bg2.jpg',
            header: 'Uzman Üretim kadrosu.',
            content: ' Corona virüsü nedeniyle 1 haftalık tatil yapan öğrenciler yarından itibaren uzaktan eğitime geçiyor. Milli Eğitim Bakanlığı konuyla ilgili detaylı bir açıklama yaparak TRT EBA TV (ilkokul-ortaöğretim-lise) uydu frekans bilgilerini paylaştı. MEB aynı zamanda TRT EBA TV kurulumu nasıl yapılır? sorusuna da cevap verdi..'
          },
          {
            index: 3,
            imageUrl: 'bg2.jpg',
            header: 'Silikonda Çözüm ortağınız',
            content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
          }
        ]
      }
    },
    mounted() {
      this.addtab(this.tab)
      this.getAllSlideAction()
      this.getActiveSlide()
    },
    created(){},
    methods: {
      getImage(path) {
      return path ? require(`@/assets/upload/${path}`) : ''
    },
      ...mapActions({
        addtab: "addTabs",
        getAllSlideAction: "getAllSlide",
        getOneSlide: "getSlide",
        activeSlide:"activeSlide",
        getActiveSlide:"getActiveSlide"
      }),
       changeSlide() {
            console.log(this.selectId)
      if(this.selectId !== "Slayt seti seçiniz."){
      let id= this.selectId
      this.getOneSlide(id).then(() => {
      this.slideSets[0].header=  this.getASlider.SliderOne.titleOne
      this.slideSets[1].header=  this.getASlider.SliderTwo.titleTwo
      this.slideSets[2].header=  this.getASlider.SliderThree.titleThree
      this.slideSets[0].content=  this.getASlider.SliderOne.descriptionOne
      this.slideSets[1].content=  this.getASlider.SliderTwo.descriptionTwo
      this.slideSets[2].content=  this.getASlider.SliderThree.descriptioThree
      this.slideSets[0].imageUrl=  this.getASlider.SliderOne.imageurlOne
      this.slideSets[1].imageUrl=  this.getASlider.SliderTwo.imageurlTwo
      this.slideSets[2].imageUrl=  this.getASlider.SliderThree.imageurlThree
      })}
    },
    },
    computed:{
       ...mapGetters({
      slideAll: "getAllSlide",
      getASlider: "getASlide"
    }),
    }
  }
</script>
<style lang="less" scoped>

.header{
  width: 100%;
}

.btn-group{
  position: relative;
  text-align: center;
 
}
 .carousel-content{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
   width: 90%;
   height: 50vh;
   margin-left: auto;
   margin-right: auto;
  }
  .carousel-items{
    padding: 3vh;
    color: #fff;
    text-align: left;
    
    vertical-align: middle;
    display: table-cell;
  }
  .carousel-content h4{
    font-weight: bold;
    padding-bottom: 1.2vh;
    font-family: utopia-std-headline, serif;
  }
  .carousel-content span{
    font-size: 3rem;
  }
  .carousel-content sup{
    font-size: 1.3rem;
  }
  .carousel-content strong{
    font-size: 2.2rem;
  }
  .carousel-content h2{
    font-family: Arial, serif;
    font-size: 4.5rem;
    font-weight: 800;
    padding-bottom: 1vh;
  }
  .carousel-content p{
    font-family: Helvetica , sans-serif;
    font-weight:200;
    font-size: 0.9rem;
    margin-top: 1rem;
    // letter-spacing: 0.1rem;
  }
  .carousel-items {
    color: #fff;
    text-align: left;
}
.input-group-prepend{
  .btn{
    font-size: 1.2rem;
    padding: 0 1rem;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

  }
}
  .input-container{
    padding: 0 1rem;
  }
  .input-group{
    margin-bottom: 1rem;
    width: 100%;
    margin-left: 0;
    .input-group-text{
      width: 8rem;
    }

  }
</style>