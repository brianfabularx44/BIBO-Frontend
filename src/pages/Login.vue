<template>
  <div class="h-screen flex items-center justify-center bg-[#6C4EAB]">
    <div class="container p-10">
        <div class="flex h-full flex-wrap items-center justify-center">
        <div class="w-full shadow-lg">
          <div class="block rounded-lg bg-white shadow-lg h-[760px]">
            <div class="h-full lg:flex lg:flex-wrap items-center justify-center">
              <!-- Left column container-->
              <div class="px-4 md:px-0 lg:w-6/12 flex flex-col justify-between"> 
                <div class="md:mx-6 md:p-12">
                  <!--Logo-->
                  <div class="text-center">
                  </div>

                  <form @submit.prevent="handleLogin" class="h-min-[600px]">
                    <p class="font-semibold text-[25px]">Welcome!</p>
                    <p class="mb-5 font-bold text-[30px]">Login your Account</p>
                    <!--Username input-->
                    <div class="relative my-5">
                    <input v-model="username" type="text" placeholder="Email Address" class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>

                    <!--Password input-->
                    <div class="relative my-5">
                      <input v-model="password" type="text" placeholder="Password" class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    </div>

                    <!-- Remember Me checkbox -->
                    <div class="mb-4 flex items-center">
                      <md-checkbox touch-target="wrapper" class="p-0 ml-0 mr-1 my-0"></md-checkbox>
                      <label class="ms-2 text-sm font-medium text-gray-900">Remember Me</label>
                    </div>

                    <div class="my-5">
                      <!--Submit button-->
                      <div class="mt-3">
                        <md-filled-tonal-button type="submit" class="w-full rounded-lg font-bold text-base">Login</md-filled-tonal-button>
                      </div>
                    </div>
                    <div class="text-center mt-10">
                      <p class="mt-auto text-[15px]">Don't Have an Account Yet? <router-link to="/registration" class="ml-1 text-[#6C4EAB] hover:underline cursor-pointer">Signup</router-link></p>

                    </div>
                  </form>
                </div>
                
                <!--Forgot Password-->
                <!-- <div class="text-center">
                  <p class="mt-auto text-[15px] text-[#C0C0C0] underline cursor-pointer">Forgot Password?</p>
                </div> -->
              </div>
              <!-- Picture ni Brian-->
              <img :src="login" class="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none object-cover w-full h-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {toast} from 'vue3-toastify'
import login from "../assets/images/login.jpg";
import axios from 'axios';
import { ref } from 'vue';

import "@material/web/textfield/outlined-text-field"
import "@material/web/iconbutton/icon-button"
import "@material/web/button/filled-tonal-button";
import "@material/web/checkbox/checkbox"

const username = ref("")
const password = ref("");

const router = useRouter();


const handleLogin = async () => {
  console.log(username);
  try {
    const response = await axios.post('http://127.0.0.1:5000/admin/login', {
      username: username.value,
      password: password.value
    });

    if (response.data.success) { 
      window.location.href = '/admin'; 
    } else {
      toast.error(response.data.message || 'Login failed. Please check your credentials and try again.');
    }
  } catch (error) {
    toast.error('An error occurred. Please try again later.');
  }
}
</script>

<style>
  
</style>
