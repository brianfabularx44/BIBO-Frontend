<template>
<nav class="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-[100px] p-2">
<img :src="logo" class="h-[80px]"/>

<div class="flex md:order-2 w-full md:w-auto"> 
    <div class="relative hidden md:block w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="text" id="search-navbar" class="block h-[40px] w-[300px] p-2 ps-10 text-sm rounded-full bg-[#F4F5FB]" placeholder="Search for an event..">
    </div>
  </div>
    </div>
</nav>
</template>

<script setup>
import logo from "../assets/images/logo.png";

</script>