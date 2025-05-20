<template>
  <FormDialog
  class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    v-model="visible"
    :title="$t('drawerTitle')"
    position="right"
  >
    <!-- Prescrição Section -->
    <div class="flex flex-col gap-">
      <div class="flex flex-wrap items-end gap-4">
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('prescriberDoctor') }}</label>
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
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('prescriptionId') }}</label>
          <InputText v-model="form.idPrescricao" class="p-inputtext w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px] mb-4">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('uploadPrescription') }}</label>
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
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('kioskPassword') }}</label>
          <InputText v-model="form.senhaKiosk" class="p-inputtext w-full" />
        </div>
      </div>
    </div>

    <!-- Exames Section -->
    <div class="flex flex-col gap-4 mt-6">
      <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold">{{ $t('exams') }}</div>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('hour') }}</label>
          <BaseDropdown
            v-model="form.hora"
            :options="HORAS"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px] mb-4">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('date') }}</label>
          <Calendar v-model="form.data" dateFormat="dd/mm/yy" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px] ">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('exam') }}</label>
          <BaseDropdown
            v-model="form.exame"
            :options="EXAMES"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('consultingDoctor') }}</label>
          <BaseDropdown
            v-model="form.medicoConsulta"
            :options="medicosConsulta"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex items-center gap-2 mb-6">
          <ToggleSwitch v-model="checked1" />
          <span class="text-sm text-gray-700">{{ $t('admit') }}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('hour') }}</label>
          <BaseDropdown
            v-model="form.hora1"
            :options="HORAS"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px] mb-4">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('date') }}</label>
          <Calendar v-model="form.data1" dateFormat="dd/mm/yy" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('exam') }}</label>
          <BaseDropdown
            v-model="form.exame"
            :options="EXAMES"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('consultingDoctor') }}</label>
          <BaseDropdown
            v-model="form.medicoConsulta"
            :options="medicosConsulta"
            optionLabel="label"
            optionValue="value"
            class="p-dropdown"
          />
        </div>
        <div class="flex items-center gap-2 mb-6">
          <ToggleSwitch v-model="checked2" />
          <span class="text-sm text-gray-700">{{ $t('admit') }}</span>
        </div>
      </div>
    </div>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4 mt-6">
      <div class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center">
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
      <div class="my-4">
        <h2 class="text-lg font-semibold text-primary-500 my-6">{{ $t('personalData') }}</h2>
        <div class="grid grid-cols-5 gap-6">
          <div class="col-span-3">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('fullName') }}</label>
            <p class="text-gray-700">Jorge Manuel da Guedes Campos</p>
          </div>
          <div class="col-span-2">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('birthDate') }}</label>
            <p class="text-gray-700">16-08-1967</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('citizenCard') }}</label>
            <p class="text-gray-700">12345678</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('taxNumber') }}</label>
            <p class="text-gray-700">987654321</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('healthNumber') }}</label>
            <p class="text-gray-700">987654321</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('gender') }}</label>
            <p class="text-gray-700">{{ $t('male') }}</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('process') }}</label>
            <p class="text-gray-700">-</p>
          </div>
          <div class="col-span-3">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('email') }}</label>
            <p class="text-gray-700">email@example.com</p>
          </div>
          <div class="col-span-2">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('phone') }}</label>
            <p class="text-gray-700">912 345 678</p>
          </div>
          <div class="col-span-2">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('address') }}</label>
            <p class="text-gray-700">Rua do Centro</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('postalCode') }}</label>
            <p class="text-gray-700">1000-000</p>
          </div>
          <div class="col-span-1">
            <label class="text-sm font-medium text-primary-900 mb-1">{{ $t('locality') }}</label>
            <p class="text-gray-700">Lisboa</p>
          </div>
        </div>
      </div>

      <div class="my-4 text-sm">
        <h2 class="font-bold my-4 text-base">{{ $t('emergencyContacts') }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <label class="font-medium">{{ $t('fullName') }}</label>
            <p>Maria Jorge Braga Rebelo Ticas</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('phone') }}</label>
            <p>912 345 678</p>
          </div>
        </div>
      </div>

      <div class="my-4 text-sm">
        <h2 class="font-bold text-base">{{ $t('summary') }}</h2>
        <p>{{ $t('appointmentCreatedOn') }} 16/03/2025</p>
      </div>

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
      <div class="flex flex-col md:flex-row md:items-center justify-between mt-6 border-t pt-4 gap-4">
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
          <label for="confirm" class="ml-2">{{ $t('confirmPatientData') }}</label>
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
const medicosConsulta = [{ label: 'Automático', value: 'auto' }];
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
