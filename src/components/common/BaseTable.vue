<template>
  <DataTable
    :value="data"
    :paginator="paginator"
    :rows="rows"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    :loading="loading"
    :stripedRows="stripedRows"
    :selection="selection"
    v-model:selection="selectedItems"
    :sortField="sortField"
    :sortOrder="sortOrder"
    :filters="filters"
    :globalFilterFields="globalFilterFields"
    :scrollable="scrollable"
    :scrollHeight="scrollHeight"
    class="p-datatable"
    @row-select="$emit('row-select', $event)"
    @row-unselect="$emit('row-unselect', $event)"
    @sort="$emit('sort', $event)"
    @filter="$emit('filter', $event)"
  >
    <template #header v-if="$slots.header || showGlobalFilter">
      <div class="flex justify-between items-center mb-4">
        <slot name="header" />
        <span v-if="showGlobalFilter" class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="filters['global'].value"
            placeholder="Search..."
            class="p-inputtext-sm"
          />
        </span>
      </div>
    </template>

    <template #empty>
      <div class="text-center p-4">
        <p class="text-muted">No records found</p>
      </div>
    </template>

    <template #loading>
      <div class="text-center p-4">
        <i class="pi pi-spin pi-spinner text-3xl text-primary-500"></i>
      </div>
    </template>

    <slot />
  </DataTable>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  paginator: {
    type: Boolean,
    default: true
  },
  rows: {
    type: Number,
    default: 10
  },
  loading: {
    type: Boolean,
    default: false
  },
  stripedRows: {
    type: Boolean,
    default: true
  },
  selection: {
    type: Boolean,
    default: false
  },
  sortField: {
    type: String,
    default: ''
  },
  sortOrder: {
    type: Number,
    default: 1
  },
  showGlobalFilter: {
    type: Boolean,
    default: true
  },
  globalFilterFields: {
    type: Array,
    default: () => []
  },
  scrollable: {
    type: Boolean,
    default: false
  },
  scrollHeight: {
    type: String,
    default: '400px'
  }
});

const selectedItems = ref([]);
const filters = reactive({
  global: { value: null, matchMode: 'contains' }
});

defineEmits(['row-select', 'row-unselect', 'sort', 'filter']);
</script>

<style scoped>
.p-datatable {
  @apply w-full;

  :deep(.p-datatable-header) {
    @apply bg-transparent border-0 p-0;
  }

  :deep(.p-datatable-thead > tr > th) {
    @apply bg-gray-50 text-gray-700 font-semibold p-4;
  }

  :deep(.p-datatable-tbody > tr > td) {
    @apply p-4;
  }

  :deep(.p-datatable-tbody > tr.p-highlight) {
    @apply bg-blue-50;
  }

  :deep(.p-datatable-tbody > tr:hover) {
    @apply bg-gray-50;
  }

  :deep(.p-paginator) {
    @apply border-0 py-4;
  }

  :deep(.p-paginator-page) {
    @apply rounded-md;
  }

  :deep(.p-paginator-page.p-highlight) {
    @apply bg-blue-600 text-white;
  }

  :deep(.p-sortable-column) {
    @apply cursor-pointer;
  }

  :deep(.p-sortable-column:hover) {
    @apply bg-gray-100;
  }

  :deep(.p-sortable-column.p-highlight) {
    @apply bg-gray-100;
  }

  :deep(.p-sortable-column.p-highlight .p-sortable-column-icon) {
    @apply text-blue-600;
  }
}
</style> 