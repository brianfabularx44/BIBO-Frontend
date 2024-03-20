import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../pages/Home.vue';
import Login from '../../pages/Login.vue';
import Gallery from '../../pages/Gallery.vue';
import Test from '../../pages/Test.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login', 
    name: 'Login',
    component: Login, 
    meta: { hideNav: true }
  },
  {
    path: '/gallery', 
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/test', 
    name: 'test',
    component: Test,
    meta: { hideNav: true }
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
