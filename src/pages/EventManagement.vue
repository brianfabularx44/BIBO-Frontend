<template>
    <div class="container mx-auto p-4">
        <Navbar/>
      <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
        Add Event
      </button>
  
      <table class="mt-4 border border-gray-200 shadow-md rounded-lg w-full">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in events" :key="index" class="hover:bg-gray-200">
            <td class="px-4 py-2">{{ event.name }}</td>
            <td class="px-4 py-2">{{ event.date }}</td>
            <td class="px-4 py-2 flex space-x-2">
              <button @click="editEvent(index)" class="text-blue-500 hover:underline">Edit</button>
              <button @click="confirmDelete(index)" class="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div class="bg-white px-8 py-5 rounded-md shadow-md">
          <h3 class="text-xl font-medium mb-4"> {{ editedEventIndex !== null ? 'Edit Event' : 'Add Event' }}</h3>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 mb-1">Name:</label>
            <input v-model="newEvent.name" type="text" id="name" class="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label for="date" class="block text-gray-700 mb-1">Date:</label>
            <input v-model="newEvent.date" type="date" id="date" class="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500">
          </div>
          <div class="flex justify-end">
            <button @click="addEvent" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
              {{ editedEventIndex !== null ? 'Update' : 'Save' }}
            </button>
            <button @click="closeModal" class="ml-2 text-gray-500 hover:underline">Cancel</button>
          </div>
        </div>
      </div>
  
      <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div class="bg-white px-8 py-5 rounded-md shadow-md">
          <p class="text-lg font-medium mb-4">Are you sure you want to delete this event?</p>
          <div class="flex justify-end">
            <button @click="deleteEvent" class="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
              Yes
            </button>
            <button @click="cancelDelete" class="ml-2 text-gray-500 hover:underline">No</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  import Navbar from '../components/Navbar.vue';
  
  // Define reactive variables
  const events = ref([]);
  const showModal = ref(false);
  const showDeleteModal = ref(false);
  const newEvent = ref({
    name: '',
    date: ''
  });
  const editedEventIndex = ref(null); // Track the index of the event being edited
  
  // Define methods
  const openModal = () => {
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
    newEvent.value = {
      name: '',
      date: ''
    };
    editedEventIndex.value = null; // Reset edited event index
  };
  
  const addEvent = () => {
    if (editedEventIndex.value !== null) {
      // If an event is being edited, update it
      events.value[editedEventIndex.value] = { ...newEvent.value };
    } else {
      // Otherwise, add a new event
      events.value.push({ ...newEvent.value });
    }
    closeModal();
  };
  
  const editEvent = (index) => {
    // Open modal with event details for editing
    const eventToEdit = events.value[index];
    newEvent.value = { ...eventToEdit };
    showModal.value = true;
    editedEventIndex.value = index; // Set the index of the event being edited
  };
  
  const confirmDelete = (index) => {
    showDeleteModal.value = true;
    editedEventIndex.value = index; // Set the index of the event being deleted
  };
  
  const deleteEvent = () => {
    events.value.splice(editedEventIndex.value, 1);
    showDeleteModal.value = false;
  };
  
  const cancelDelete = () => {
    showDeleteModal.value = false;
  };
  
  </script>
  