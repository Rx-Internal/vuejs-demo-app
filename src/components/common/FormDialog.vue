<template>
  <Drawer
    :visible="modelValue"
    @update:visible="$emit('update:modelValue', $event)"
    :modal="true"
    :style="{ width: '50vw' }"
    :header="title"
    :closable="true"
    :position="position"
    class="p-drawer"
  >
    <div class="">
      <slot></slot>
    </div>
    <template #footer>
      <slot name="footer">
        <div class="flex justify-end space-x-4 p-4 border-t border-gray-200">
          <BaseButton
            :label="cancelLabel"
            text
            variant="secondary"
            @click="handleCancel"
          />
          <BaseButton
            :label="saveLabel"
            icon="pi pi-save"
            variant="primary"
            @click="handleSave"
          />
        </div>
      </slot>
    </template>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import Drawer from 'primevue/drawer';
import Textarea from 'primevue/textarea';
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import BaseDropdown from './BaseDropdown.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Form Dialog'
  },
  saveLabel: {
    type: String,
    default: 'Save'
  },
  cancelLabel: {
    type: String,
    default: 'Cancel'
  },
  position: {
    type: String,
    default: 'middle',
    validator: (value: string) => ['left', 'right', 'top', 'bottom'].includes(value)
  }
});

// Emits
const emit = defineEmits(['update:modelValue', 'save', 'cancel']);

// Form Data
const formData = ref({
  name: '',
  email: '',
  type: null,
  status: null,
  description: '',
  notes: ''
});

// Options for dropdowns
const typeOptions = [
  { name: 'Type 1', value: 'type1' },
  { name: 'Type 2', value: 'type2' },
  { name: 'Type 3', value: 'type3' }
];

const statusOptions = [
  { name: 'Active', value: 'active' },
  { name: 'Inactive', value: 'inactive' },
  { name: 'Pending', value: 'pending' }
];

// Labels and Placeholders
const labels = {
  name: 'Name',
  email: 'Email',
  type: 'Type',
  status: 'Status',
  description: 'Description',
  notes: 'Notes'
};

const placeholders = {
  name: 'Enter name',
  email: 'Enter email',
  selectType: 'Select type',
  selectStatus: 'Select status',
  description: 'Enter description',
  notes: 'Enter notes'
};

const tabs = {
  mainInfo: 'Main Information',
  additionalInfo: 'Additional Information'
};

// Handlers
const handleSave = () => {
  emit('save', formData.value);
  emit('update:modelValue', false);
};

const handleCancel = () => {
  emit('cancel');
  emit('update:modelValue', false);
};
</script>

<style scoped>
.p-drawer {
  :deep(.p-drawer-header) {
    @apply p-6 border-b border-gray-200;
  }

  :deep(.p-drawer-content) {
    @apply p-0;
  }

  :deep(.p-drawer-footer) {
    @apply p-0;
  }

  :deep(.p-drawer-header-content) {
    @apply text-xl font-semibold text-primary-500;
  }

  :deep(.p-drawer-close) {
    @apply text-gray-500 hover:text-gray-700;
  }
}

.field {
  @apply mb-4;
}

.text-danger-500 {
  @apply text-red-600;
}
</style> 