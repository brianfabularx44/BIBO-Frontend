<template>
  <md-dialog
    ref="dialog"
    :open="modalActive"
    @close="close"
    open
    >
    
    <form slot="content" id="form-id" method="dialog">
      <h1 class="mb-5 mt-3 font-bold text-[30px]">Add Event</h1>
      <md-filled-text-field 
      v-model="name"
      label="Event Name"
      class="w-full mb-5"
      required></md-filled-text-field>
      
      <md-filled-text-field 
      v-model="short_description"
      label="Short Description" 
      type="textarea" 
      class="w-full mb-5"
      required>
      </md-filled-text-field>
  
      <md-filled-text-field 
      v-model="venue"
      label="Venue"
      class="w-full mb-7"
      required></md-filled-text-field>
  
      <div class="grid grid-cols-2 gap-5 mb-5">
      <DatePicker v-model="date"
        class="inline-block"
        color="purple"
        :attributes="attributes"
        popover>
        <template #default="{ togglePopover }">  <md-filled-text-field
            class="w-full top"
            label="Date"
            @click="togglePopover" 
            readonly>
          </md-filled-text-field>
        </template>
      </DatePicker>  
  
      <DatePicker v-model="time"
        class="inline-block"
        color="purple"
        :attributes="attributes"
        popover>
        <template #default="{ togglePopover }">  <md-filled-text-field
            class="w-full top"
            label="Time"
            @click="togglePopover" 
            readonly>
          </md-filled-text-field>
        </template>
      </DatePicker> 
      </div>
    </form>
  
    <div slot="actions">
      <md-text-button @click="close" form="form-id">Cancel</md-text-button>
      <md-text-button @click="submit" form="form-id">Add</md-text-button>
    </div>
  </md-dialog>
  
  
  
  </template>
  
  
  <script setup>
  import "@material/web/button/elevated-button";
  import "@material/web/dialog/dialog";
  import {toast} from 'vue3-toastify'
  import "@material/web/button/text-button";
  import "@material/web/textfield/filled-text-field";
  import "v-calendar/style.css";
  import axios from 'axios';
  import { ref } from 'vue';
  
  import { DatePicker } from "v-calendar";

  const dialog = ref();
  const name = ref();
  const short_description = ref();
  const venue = ref();
  const date = ref();
  const time = ref();
    
  const submit = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/events/create_event', {
      name: name.value,
      short_description: short_description.value,
      venue: venue.value,
      date: date.value,
      time: time.value,
    });

    if (response.status === 201) {
      toast.success("Event created successfully!");
      name.value = "";
      short_description.value = "";
      venue.value = "";
      date.value = undefined;
      time.value = "";
    } else {
      toast.error("Error creating event");
    }
  } catch (error) {
    toast.error("An error occurred:", error.message);
  }
};
  </script>

  <script>
   export default {
    components: {
      DatePicker,
    },
      props: {
      modalActive: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        date: null,
        attributes: [  
          {
            highlight: {
              color: "purple",
              fillMode: "outline",
            },
            popover: {
              label: "Today",
              visibility: "hover",
              placement: "top",
            },
            dates: [new Date()],
          },
        ],
      };
    },
    methods: {
    close() {
      this.$refs.dialog.close();
    },
  }
}
</script>
  

