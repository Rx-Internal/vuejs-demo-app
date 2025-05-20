<template>
  <Drawer
    class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    :header="$t('scheduling.scheduleExam')"
    position="right"
  >
    <!-- Prescrição Section -->
    <PrescriptionSection></PrescriptionSection>

    <!-- Exames Section -->
    <ExamesSection></ExamesSection>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4 mt-9">
      <div
        class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center"
      >
        <span>{{ $t('patient') }}</span>
        <BaseButton
          v-if="isUtente"
          :label="$t('readCitizenCard')"
          link
          icon="pi pi-check-circle"
          class="text-[#4f39f6] py-0 font-extrabold"
          style="font-weight: bolder"
          @click="isUtente = !isUtente"
        />
        <BaseButton
          v-else
          :label="$t('readCitizenCard')"
          link
          icon="pi pi-user"
          class="text-[#4f39f6] py-0 font-extrabold"
          style="font-weight: bolder"
          @click="IsViewPatient = !IsViewPatient"
        />
      </div>
      <div v-if="isUtente" class="">
        <div class="flex flex-col mt-4">
          <!-- <label class="text-sm font-medium text-primary-900 mb-1">
            {{ $t('fullName') }}
          </label> -->
          <BaseInput :label="$t('fullName')" v-model="form.nomeCompleto" />
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
          <div class="flex flex-col flex-1 min-w-[150px]">
            <!-- <label class="text-sm font-medium text-primary-900 mb-1">
              {{ $t('birthDate') }}
            </label> -->
            <BaseInput :label="$t('birthDate')" v-model="form.dataNascimento" />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <!-- <label class="text-sm font-medium text-primary-900 mb-1">
              {{ $t('citizenCard') }}
            </label> -->
            <BaseInput
              :label="$t('citizenCard')"
              v-model="form.cartaoCidadao"
            />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <!-- <label class="text-sm font-medium text-primary-900 mb-1">
              {{ $t('phone') }}
            </label> -->
            <BaseInput :label="$t('phone')" v-model="form.telefone" />
          </div>
        </div>
        <div class="flex items-end">
          <BaseButton
            :label="$t('scheduling.searchPatient')"
            icon="pi pi-search"
            variant="primary"
            class="px-4 py-2 rounded ml-auto mt-4"
            iconPos="right"
          />
        </div>
      </div>
      <div v-else>
        <PersonalData></PersonalData>
      </div>
    </div>

    <!-- Footer -->
    <template #footer>
      <div
        class="flex flex-col md:flex-row md:items-center justify-between mt-6 border-t pt-4 gap-4"
      >
        <div class="flex items-center">
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
          <BaseButton :label="$t('cancel')" text class="text-[#4f39f6]" />
          <BaseButton :label="$t('scheduling.schedule')" variant="primary" />
          <BaseButton
            :label="$t('scheduling.scheduleAndAdmit')"
            disabled
            variant="secondary"
          />
        </div>
      </div>
    </template>
    <ViewPatient v-model:visible="IsViewPatient"></ViewPatient>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import Drawer from 'primevue/drawer';
import { MEDICOS, HORAS, EXAMES } from '../constants/common';
import Tag from 'primevue/tag';
import ViewPatient from './ViewPatient.vue';
import BaseButton from '../components/common/BaseButton.vue';
import BaseInput from '../components/common/BaseInput.vue';
import BaseDropdown from '../components/common/BaseDropdown.vue';
import PersonalData from './appointment/PersonalData.vue';
import Button from 'primevue/button';
import PrescriptionSection from './appointment/PrescriptionSection.vue';
import ExamesSection from './appointment/ExamesSection.vue';
const isUtente = ref(true);
const form = ref({
  medicoPrescritor: '',
  idPrescricao: '',
  senhaKiosk: '',
  hora: '11:00',
  data: '10/04/2025',
  exame: 'ECG',
  medicoConsulta: 'auto',
  nomeCompleto: '',
  dataNascimento: '',
  cartaoCidadao: '',
  telefone: '',
  confirmado: false,
});
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
.p-button:disabled {
  background-color: #b9bcc0;
  border-color: #b9bcc0;
}
@media (max-width: 768px) {
  /* For smaller screens, override max width */
  .p-drawer {
    width: 780px !important;
  }
}
</style>
