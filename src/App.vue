<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout></DefaultLayout>
</template>

<style>
.p-button-outlined {
  padding: 7px !important; /* override default padding */
  font-size: 14px !important; /* text-sm */
  border-color: #eceef1 !important;
  height: auto;
  color: #536576 !important;
}
.p-button .pi {
  font-size: 0.875rem; /* Equivalent to Tailwind text-sm */
}
</style>
