  <template>
    <Navbar v-if="!$route.meta.hideNav" />
    <SideBar v-if="$route.meta.isAdmin"/>
    <div>
      <Transition name="slide-fade" mode="out-in"><router-view/></Transition>
    </div>
  </template>

  <script setup>
  import Navbar from './components/Navbar.vue';
  import SideBar from './components/SideBar.vue'
  </script>
