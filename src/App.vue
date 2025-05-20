<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout />
</template>

<style>
/* PrimeVue component overrides using Tailwind classes */
.p-button {
  @apply transition-colors duration-200;
}

.p-button-outlined {
  @apply border border-gray-200 text-gray-600 hover:bg-gray-100;
}

.p-button .pi {
  @apply text-sm;
}

/* Global scrollbar styles using Tailwind */
::-webkit-scrollbar {
  @apply w-1.5;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}
</style>
