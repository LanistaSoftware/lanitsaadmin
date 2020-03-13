import Vue from 'vue'
import Users from './components/Users.vue'
import blogs from './components/Blogs.vue'
import slide from './components/Slider.vue'
import addslide from './components/SlideComponents/addslider.vue'
import video from './components/videos.vue'
import addblog from './components/addblog.vue'
import references from './components/reference.vue'
import products from './components/products.vue'
import addreference from './components/GlobalComponent/addreference.vue'
import sectors from './components/Sectors.vue'
import about from './components/AboutUs.vue'
import employe from './components/Employe.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const language =  window.navigator.language;
export const router = new VueRouter({
    routes:[
        {
      path:'/users',
      component:Users,
      // children: [
      //   {
       
      //     path: 'profile',
      //     component: UserProfile
      //   },
      //   {

      //     path: 'posts',
      //     component: UserPosts
      //   }
      // ]
    },
    {
        path:'/blogs',
        component:blogs
      },
      {
        path:'/sliders',
        component:slide
      },
      {
        path:'/addslider',
        component:addslide
      },
      {
        path:'/videos',
        component:video
      },
      {
        path:'/addblog',
        component:addblog
      },
      {
        path:'/reference',
        component:references
      },
      {
        path:'/addreference',
        component:addreference
      },
      {
        path:'/products',
        component:products
      },
      {
        path:'/sectors',
        component:sectors
      },
      {
        path:'/aboutus',
        component:about
      },
      {
        path:'/employe',
        component:employe
      }

],
    mode:"history"
})
