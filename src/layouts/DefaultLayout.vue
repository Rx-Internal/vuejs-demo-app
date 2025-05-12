<template>
  <div class="flex min-h-screen bg-gray-50 text-gray-800">
    <!-- Sidebar -->
    <!-- <aside class="w-18 bg-white border-r hidden md:block">
      <Sidebar />
    </aside> -->

    <!-- Mobile Sidebar Toggle -->
    <div class="md:hidden fixed top-4 left-4 z-50">
      <Button icon="pi pi-bars" @click="sidebarVisible = true" />
      <PrimeSidebar 
        v-model:visible="sidebarVisible" 
        class="w-64"
        :dismissable="true" 
        :blockScroll="true" 
        transition="slide" 
      />
    </div>
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <!-- <Header /> -->

      <!-- Page Content -->
      <main class="flex-1 bg-white  overflow-y-auto">
        <router-view />        
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import Sidebar from '../components/Sidebar.vue'
// import { Button } from 'primevue/button'
import PrimeSidebar from 'primevue/sidebar'

const sidebarVisible = ref(false)
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
