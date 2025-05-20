<template>
  <div class="base-input">
    <label v-if="label" class="text-sm font-medium text-primary-900 mb-1">
      {{ label }}
      <!-- <span v-if="required" class="form-label-required">*</span>
      <span v-if="!required" class="form-label-optional">({{ $t('optional') }})</span> -->
    </label>
    <InputText
      :modelValue="modelValue"
      :class="[
        'p-inputtext w-full',
        { 'p-input-sm': size === 'small' },
        { 'p-input-lg': size === 'large' },
        { 'p-input-filled': variant === 'filled' },
        { 'p-input-outlined': variant === 'outlined' },
        { 'p-invalid': error }
      ]"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <small v-if="error" class="text-error text-sm mt-1">{{ error }}</small>
    <small v-if="hint" class="text-muted text-sm mt-1">{{ hint }}</small>
  </div>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['small', 'normal', 'large'].includes(value)
  },
  variant: {
    type: String,
    default: 'outlined',
    validator: (value: string) => ['filled', 'outlined'].includes(value)
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
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

defineEmits(['update:modelValue', 'blur', 'focus']);
</script>

<style scoped>
.base-input {
  @apply w-full mb-4;
}

.base-input:disabled {
  @apply opacity-60 cursor-not-allowed;
}
</style> 