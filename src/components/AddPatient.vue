<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '55vw' }"
    :header="$t('dialog.createPatient')"
    :closable="true"
  >
    <div class="p-4 space-y-6">
      <!-- Tabs -->
      <TabView>
        <TabPanel :header="$t('tabs.personalData')">
          <!-- Personal Data Form -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 pb-2 mt-9 font-semibold">
            {{ $t('section.personalData') }}
          </div>

          <div class="mt-4">
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-3">
                <label class="text-sm font-medium flex justify-between">
                  {{ $t('form.fullName') }}
                  <span class="text-gray-400">{{ $t('form.required') }}</span>
                </label>
                <InputText v-model="form.nome" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('form.birthDate') }}
                  <span class="text-gray-400">{{ $t('form.required') }}</span>
                </label>
                <InputText v-model="form.dataNascimento" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.idCard') }}
                </label>
                <InputText v-model="form.cc" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.taxNumber') }}
                </label>
                <InputText v-model="form.contribuinte" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.patientNumber') }}
                </label>
                <InputText v-model="form.nutente" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.gender') }}
                </label>
                <Dropdown
                  v-model="form.sexo"
                  :options="SEXOS"
                  class="w-full"
                  optionLabel="label"
                  optionValue="value"
                  :placeholder="$t('form.select')"
                />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.process') }}
                </label>
                <InputText v-model="form.processo" class="w-full" />
              </div>
              <div class="col-span-3">
                <label class="block text-sm font-medium">
                  {{ $t('form.email') }}
                </label>
                <InputText v-model="form.email" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('form.phone') }}
                </label>
                <InputText v-model="form.telefone" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('form.address') }}
                </label>
                <InputText v-model="form.morada" class="w-full" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium">
                  {{ $t('form.postalCode') }}
                </label>
                <InputText v-model="form.codPostal" class="w-full" />
              </div>
              <div class="col-span-1">
                <label class="block text-sm font-medium">
                  {{ $t('form.city') }}
                </label>
                <InputText v-model="form.localidade" class="w-full" />
              </div>
            </div>
          </div>

          <!-- Exam History -->
          <div class="bg-[#E3E5FF] rounded-xl px-4 py-2 font-semibold my-6">
            {{ $t('section.appointments') }}
          </div>
          <div class="mt-6">
            <div class="container flex justify-between">
              <div class="row">
                <div class="label">{{ $t('appointment.time') }}</div>
                <div class="value">11:00</div>
              </div>
              <div class="row">
                <div class="label">{{ $t('appointment.date') }}</div>
                <div class="value">21/03/2025</div>
              </div>
              <div class="row">
                <div class="label">{{ $t('appointment.exam') }}</div>
                <div class="value">ECG</div>
              </div>
              <div class="row">
                <div class="label">{{ $t('appointment.consultantDoctor') }}</div>
                <div class="value">Dr. Manuel Ruiz</div>
              </div>
            </div>
          </div>
        </TabPanel>

        <!-- Add other tabs -->
        <TabPanel :header="$t('tabs.appointments')" :disabled="true" />
        <TabPanel :header="$t('tabs.subsystem')" :disabled="true" />
        <TabPanel :header="$t('tabs.contacts')" :disabled="true" />
      </TabView>
    </div>
    <template #footer>
      <div class="flex justify-end space-x-4">
        <Button
          :label="$t('buttons.cancel')"
          class="p-button-text text-sm"
          @click="visible = false"
        />
        <Button
          :label="$t('buttons.save')"
          icon="pi pi-save"
          class="text-sm"
          @click="save"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { SEXOS } from '../constants/common';
const visible = ref(false);
const form = ref({
  nome: 'Jorge Manuel da Guedes Campos',
  dataNascimento: '16-08-1967',
  cc: '12345678',
  contribuinte: '',
  nutente: '987654321',
  sexo: 'Masculino',
  processo: '',
  email: '',
  telefone: '912 345 678',
  morada: 'Rua do Centro',
  codPostal: '1000-000',
  localidade: 'Lisboa',
});

function save() {
  visible.value = false;
}
</script>

<style scoped>
:deep(.p-dialog-header) {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
