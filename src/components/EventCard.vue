<template>
  <div class="items-center mb-[60px] hover:transform hover:translate-y-[-5px] hover:scale-105">
  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer  rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
    <a href="#">
      <img class="rounded-lg" :src="test" alt="image description">
    </a>
  </figure> 
  <div class="text-center">
  <h1 class="mt-[20px] mb-[7px] font-semibold text-[20px]">Cebu Marathon 2024</h1>
  <h1 class="font-normal text-[#6C4EAB] text-[14px]">March 2024</h1>
  </div>
</div>
</template>


<script setup>
import test from "../assets/images/testimg.jpg";
</script>


  