<template>
  <Button
    :label="label"
    :icon="icon"
    :class="[
      'p-button',
      `p-button-${variant}`,
      { 'p-button-rounded': rounded },
      { 'p-button-text': text },
      { 'p-button-outlined': outlined },
      { 'p-button-sm': size === 'small' },
      { 'p-button-lg': size === 'large' },
      { 'opacity-60 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    :loading="loading"
    @click="$emit('click', $event)"
  />
</template>

<script lang="ts" setup>
import Button from 'primevue/button';

defineProps({
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'success', 'info', 'warning', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['small', 'normal', 'large'].includes(value)
  },
  rounded: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped>
.p-button {
  @apply font-medium;
}

.p-button-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.p-button-secondary {
  @apply bg-gray-200 text-gray-700 hover:bg-gray-300;
}

.p-button-success {
  @apply bg-green-600 text-white hover:bg-green-700;
}

.p-button-info {
  @apply bg-blue-400 text-white hover:bg-blue-500;
}

.p-button-warning {
  @apply bg-yellow-500 text-white hover:bg-yellow-600;
}

.p-button-danger {
  @apply bg-red-600 text-white hover:bg-red-700;
}

.p-button-text {
  @apply bg-transparent text-gray-700 hover:bg-gray-100;
}

.p-button-outlined {
  @apply bg-transparent border-2;
}
.p-button-outlined {
  @apply border border-gray-200 text-gray-600 hover:bg-gray-100;
}
.p-button-outlined.p-button-primary {
  @apply border border-gray-200 text-gray-600 hover:bg-gray-100;
}

.p-button-outlined.p-button-secondary {
  @apply border-gray-300 text-gray-700 hover:bg-gray-50;
}

.p-button-outlined.p-button-success {
  @apply border-green-600 text-green-600 hover:bg-green-50;
}

.p-button-outlined.p-button-info {
  @apply border-blue-400 text-blue-400 hover:bg-blue-50;
}

.p-button-outlined.p-button-warning {
  @apply border-yellow-500 text-yellow-500 hover:bg-yellow-50;
}

.p-button-outlined.p-button-danger {
  @apply border-red-600 text-red-600 hover:bg-red-50;
}
</style> 