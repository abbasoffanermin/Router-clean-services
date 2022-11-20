import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../App.vue'
import AboutVue from '../components/About.vue'
import ContactVue from '../components/Contact.vue'
import Offers from '../components/Offers.vue'
import Reviews from '../components/Reviews.vue'
import Services from '../components/Services.vue'
import Pricing from '../components/Pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    name:"Home",
    component:AppVue
   },
   {
    path:'/about',
    name:"About",
    component:AboutVue
   },
   {
    path:'/services',
    name:"Services",
    component:Services
   },
   {
    path:'/offers',
    name:"Offers",
    component:Offers
   },
   {
    path:'/pricing',
    name:"Pricing",
    component:Pricing
   },
   {
    path:'/reviews',
    name:"Reviews",
    component:Reviews
   },
   {
    path:'/contact',
    name:"Contact",
    component:ContactVue
   },

  ]
})

export default router
