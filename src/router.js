import Vue from 'vue'
import Users from './components/Users.vue'
import blogs from './components/Blogs.vue'
import slide from './components/Slider.vue'
import video from './components/videos.vue'
import addblog from './components/addblog.vue'
import reference from './components/reference.vue'
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
        path:'/videos',
        component:video
      },
      {
        path:'/addblog',
        component:addblog
      },
      {
        path:'/reference',
        component:reference
      }

],
    mode:"history"
})
