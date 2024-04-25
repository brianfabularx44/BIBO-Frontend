<template>
    <div class="p-[80px] mx-[100px] flex items-center justify-between">
      <!-- Events List Header -->
      <h1 class="text-[22px] font-semibold">Here Are Your List of Events</h1>
        <!-- Search Bar -->
        <div class="relative md:block flex">  
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="search-navbar" class="block h-[40px] w-[300px] p-2 pl-10 text-sm rounded-full bg-[#F4F5FB] mx-auto" placeholder="Search for your BIB Number..">
        </div>
        <!-- Save Button -->
        <button @click='isDialogOpen = true' class="w-[120px] h-[40px] text-[#6C4EAB] outline outline-2bg-white font-medium rounded-lg text-sm py-1">Add an Event</button>
    </div>

  
    <!-- Events Cards Section -->
    <div class="pl-[80px] pr-[80px] flex flex-wrap justify-between mx-[100px]">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
    <EventModal v-model="isDialogOpen"></EventModal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EventCard from '../components/EventCard.vue';
  import { Icon } from '@iconify/vue';

  import EventModal from '../components/EventModal.vue';

  const isModalOpen = ref(false);
  </script>
  