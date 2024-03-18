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

                  <form>
                    <p class="font-semibold text-[25px]">Welcome!</p>
                    <p class="mb-5 font-bold text-[30px]">Login your Account</p>
                    <!--Username input-->
                    <div class="relative my-5">
                      <label for="email" class="block mb-3 text-[18px] text-base font-semibold">Email Address</label>
                      <div class="flex items-center border-[2px] border-[#C0C0C0] rounded-full">
                        <span class="px-3 py-2">
                          <Icon icon="iconamoon:email-light" class="text-[#C0C0C0] w-6 h-6" />
                        </span>
                        <input type="email" name="email" id="email" class="w-full py-2 text-[#C0C0C0] text-[16px] rounded-full focus:outline-none" placeholder="Your Email" required />
                      </div>
                    </div>

                    <!--Password input-->
                    <div class="relative my-5">
                      <label for="password" class="block mb-3 text-[18px] text-base font-semibold">Password</label>
                      <div class="flex items-center border-[2px] border-[#C0C0C0] rounded-full">
                        <span class="px-3 py-2">
                          <Icon icon="mdi:password-outline" class="text-[#C0C0C0] w-6 h-6" /> 
                        </span>
                        <input type="password" name="password" id="password" class="w-full py-2 text-[#C0C0C0] text-[16px] rounded-full focus:outline-none" placeholder="Your Password" required />
                      </div>
                    </div>

                    <!-- Remember Me checkbox -->
                    <div class="mb-4 flex items-center">
                      <input id="rememberMe" type="checkbox" value="" class="mr-2 appearance-none h-6 w-6 border-[3px] border-[#C0C0C0] rounded checked:bg-[#6C4EAB] checked:border-transparent focus:outline-none">
                      <label for="rememberMe" class="text-[15px] text-[#C0C0C0]">Remember Me</label>
                    </div>

                    <div class="flex my-5">
                      <!--Sign Up button-->
                      <div class="mr-5 mt-3">
                        <button type="button" id="signup" class="text-[#6C4EAB] hover:text-white outline outline-2 hover:bg-[#6C4EAB] font-medium rounded-lg text-base px-5 py-2.5">Sign Up</button>
                      </div>
                      <!--Submit button-->
                      <div class="ml-5 mt-3">
                        <button type="submit" id="login" class="w-[120px] text-white bg-[#6C4EAB] hover:text-[#6C4EAB] outline outline-2 hover:bg-white font-medium rounded-lg text-base px-5 py-2.5">Login</button>
                      </div>
                    </div>
                  </form>
                </div>
                <!--Forgot Password-->
                <div class="text-center">
                  <p class="mt-auto mb-0 me-2 text-[15px] text-[#C0C0C0] underline cursor-pointer">Forgot Password?</p>
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
</script>
