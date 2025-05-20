<template>
  <FormDialog
    class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    v-model="visible"
    :title="$t('drawerTitle')"
    position="right"
  >
    <!-- Prescrição Section -->
    <PrescriptionSection></PrescriptionSection>

    <!-- Exames Section -->
    <ExamesSection editMode="true"></ExamesSection>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4 mt-6">
      <div
        class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center"
      >
        <span>{{ $t('patient') }}</span>
        <BaseButton
          :label="$t('editPatientData')"
          link
          icon="pi pi-user"
          variant="primary"
          class="py-0"
          @click="IsViewPatient = !IsViewPatient"
        />
      </div>
    </div>
    <div>
      <PersonalData></PersonalData>

      <button
        @click="deleteAppointment"
        class="flex items-center bg-[#11111100] text-red-700 py-2 px-4 rounded-md"
      >
        <i class="pi pi-trash mr-2"></i>
        {{ $t('deleteAppointment') }}
      </button>
    </div>
    <!-- Footer -->
    <template #footer>
      <div
        class="flex flex-col md:flex-row md:items-center justify-between mt-6 border-t pt-4 gap-4"
      >
        <div class="flex items-center">
          <button
            @click="deleteAppointment"
            class="flex items-center bg-[#11111100] text-red-700 py-2 px-4 rounded-md"
          >
            <i class="pi pi-trash mr-2"></i>
          </button>
          <Checkbox
            v-model="form.confirmado"
            :binary="true"
            inputId="confirm"
          />
          <label for="confirm" class="ml-2">{{
            $t('confirmPatientData')
          }}</label>
        </div>
        <div class="flex gap-2">
          <BaseButton :label="$t('cancel')" text class="text-blue-500" />
          <BaseButton :label="$t('admitAction')" size="small" @click="save" />
        </div>
      </div>
    </template>
    <ViewPatient v-model:visible="IsViewPatient"></ViewPatient>
  </FormDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import FormDialog from './common/FormDialog.vue';
import ToggleSwitch from 'primevue/toggleswitch';
import { MEDICOS, HORAS, EXAMES } from '../constants/common';
import Tag from 'primevue/tag';
import ViewPatient from './ViewPatient.vue';
import BaseButton from '../components/common/BaseButton.vue';
import BaseDropdown from '../components/common/BaseDropdown.vue';
import PersonalData from './appointment/PersonalData.vue';
import PrescriptionSection from './appointment/PrescriptionSection.vue';
import ExamesSection from './appointment/ExamesSection.vue';

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

const checked1 = ref(true);
const checked2 = ref(true);
const IsViewPatient = ref(false);
</script>

<style scoped>
.p-fileupload-choose-button {
  background: #4f39f6 !important;
  color: #ffffff;
}
.p-button {
  background-color: #4f39f6;
  color: #ffffff;
}
.p-button-link {
  background-color: #ffffff00;
  color: #4f39f6;
}

:deep(.p-calendar) {
  @apply w-full;
}

:deep(.p-calendar input) {
  @apply w-full;
}

:deep(.p-fileupload-buttonbar) {
  @apply p-0;
}

:deep(.p-fileupload-content) {
  @apply hidden;
}
</style>
