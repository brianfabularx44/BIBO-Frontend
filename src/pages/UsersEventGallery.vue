<template>
    <div class="p-[80px] mx-[100px] flex items-center justify-between">
        <!--Events List Header-->
        <h1 class="text-[22px] font-semibold">{{route.query.event}}</h1>
        <div class="relative md:block flex">  
         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <div class="flex gap-3">

          <input v-model="query" type="text" id="search-navbar" class="block h-[40px] w-[300px] p-2 pl-10 text-sm rounded-full bg-[#F4F5FB] mx-auto" placeholder="Search for your BIB Number..">
          <button @click="submitQuery" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>
        <!--Events Cards Section-->
    </div>
    <div v-if="!isLoading" class="pl-[80px] pr-[80px] flex flex-wrap justify-between mx-[100px] mb-5">
      <div class="grid grid-cols-3 gap-4">
        <img v-for="fname in filenames" :src="getPhotoUrl(fname)" class="shadow-2xl"/>
      </div>
      <!-- <ImageCard/> -->
      <!-- <ImageCard/> 
      <ImageCard/>
      <ImageCard/> 
      <ImageCard/>
      <ImageCard/>  -->
    </div>
    <div v-else class="flex items-center justify-center h-full">
      <div role="status" class="flex flex-col items-center">
        <h5 >Loading...</h5>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    </div>
</template>
<script setup>
import ImageCard from '../components/ImageCard.vue';
import { Icon } from '@iconify/vue';
import "@material/web/textfield/filled-text-field";
import {toast} from 'vue3-toastify'
import login from "../assets/images/login.jpg";
import axios from 'axios';
import { ref, onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router'
import "@material/web/textfield/outlined-text-field"
import "@material/web/iconbutton/icon-button"
import "@material/web/button/filled-tonal-button";
import "@material/web/checkbox/checkbox"

const route = useRoute()
const router = useRouter()
const isLoading = ref(true)
const filenames = ref("")
const query = ref("")
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
  const event = route.query.event
  return `http://localhost:5000/static/gallery/${event}/${url}`
}
onMounted(async () => {
  isLoading.value = true
  const event = route.query.event
  console.log(event);
  if(event === ''){
    toast.error("Must specify event name")
    return
  }
  try {
    const filename = await fetchImages(event,query.value)
    filenames.value = filename
    // console.log(filenames.value)
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
  }
  
})

const submitQuery = async () => {
  const event = route.query.event
  isLoading.value = true

  try {
    const filename = await fetchImages(event,query.value)
    filenames.value = filename
    // console.log(filenames.value)
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
  }
}


</script>

