<template>
    <div class="h-screen overflow-y-auto rounded-lg fixed top-0 left-0 w-23 z-50 shadow bg-[#ECE6F0]">
      <div class="flex items-center justify-between   py-2 bg-[#ECE6F0] ">
        <img :src="logo" class="h-14">
      </div>
      <nav class="flex flex-col space-y-1 py-2">
        <a href="#" class="flex flex-col items-center px-2 py-2 text-[13px] text-gray-700 hover:text-gray-900 rounded-lg">
          <div class="flex items-center mb-1 hover:bg-[#F1DCF3] rounded-full">
            <Icon icon="mdi:events" class="h-7 w-7 mx-5 my-1 cursor-pointer" />  
          </div>
          Your Events
        </a>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
  import logo from '../assets/images/logo.png';
  </script>
  
  <style scoped>
  /* Adjust these styles as needed */
  .sidebar {
    transition: transform 0.3s ease-in-out;
  }
  
  </style>
  