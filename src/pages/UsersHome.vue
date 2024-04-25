<template>
    <div class="p-[80px] mx-[100px] flex items-center justify-between">
        <!--Events List Header-->
        <h1 class="text-[20px] font-semibold">Recent Marathon Events</h1>
        <button type="button" class="text-[#6C4EAB] text-opacity-65 hover:text-white outline outline-2 hover:bg-[#6C4EAB] hover:bg-opacity-65 font-medium rounded-lg text-base px-5 py-2.5 flex items-center">
        <!-- Icon -->
        <Icon icon="pepicons-pop:sort" class="mr-2" />

        <!-- Text -->
        <span>Sort By</span>
    </button>
        <!--Events Cards Section-->
    </div>
    <div class="pl-[80px] pr-[80px] flex flex-wrap justify-between mx-[100px]">
    <EventCard/>
    <EventCard/>   
    <EventCard/>   
    <EventCard/>  
    <EventCard/>  
    <EventCard/>  
    </div>
</template>


<script setup>
import EventCard from '../components/EventCard.vue';
import { Icon } from '@iconify/vue';
</script>

