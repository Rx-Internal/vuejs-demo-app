<template>
  <Card class="p-card">
    <template #header v-if="$slots.header">
      <div class="card-header">
        <slot name="header" />
      </div>
    </template>

    <template #title v-if="title">
      <h3 class="text-xl font-semibold mb-4 text-primary">{{ title }}</h3>
    </template>

    <template #subtitle v-if="subtitle">
      <p class="text-muted mb-4">{{ subtitle }}</p>
    </template>

    <div class="card-content">
      <slot />
    </div>

    <template #footer v-if="$slots.footer">
      <div class="card-footer">
        <slot name="footer" />
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import Card from 'primevue/card';

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.p-card {
  @apply w-full;

  :deep(.p-card) {
    @apply shadow-md rounded-lg;
  }

  :deep(.p-card-body) {
    @apply p-6;
  }

  :deep(.p-card-content) {
    @apply p-0;
  }

  .card-header {
    @apply p-4 border-b border-gray-200;
  }

  .card-footer {
    @apply p-4 border-t border-gray-200;
  }
}
</style> 