<template>
  <div class="relative w-full min-w-[200px] h-10 mx-3">
    <input
      class="peer w-full h-[45px] bg-transparent text-black outline outline-0 focus:outline-3 transition-all placeholder-shown:border placeholder-shown:border-[#6B73A6] placeholder-shown:border-t-blue-[#6B73A6] border focus:border-[3px] border-t-transparent focus:border-t-transparent text-[16px] px-3 py-2.5 rounded-[7px] border-[#6B73A6] focus:border-[6B73A6]"
      placeholder=" "
    />
    <label
      class="flex w-full h-[55px]  select-none pointer-events-none absolute left-0 font-medium !overflow-visible truncate peer-placeholder-shown:text-[#6B73A6] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#6B73A6] transition-all -top-1.5 peer-placeholder-shown:text-[16px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-[3px] before:border-l peer-focus:before:border-l-[-3px] before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-[3px] after:border-r peer-focus:after:border-r-[3px] after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-[#6B73A6] peer-focus:text-[#6B73A6] before:border-[#6B73A6] peer-focus:before:!border-[#6B73A6] after:border-[#6B73A6] peer-focus:after:!border-[#6B73A6]"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>
