import Vue from 'vue'
import Users from '../src/components/Pages/Users.vue'
import blogs from '../src/components/Pages/Blogs.vue'
import slide from '../src/components/Pages/Sliders.vue'
import addslide from '../src/components/SlideComponents/addslider.vue'
import video from '../src/components/Pages/Videos.vue'
import addblog from '../src/components/GlobalComponent/addBlog.vue'
import references from '../src/components/Pages/References.vue'
import products from '../src/components/Pages/Products.vue'
import pigments from '../src/components/GlobalComponent/Pigments.vue'
import addreference from '../src/components/GlobalComponent/addreference.vue'
import sectors from '../src/components/Pages/Sectors.vue'
import about from '../src/components/Pages/AboutUs.vue'
import employe from '../src/components/Pages/Employees.vue'
import addemploye from '../src/components/GlobalComponent/addemploye.vue'
import contact from '../src/components/Pages/Contact.vue'
import Welcome from '../src/components/Pages/Welcome.vue'
import SectorImage from '../src/components/Pages/sectorImage.vue'
import logo from '../src/components/GlobalComponent/CompanyLogo.vue'
import documents from '../src/components/Pages/Documents.vue'
import adddocument from '../src/components/GlobalComponent/addDocument.vue'
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
        path:'/pigments',
        component:pigments
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
        path:'/contact',
        component:contact
      },
      {
        path:'/sectorImage',
        component:SectorImage
      },
      {
        path:'/companylogo',
        component:logo
      },
      {
        path:'/documents',
        component:documents
      },
      {
        path:'/adddocument',
        component:adddocument
      },
      {
        path:'/',
        component:Welcome
      }
],
    
})
