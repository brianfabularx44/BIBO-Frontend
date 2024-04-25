<template>
    <md-dialog
      ref="dialog"
      :open="modalActive"
      @close="close"
      open
      :scrim-click-action="isLoading ? '' : 'close'"
      :escape-key-action="isLoading ? '' : 'close'"
      >
      
      <form slot="content" id="form-id" method="dialog">
        <h1 class="mb-5 mt-3 font-bold text-[30px]">Add a Runner</h1>
        <div class="grid grid-cols-2 gap-5 mb-5">
            <md-filled-text-field 
            v-model="first_name"
            label="First Name"
            class="w-full mb-5"></md-filled-text-field>

            <md-filled-text-field 
            v-model="last_name"
            label="Last Name"
            class="w-full mb-5"></md-filled-text-field>
         </div>
             
        <md-filled-text-field 
        v-model="bib_no"
        label="Bib Number"
        class="w-full mb-7"></md-filled-text-field>        
      </form>
      <div slot="actions">
        <md-text-button @click="close">Cancel</md-text-button>
        <md-text-button @click="submit">Add</md-text-button>
      </div>
    </md-dialog>
    
    
    
    </template>
    
    
    <script>
    import "@material/web/button/elevated-button";
    import "@material/web/dialog/dialog";
    import {toast} from 'vue3-toastify'
    import "@material/web/button/text-button";
    import "@material/web/textfield/filled-text-field";
    import "v-calendar/style.css";
    import axios from 'axios';
    import { ref } from 'vue';
    
  
    const first_name = ref();
    const last_name = ref();
    const bib_no = ref();

    export default {
      props: {
      modalActive: {
        type: Boolean,
        default: false,
      }
    },
    }
  
    const submit = async () => {
    if (!first_name.value) {
      toast.error("First Name is empty");
      return;
    }
    if (!last_name.value) {
      toast.error("Last Name is empty");
      return;
    }
    if (!bib_no.value) {
      toast.error("BIB Number is empty");
      return;
    }
  
    try {
      const response = await axios.post('runners/registration', {
        first_name: first_name.value,
        last_name: last_name.value,
        bib_no: bib_no.value,
      });
  
      if (response.status === 201) {
        toast.success("Added user");
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
    
  
  
  