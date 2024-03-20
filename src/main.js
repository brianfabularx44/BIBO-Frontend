import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Gallery from './pages/Gallery.vue';
import Test from './pages/Test.vue';

import "@fontsource/inter"; 
import "@fontsource/inter/100.css"; 
import "@fontsource/inter/200.css"; 
import "@fontsource/inter/300.css"; 
import "@fontsource/inter/400.css";  
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css"; 
import "@fontsource/inter/700.css"; 
import "@fontsource/inter/800.css"; 
import "@fontsource/inter/900.css"; 

import './style.css'

const routes = [
    { path: '/', component: Home },
    { path: '/', component: Login },
    { path: '/', component: Gallery },
    { path: '/', component: Test },
  ];


  createApp(App)
  .use(router) 
  .mount('#app');
