<template>
  <div class="flex flex-col gap-">
    <div class="flex flex-wrap items-end gap-4">
      <div class="flex flex-col flex-1 min-w-[200px]">
        <div class="flex justify-between items-center mb-1">
          <label class="text-sm font-medium text-primary-900 mb-1">{{
            $t('prescriberDoctor')
          }}</label>
          <Tag
            severity="secondary"
            :value="$t('optional')"
            rounded
            :style="{ fontSize: '12px', fontWeight: 'normal' }"
          ></Tag>
        </div>
        <BaseDropdown
          v-model="form.medicoPrescritor"
          :options="MEDICOS"
          optionLabel="label"
          optionValue="value"
          class="p-dropdown"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[200px] mb-4">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('prescriptionId')
        }}</label>
        <InputText v-model="form.idPrescricao" class="p-inputtext w-full" />
      </div>
      <div class="flex flex-col flex-1 min-w-[200px] mb-4">
        <div class="flex justify-between items-center mb-1">
          <label class="text-sm font-medium text-primary-900 mb-1">{{
            $t('uploadPrescription')
          }}</label>
          <Tag
            severity="secondary"
            :value="$t('optional')"
            rounded
            :style="{ fontSize: '12px', fontWeight: 'normal' }"
          ></Tag>
        </div>
        <FileUpload
          mode="basic"
          name="prescricao"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          :auto="true"
          :chooseLabel="$t('scheduling.chooseFile')"
          class="p-button p-button-outlined w-full"
        />
      </div>
      <div class="flex flex-col flex-1 min-w-[200px] mb-4">
        <label class="text-sm font-medium text-primary-900 mb-1">{{
          $t('kioskPassword')
        }}</label>
        <InputText v-model="form.senhaKiosk" class="p-inputtext w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import { MEDICOS } from '../../constants/common';
import BaseDropdown from '../../components/common/BaseDropdown.vue';
import Tag from 'primevue/tag';
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
