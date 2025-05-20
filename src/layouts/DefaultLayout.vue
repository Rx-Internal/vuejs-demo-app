<template>
  <div class="flex min-h-screen bg-gray-50 text-gray-800">
    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Page Content -->
      <main class="flex-1 bg-surface-card">
        <div class="">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PrimeSidebar from 'primevue/sidebar';
const sidebarVisible = ref(false);
</script>

<style scoped>
/* No additional styles needed - using Tailwind classes */
</style>
