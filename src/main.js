import { createApp } from 'vue';
import App from './App.vue';
import router from './assets/router';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';
import '@fontsource/inter';   
import './style.css';


const app = createApp(App);

app.use(router);


app.mount('#app');

app.use(Vue3Toastify, { 
  autoClose: 1000,
  position: 'top-center',
  theme: 'colored', 
  transition: 'slide',
  clearOnUrlChange: false,
});
