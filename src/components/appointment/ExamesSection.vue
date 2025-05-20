<template>
  <div class="flex flex-col gap-4 mt-6">
    <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold">
      {{ $t('exams') }}
    </div>
    <div class="flex flex-wrap gap-4 items-end">
      <div class="flex flex-col flex-1 min-w-[150px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('hour')
        }}</label>
        <BaseDropdown
          v-model="form.hora"
          :options="HORAS"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[150px] mb-4">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('date')
        }}</label>
        <Calendar v-model="form.data" dateFormat="dd/mm/yy" class="w-full" />
      </div>
      <div class="flex flex-col flex-1 min-w-[150px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('exam')
        }}</label>
        <BaseDropdown
          v-model="form.exame"
          :options="EXAMES"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[200px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('consultingDoctor')
        }}</label>
        <BaseDropdown
          v-model="form.medicoConsulta"
          :options="medicosConsulta"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div v-if="editMode" class="flex items-center gap-2 mb-6">
        <ToggleSwitch v-model="checked1" />
        <span class="text-sm text-gray-700">{{ $t('admit') }}</span>
      </div>
    </div>
    <div v-if="editMode" class="flex flex-wrap gap-4 items-end">
      <div class="flex flex-col flex-1 min-w-[150px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('hour')
        }}</label>
        <BaseDropdown
          v-model="form.hora1"
          :options="HORAS"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[150px] mb-4">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('date')
        }}</label>
        <Calendar v-model="form.data1" dateFormat="dd/mm/yy" class="w-full" />
      </div>
      <div class="flex flex-col flex-1 min-w-[150px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('exam')
        }}</label>
        <BaseDropdown
          v-model="form.exame"
          :options="EXAMES"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[200px]">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('consultingDoctor')
        }}</label>
        <BaseDropdown
          v-model="form.medicoConsulta"
          :options="medicosConsulta"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div v-if="editMode" class="flex items-center gap-2 mb-6">
        <ToggleSwitch v-model="checked2" />
        <span class="text-sm text-gray-700">{{ $t('admit') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import BaseDropdown from '../../components/common/BaseDropdown.vue';
import Checkbox from 'primevue/checkbox';
import ToggleSwitch from 'primevue/toggleswitch';
import { defineProps } from 'vue';
import { MEDICOS, HORAS, EXAMES } from '../../constants/common';
const medicosConsulta = [{ label: 'Automático', value: 'auto' }];

import Tag from 'primevue/tag';
defineProps({
    editMode: {
    type: Boolean,
    default: false
  },
  
});
const form = ref({
  medicoPrescritor: null,
  idPrescricao: '1234597856',
  senhaKiosk: '',
  hora: '11:00',
  hora1: '11:30',
  data: '10/04/2025',
  data1: '10/04/2025',
  exame: 'ECG',
  medicoConsulta: 'auto',
  nomeCompleto: '',
  dataNascimento: '',
  cartaoCidadao: '',
  telefone: '',
  confirmado: false,
});
</script>

<style></style>
