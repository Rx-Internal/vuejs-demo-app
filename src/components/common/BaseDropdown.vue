<template>
  <div class="base-dropdown">
    <label v-if="label" class="block text-sm font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-danger-500">*</span>
    </label>
    <Dropdown
      :modelValue="modelValue"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :class="[
        'w-full',
        { 'p-invalid': error }
      ]"
      :disabled="disabled"
      :loading="loading"
      :filter="filter"
      :showClear="showClear"
      @update:modelValue="$emit('update:modelValue', $event)"
      @change="$emit('change', $event)"
    />
    <small v-if="error" class="p-error">{{ error }}</small>
    <small v-if="hint" class="text-surface-600">{{ hint }}</small>
  </div>
</template>

<script lang="ts" setup>
import Dropdown from 'primevue/dropdown';

defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: null
  },
  options: {
    type: Array,
    required: true
  },
  optionLabel: {
    type: String,
    default: 'label'
  },
  optionValue: {
    type: String,
    default: 'value'
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  required: {
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
  },
  filter: {
    type: Boolean,
    default: false
  },
  showClear: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue', 'change']);
</script>

<style scoped>
.base-dropdown {
  margin-bottom: 1rem;
}
</style> 