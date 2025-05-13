<template>
  <div class="flex min-h-screen bg-gray-50 text-gray-800">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Page Content -->
      <main class="flex-1 bg-white overflow-y-auto">
        <router-view />
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
/* Optional: Scrollbar styles */
main::-webkit-scrollbar {
  width: 6px;
}
main::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

/* Smooth transition for sidebar */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
