<template>
<div>
  <div class="input-container">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Kayıtlı Setler</span>
    </div>
    <select class="form-control" id="exampleFormControlSelect1" @change="changeSlide($event)" v-model="selectId">
      <option selected>Slayt seti seçiniz.</option>
      <option v-for="(item,index) in slideAll" :key="index"  :value="item._id">{{item.sliderName}}</option>
    </select>
    <div class="input-group-prepend">
      <button class="btn btn-sm btn-success" @click="activeSlide(selectId), isActive = !isActive" :disabled="isActive"><i class="fas fa-plug"></i></button>
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
    mapActions,
    mapGetters
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
      firstWord(header) {
        return header.split(' ', 1).join()
      },
      otherWord(header) {
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
        isActive: true,
        selectId: '',
        activeId: '',
        activeColor: '#EE3333',
        deActiveColor: '#303030',
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
            imageUrl: '1300x800.png',
            header: 'Lorem, ipsum dolor',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis error et rerum laboriosam quod molestias non eius provident libero quasi deserunt accusantium, earum officia dolore? Explicabo praesentium dolorem error!'
          },
          {
            index: 2,
            imageUrl: '1300x800.png',
            header: 'Lorem, ipsum dolor',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis error et rerum laboriosam quod molestias non eius provident libero quasi deserunt accusantium, earum officia dolore? Explicabo praesentium dolorem error!'
          },
          {
            index: 3,
            imageUrl: '1300x800.png',
            header: 'Lorem, ipsum dolor',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis error et rerum laboriosam quod molestias non eius provident libero quasi deserunt accusantium, earum officia dolore? Explicabo praesentium dolorem error!'
          }
        ]
      }
    },
    methods: {
      getImage(path) {
        if (path === '1300x800.png') {
          return 'https://via.placeholder.com/1300x800';
        } else {
           let pathimg = 'https://api.lanista.com.tr/assest/images'
            return path ? `${pathimg}/${path}` : 'https://via.placeholder.com/1300x800'
        }

      },
      ...mapActions({
        addtab: "addTabs",
        getAllSlideAction: "getAllSlide",
        getOneSlide: "getSlide",
        activeSlide: "activeSlide",
        getActiveSlider: "getActiveSlide"
      }),
      changeSlide() {
        if (this.selectId !== "Slayt seti seçiniz.") {
          let id = this.selectId
          this.getOneSlide(id).then(() => {
            this.isActive = this.getASlider.active;
            this.slideSets[0].header = this.getASlider.SliderOne.titleOne
            this.slideSets[1].header = this.getASlider.SliderTwo.titleTwo
            this.slideSets[2].header = this.getASlider.SliderThree.titleThree
            this.slideSets[0].content = this.getASlider.SliderOne.descriptionOne
            this.slideSets[1].content = this.getASlider.SliderTwo.descriptionTwo
            this.slideSets[2].content = this.getASlider.SliderThree.descriptionThree
            this.slideSets[0].imageUrl = this.getASlider.SliderOne.imageurlOne
            this.slideSets[1].imageUrl = this.getASlider.SliderTwo.imageurlTwo
            this.slideSets[2].imageUrl = this.getASlider.SliderThree.imageurlThree
          })
        }

      },
    },
    mounted() {
      this.addtab(this.tab)
      this.getAllSlideAction()
      this.getActiveSlider().then(() => {
        if (this.getAcitveOne != undefined) {
          this.activeId = this.getAcitveOne._id
          this.slideSets[0].header = this.getAcitveOne.SliderOne.titleOne
          this.slideSets[1].header = this.getAcitveOne.SliderTwo.titleTwo
          this.slideSets[2].header = this.getAcitveOne.SliderThree.titleThree
          this.slideSets[0].content = this.getAcitveOne.SliderOne.descriptionOne
          this.slideSets[1].content = this.getAcitveOne.SliderTwo.descriptionTwo
          this.slideSets[2].content = this.getAcitveOne.SliderThree.descriptionThree
          this.slideSets[0].imageUrl = this.getAcitveOne.SliderOne.imageurlOne
          this.slideSets[1].imageUrl = this.getAcitveOne.SliderTwo.imageurlTwo
          this.slideSets[2].imageUrl = this.getAcitveOne.SliderThree.imageurlThree
        }
      })
    },
    computed: {
      ...mapGetters({
        slideAll: "getAllSlide",
        getASlider: "getASlide",
        getAcitveOne: "getterActiveSlide"
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
    margin: 0;

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