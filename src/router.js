import Vue from 'vue'
import App from './App.vue'
import Users from './components/Pages/Users.vue'
import blogs from './components/Pages/Blogs.vue'
import slide from './components/Pages/Sliders.vue'
import addslide from './components/SlideComponents/addslider.vue'
import video from './components/Pages/Videos.vue'
import addblog from './components/GlobalComponent/addBlog.vue'
import references from './components/Pages/References.vue'
import products from './components/Pages/Products.vue'
import addreference from './components/GlobalComponent/addreference.vue'
import sectors from './components/Pages/Sectors.vue'
import about from './components/Pages/AboutUs.vue'
import employe from './components/Pages/Employees.vue'
import addemploye from './components/GlobalComponent/addemploye.vue'
import options from './components/Pages/Settings.vue'
import Welcome from './components/Pages/Welcome.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
      path:'/users',
      component:Users,
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
      },
      {
        path:'/addemploye',
        component:addemploye
      },
      {
        path:'/options',
        component:options
      },
      {
        path:'/',
        component:Welcome
      }
],
    mode:"history"
})
