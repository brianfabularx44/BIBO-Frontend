<template>
    <div class="p-[80px] mx-[100px] flex items-center justify-between">
        <!--Events List Header-->
        <h1 class="text-[22px] font-semibold">Cebu Marathon 2024</h1>
        <label for="file-upload" class="flex items-center cursor-pointer text-white bg-[#6C4EAB] hover:text-[#6C4EAB] outline outline-2 hover:bg-white font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">
            <Icon icon="material-symbols:upload" class="mr-2" />
            <span>Upload</span>
            <input id="file-upload" type="file" accept="image/*" class="hidden" />
        </label>
        <!--Events Cards Section-->
    </div>
    <div class="pl-[80px] pr-[80px] flex flex-wrap justify-between mx-[100px]">
    <ImageCard/>
    <ImageCard/> 
    <ImageCard/>
    <ImageCard/> 
    <ImageCard/>
    <ImageCard/> 
    </div>
</template>
<script setup>
import ImageCard from '../components/ImageCard.vue';
import { Icon } from '@iconify/vue';
</script>

