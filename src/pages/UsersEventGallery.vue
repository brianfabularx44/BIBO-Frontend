<template>
    <div class="p-[80px] mx-[100px] flex items-center justify-between">
        <!--Events List Header-->
        <h1 class="text-[22px] font-semibold">Cebu Marathon 20245</h1>
        <div class="relative md:block flex">  
         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block h-[40px] w-[300px] p-2 pl-10 text-sm rounded-full bg-[#F4F5FB] mx-auto" placeholder="Search for your BIB Number..">
      </div>
        <!--Events Cards Section-->
    </div>
    {{ isLoading }}
    <div v-if="!isLoading" class="pl-[80px] pr-[80px] flex flex-wrap justify-between mx-[100px]">
      <img :src="getPhotoUrl(filenames[0])" />
      <!-- <ImageCard/> -->
      <!-- <ImageCard/> 
      <ImageCard/>
      <ImageCard/> 
      <ImageCard/>
      <ImageCard/>  -->
    </div>
</template>
<script setup>
import ImageCard from '../components/ImageCard.vue';
import { Icon } from '@iconify/vue';
import "@material/web/textfield/filled-text-field";
import { useRouter } from 'vue-router';
import {toast} from 'vue3-toastify'
import login from "../assets/images/login.jpg";
import axios from 'axios';
import { ref, onMounted } from 'vue';

import "@material/web/textfield/outlined-text-field"
import "@material/web/iconbutton/icon-button"
import "@material/web/button/filled-tonal-button";
import "@material/web/checkbox/checkbox"

const isLoading = ref(true)
const filenames = ref("")
const fetchImages = async (foldername, query) => {
  try {
    const {data} = await axios.get(`http://127.0.0.1:5000/fetch?event_slug=${foldername}&query=${query}`);
    return data.data
  } catch (error) {
    console.log(error);
    toast.error('An error occurred. Please try again later.');
  }
}
const getPhotoUrl = (url) => {
  return `http://localhost:5000/static/gallery/sm2sm/${url}`
}
onMounted(async () => {
  isLoading.value = true
  try {
    const filename = await fetchImages('sm2sm','')
    filenames.value = filename
    console.log(filenames.value)
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
  }
  
})


</script>

