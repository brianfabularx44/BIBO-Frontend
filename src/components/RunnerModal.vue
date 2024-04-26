<template>
    <md-dialog
      ref="dialog"
      :open="modalActive"
      @close="close"
      open
      >
      <console-log message="Modal is rendered" /> 
      <form @submit.prevent="submitRunner" slot="content" id="form-id" method="dialog">
        <h1 class="mb-5 mt-3 font-bold text-[30px]">Add a Runner</h1>
        <div class="grid grid-cols-2 gap-5 mb-5">
            <md-filled-text-field 
            v-model="first_name"
            label="First Name"
            class="w-full mb-5"
            required></md-filled-text-field>

            <md-filled-text-field 
            v-model="last_name"
            label="Last Name"
            class="w-full mb-5"
            required></md-filled-text-field>
         </div>
             
        <md-filled-text-field 
        v-model="bib_no"
        label="Bib Number"
        class="w-full mb-7"></md-filled-text-field>   
        <div slot="actions"
        required>
        <md-text-button @click="close" form="form-id">Cancel</md-text-button>
        <md-text-button type="submit" form="form-id">Add</md-text-button>
        </div>     
      </form>
    </md-dialog>
    
    
    
    </template>
    
    
    <script setup>
    import { ref } from 'vue';
    import "@material/web/dialog/dialog";
    import { toast } from "vue3-toastify";
    import "@material/web/button/text-button";
    import "@material/web/textfield/filled-text-field";
    import "v-calendar/style.css";
    import axios from "axios";
    
    const first_name = ref("");
    const last_name = ref("");
    const bib_no = ref("");
    
  
    const submitRunner = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/runners/registration', {
        first_name: first_name.value,
        last_name: last_name.value,
        bib_no: bib_no.value,
      });
  
      if (response.status === 201) {
        toast.success("Added user");
        console.log("Response:", response);
        first_name.value = "";
        last_name.value = "";
        bib_no.value = "";
      } else {
        toast.error("Error adding user");
      }
    } catch (error) {
      toast.error("An error occurred:", error.message);
    }
  };
    </script>
    
  <script>   
     export default {
      props: {
      modalActive: {
        type: Boolean,
        default: false,
      }
    },

    methods: {
  close() {
    this.$refs.dialog.close(); 
  },
  }
  }
  </script>
  
  