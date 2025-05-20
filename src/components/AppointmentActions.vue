<template>
  <div class="relative inline-block text-left">
    <i
      class="pi pi-ellipsis-v text-primary-600 cursor-pointer mt-1 font-extrabold"
      :style="{ fontSize: '12px', fontWeight: 'bolder' }"
      text
      @click="toggleMenu"
    />
    <div
      v-if="menuVisible"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-white ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <Button
          @click="viewPatient"
          class="w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
        >
          {{ $t('menu.viewPatient') }}
        </Button>
        <Button
          @click="editAppointment"
          class="w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
        >
          {{ $t('menu.editAppointment') }}
        </Button>
        <Button
          @click="deleteAppointment"
          class="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-100"
        >
          {{ $t('menu.deleteAppointment') }}
        </Button>
      </div>
    </div>
  </div>
  <Dialog
    class="rounded-4xl"
    v-model:visible="visibleDelete"
    :header="$t('dialog.deleteAppointmentHeader')"
    :style="{ width: '25rem', borderRadius: '36px' }"
  >
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      {{ $t('dialog.deleteAppointmentConfirm') }}
    </span>
    <div class="flex justify-end gap-2">
      <BaseButton
        type="button"
        :label="$t('buttons.cancel')"
        text
        variant="secondary"
        @click="visibleDelete = false"
      />
      <BaseButton
        type="button"
        :label="$t('buttons.delete')"
        variant="danger"
        icon="pi pi-trash"
        iconPos="right"
        @click="visibleDelete = false"
      />
    </div>
  </Dialog>
  <EditAppointment v-model:visible="EditAppointmentTab" />
  <Appointment v-model:visible="AppointmentTab" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import EditAppointment from './EditAppointment.vue';
import Appointment from './Appointment.vue';
import BaseButton from '../components/common/BaseButton.vue';

const menuVisible = ref(false);
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
const visibleDelete = ref(false);
const AppointmentTab = ref(false);
const EditAppointmentTab = ref(false);
// Emits (optional modal trigger):
const emit = defineEmits<{
  (e: 'view'): void;
  (e: 'edit'): void;
  (e: 'delete'): void;
}>();

const viewPatient = () => {
  AppointmentTab.value = true;
  toggleMenu();
};
const editAppointment = () => {
  EditAppointmentTab.value = true;
  toggleMenu();
};
const deleteAppointment = () => {
  toggleMenu();
  visibleDelete.value = true;
};

// Close on outside click
</script>

<style scoped>
.pi {
  font-size: 12px !important;
}
/* You can fine-tune spacing or shadow here */
</style>
