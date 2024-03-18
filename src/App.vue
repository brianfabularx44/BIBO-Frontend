<template>
  <div>
    <Navbar v-if="!$route.meta.hideNav" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>
