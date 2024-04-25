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

                  <form @submit.prevent="submitRegistration" class="h-min-[600px]">
                    <p class="font-semibold text-[25px]">Welcome!</p>
                    <p class="mb-5 font-bold text-[30px]">Create Your Account</p>
                    <!--Username input-->
                    <div class="grid grid-cols-2 gap-5 mb-5">
                            <div class="relative my-5">
                            <md-filled-text-field
                              v-model="name"
                              label="Name"
                              required
                              supporting-text="*required"
                              error-text="Please fill out this field"
                              class="w-full">
                          </md-filled-text-field>
                          </div>

                          <div class="relative my-5">
                            <md-filled-text-field
                              v-model="address"
                              label="Address"
                              required
                              supporting-text="*required"
                              error-text="Please fill out this field"
                              class="w-full">
                          </md-filled-text-field>
                          </div>
                    </div>
                   
                    <div class="relative my-5">
                      <md-filled-text-field
                        v-model="email"
                        label="Email"
                        type="email"
                        required
                        supporting-text="*required"
                        error-text="Please fill out this field"
                        class="w-full">
                    </md-filled-text-field>
                    </div>

                    <div class="relative my-5">
                      <md-filled-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        required
                        supporting-text="*required"
                        error-text="Please fill out this field"
                        class="w-full">
                    </md-filled-text-field>
                    </div>

                      <div class="flex my-5">
                        <md-filled-tonal-button type="submit" class="w-full rounded-lg font-bold text-base">Register</md-filled-tonal-button>
                      </div>

                      <div class="text-center mt-10">
                      <p class="mt-auto text-[15px]">Already Have an Account?<span class="ml-1 text-[#6C4EAB] hover:underline cursor-pointer">Login</span></p>
                      </div>

                      
                  </form>
                </div>
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
import login from "../assets/images/login.jpg";
import { Icon } from "@iconify/vue";
import "@material/web/textfield/filled-text-field"
import "@material/web/checkbox/checkbox"
import "@material/web/button/filled-tonal-button"
import axios from 'axios';
import { ref } from 'vue';
import {toast} from 'vue3-toastify'

const name = ref();
const address = ref();
const email = ref();
const password = ref();

const submitRegistration = async () => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:5000/event_organizer/register`,
      {
        name: name.value,
        address: address.value,
        email: email.value,
        password: password.value,
        status: 'pending', 
      }
    );

    if (response.status === 200) {
      toast.success("Registration sucessful")
    } else if (response.status === 400) {
      const errorData = response.data;
      let errorMessage = "Registration failed.";
      if (errorData && errorData.message) {
        errorMessage = errorData.message;
      }
      toast.error(errorMessage);
    } else {
      toast.error("An error occurred. Please try again.");
    }
  } catch (error) {
    console.error('Registration error:', error);
    toast.error("An error occurred. Please try again.");
  }
};
</script>
