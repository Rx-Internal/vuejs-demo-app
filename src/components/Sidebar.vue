<template>
  <div class="bg-gray-50 text-black w-18 h-full border border-gray-300">
    <div class="flex flex-col items-center h-full justify-between">
      <ul class="space-y-4 my-6 flex flex-col items-center justify-between">
        <li>
          <router-link to="/" class="text-blue-800 hover:text-blue-800">
            <i class="pi pi-bars" style="font-size: 1.5rem"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <img src="../assets/heartBlue-logo.png" class="w-10" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-clipboard" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/Agenda" class="text-black-300 hover:text-black">
            <img class="w-6" src="../assets/open-book.png" />
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-users" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
      </ul>

      <ul class="space-y-4 my-6 flex flex-col items-center justify-between">
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-comment" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-bell" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-cog" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-black-300 hover:text-black">
            <i class="pi pi-sign-out" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
        <li
          class="bg-teal-300 text-gray-800 font-bold rounded-full h-10 w-10 flex items-center justify-center text-sm"
        >
          JD
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
