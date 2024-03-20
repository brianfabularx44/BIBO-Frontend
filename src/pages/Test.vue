<template>
   <form>
            <!--Username input-->
                <div class="m-5">
                <div class="mt-2">
                     <label for="email">Email Address</label>
                        <div>
                          <input type="email" class='outline outline-2 mt-2 mb-2' name="email" id="email"  placeholder="Your Email" required />
                        </div>
                      </div>
  
                      <!--Password input-->
                      <div>
                        <label for="password">Password</label>
                        <div>
                          <input type="password" class='outline outline-2 mt-2 mb-2' name="password" id="password" placeholder="Your Password" required />
                        </div>
                      </div>

                        <!--Submit button-->
                        <div class="ml-5 mt-3">
                          <button type="submit" class="outline outline-2 w-[60px]" id="login" >Login</button>
                        </div>
                    </div>
                    </form>
  </template>
  
  <script setup>
  import login from "../assets/images/login.jpg";
  import { Icon } from "@iconify/vue";
  </script>
  