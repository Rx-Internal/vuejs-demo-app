<template>
  <Drawer
    class="!w-auto md:!w-auto lg:!w-auto w-full max-w-5xl bg-white p-6 rounded-xl shadow-md"
    :header="$t('scheduling.scheduleExam')"
    position="right"
  >
    <!-- Prescrição Section -->
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap items-end gap-4">
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('prescriberDoctor') }}
            </label>
            <Tag
              severity="secondary"
              :value="$t('optional')"
              rounded
              :style="{ fontSize: '12px', fontWeight: 'normal' }"
            ></Tag>
          </div>
          <Dropdown
            v-model="form.medicoPrescritor"
            :options="MEDICOS"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('prescriptionId') }}
          </label>
          <InputText v-model="form.idPrescricao" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('uploadPrescription') }}
            </label>
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
            class="w-full p-button-outlined"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('kioskPassword') }}
          </label>
          <InputText v-model="form.senhaKiosk" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Exames Section -->
    <div class="flex flex-col gap-4">
      <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold mt-9">
        {{ $t('exams') }}
      </div>
      <div class="flex flex-wrap gap-4 items-end">
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('hour') }}
          </label>
          <Dropdown
            v-model="form.hora"
            :options="HORAS"
            optionLabel="label"
            class="w-full"
            variant="filled"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('date') }}
          </label>
          <Calendar v-model="form.data" dateFormat="dd/mm/yy" class="w-full" />
        </div>
        <div class="flex flex-col flex-1 min-w-[150px]">
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('exam') }}
          </label>
          <Dropdown
            v-model="form.exame"
            :options="EXAMES"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
        <div class="flex flex-col flex-1 min-w-[200px]">
          <div class="flex justify-between items-center mb-1">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('consultingDoctor') }}
            </label>
            <Tag
              severity="secondary"
              :value="$t('optional')"
              rounded
              :style="{ fontSize: '12px', fontWeight: 'normal' }"
            ></Tag>
          </div>
          <Dropdown
            v-model="form.medicoConsulta"
            :options="medicosConsulta"
            optionLabel="label"
            class="w-full"
            optionValue="value"
          />
        </div>
      </div>
      <div>
        <Button
          link
          :label="$t('addExam')"
          icon="pi pi-plus-circle"
          class="text-[#4f39f6] px-4 py-2 text-sm"
        />
      </div>
    </div>

    <!-- Utente Section -->
    <div class="flex flex-col gap-4 mt-9">
      <div
        class="bg-[#E3E5FF] rounded-xl px-4 font-semibold flex justify-between items-center"
      >
        <span>{{ $t('patient') }}</span>
        <Button
          v-if="isUtente"
          :label="$t('readCitizenCard')"
          link
          icon="pi pi-check-circle"
          class="text-[#4f39f6] py-0 font-extrabold"
          style="font-weight: bolder"
          @click="isUtente = !isUtente"
        />
        <Button
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
          <label class="text-sm font-medium text-[#0C163D] mb-1">
            {{ $t('fullName') }}
          </label>
          <InputText v-model="form.nomeCompleto" class="w-full" />
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('birthDate') }}
            </label>
            <InputText v-model="form.dataNascimento" class="w-full" />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('citizenCard') }}
            </label>
            <InputText v-model="form.cartaoCidadao" class="w-full" />
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <label class="text-sm font-medium text-[#0C163D] mb-1">
              {{ $t('phone') }}
            </label>
            <InputText v-model="form.telefone" class="w-full" />
          </div>
        </div>
        <div class="flex items-end">
          <Button
            :label="$t('scheduling.searchPatient')"
            icon="pi pi-search"
            class="bg-primary text-white px-4 py-2 rounded ml-auto mt-4"
            iconPos="right"
          />
        </div>
      </div>
      <div v-else>
        <div class="my-4 text-sm">
          <h2 class="font-medium text-base my-6">{{ $t('personalData') }}</h2>
          <div class="grid grid-cols-5 gap-6">
            <div class="col-span-3">
              <label class="font-medium">{{ $t('fullName') }}</label>
              <p>Jorge Manuel da Guedes Campos</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">{{ $t('birthDate') }}</label>
              <p>16-08-1967</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('citizenCard') }}</label>
              <p>12345678</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('taxNumber') }}</label>
              <p>987654321</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('healthNumber') }}</label>
              <p>987654321</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('gender') }}</label>
              <p>Masculino</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('process') }}</label>
              <p>-</p>
            </div>
            <div class="col-span-3">
              <label class="font-medium">{{ $t('email') }}</label>
              <p>email@example.com</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">{{ $t('phone') }}</label>
              <p>912 345 678</p>
            </div>
            <div class="col-span-2">
              <label class="font-medium">{{ $t('address') }}</label>
              <p>Rua do Centro</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('postalCode') }}</label>
              <p>1000-000</p>
            </div>
            <div class="col-span-1">
              <label class="font-medium">{{ $t('locality') }}</label>
              <p>Lisboa</p>
            </div>
          </div>
        </div>

        <div class="my-4 text-sm">
          <h2 class="font-medium text-base my-4">
            {{ $t('emergencyContacts') }}
          </h2>
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
          <Button :label="$t('cancel')" link class="text-[#4f39f6]" />
          <Button :label="$t('scheduling.schedule')" class="bg-blue-500 text-white" />
          <Button
            :label="$t('scheduling.scheduleAndAdmit')"
            disabled
            class="bg-gray-400 text-white"
          />
        </div>
      </div>
    </template>
    <ViewPatient v-model:visible="IsViewPatient"></ViewPatient>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import Drawer from 'primevue/drawer';
import { MEDICOS, HORAS, EXAMES } from '../constants/common';
import Tag from 'primevue/tag';
import ViewPatient from './ViewPatient.vue';
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
