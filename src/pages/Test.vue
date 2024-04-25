<template>
<div class="overflow-x-auto border-gray-200 sm:rounded-2xl font-sans">
  <table class="w-full text-sm text-left border-collapse border">
    <thead class="bg-[#F5EBF2]">
      <tr class="justify-between">
        <th class="px-6 py-3 font-normal">Event ID</th>
        <th class="px-6 py-3 font-normal">First Name</th>
        <th class="px-6 py-3 font-normal">Last Name</th>
        <th class="px-6 py-3 font-normal">BIB Number</th>
        <th class="px-6 py-3 font-normal">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, index) in data" :key="index" class="hover:bg-gray-100">
        <td v-for="(value, key) in row" :key="key" class="px-6 py-4 border-b border-gray-400">{{ value }}</td>
        <td class="px-6 py-4 border-b border-gray-400">
          <div class="flex gap-3">
            <button class="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">Edit</button>
            <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>